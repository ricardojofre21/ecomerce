import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cUser = "user";
  cPwd = "user";
  alertUser!: string;

  constructor(private router: Router) { }
  login = new FormGroup({
    user: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }
  validar() {
    if (this.login.valid) {
      if (this.login.value.user == this.cUser && this.login.value.pwd == this.cPwd) {
        this.router.navigate(['listar-producto']);
      }
    } else {
      console.log('pasndao por aqui');
      this.login.markAllAsTouched();
    }

  }
}
