import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// alertas
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public template;
  public error = false;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  public log = "";

  loginForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    this.loginForm = this.createFormGroup();
  }


  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((res) => {
        this.router.navigate(['/home']);
        this.log = res.accessToken;
      }, (err) => {
        this.log = "";
        Swal.fire({
          icon: 'warning',
          title: 'Alert',
          text: err.error
        })
      })
    } else {
      this.log = "";
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Ocurrió un error a ingresar!'
      })
    }
  }

}
