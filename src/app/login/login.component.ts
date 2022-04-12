import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      password: this.formBuild.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]
      )
    })
  }

  sendData(){

  }

}
