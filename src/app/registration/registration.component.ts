import {Component} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'

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

  registrationForm: FormGroup<{ password: FormControl<string | null>; name: FormControl<string | null>; email: FormControl<string | null> }> = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  onSubmit(): void {
    console.log(this.registrationForm.value)
  }

  get email() {
    return this.registrationForm.get('email')
  }

  get password() {
    return this.registrationForm.get('password')
  }
}
