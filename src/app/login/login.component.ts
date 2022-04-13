import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuild: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
      password: this.formBuild.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    });
  }

  sendData() {
    if (this.form.invalid) {
      alert('blad w formularzu czekaj');
      return;
    } else {
      this.authService.logiIn(this.form.value.name, this.form.value.password).subscribe(() => {
        this.router.navigate(['events']);
      });
    }
  }
}
