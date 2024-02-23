import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mail1';

  loginform = new FormGroup({

    Email:new FormControl('',[Validators.required,Validators.email]),
    Password: new FormControl('',[Validators.required,Validators.minLength(10)])
  })
  get Email() {
    return this.loginform.get("Email");
  }
  get Password() {
    return this.loginform.get('Password')
  }
  OnSubmit(){
    console.log('valid',this.loginform.valid);
    console.log(this.loginform.value);
  }

}
