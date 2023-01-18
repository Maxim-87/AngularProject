import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

export interface Address {
  city: string
  street: string
  block: number
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/com/)]),
    name: new FormControl(''),
    password: new FormControl('', Validators.minLength(4)),
  })

  onSubmit() {
    debugger
    console.log('data =', this.registrationForm.value)
    console.log('errors =', this.registrationForm.errors)
  }

  get email() {
    return this.registrationForm.get('email')
  }
}
