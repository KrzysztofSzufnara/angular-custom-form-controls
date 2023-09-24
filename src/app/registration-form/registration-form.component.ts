import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { RegistrationRequestModel } from './registration-request.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  public registrationForm!: FormGroup;

  get passwordField(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  get favouriteHexCodeValue(): string {
    return this.registrationForm.get('favouriteHexCode')?.value;
  }

  constructor() {}

  ngOnInit(): void {
    this.generateRegistrationForm();
  }

  public generateRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('Krzysztof', {
        validators: [Validators.required, UniversalValidators.noEmptyString],
      }),
      email: new FormControl('kszufnara@gmail.com', {
        validators: [Validators.required, EmailValidators.normal],
      }),
      password: new FormControl('testPass', {
        validators: [Validators.required, UniversalValidators.noWhitespace],
      }),
      favouriteHexCode: new FormControl('#fa0808'),
    });
  }

  public submitRegistrationForm(): void {
    if (this.registrationForm.valid) {
      const registrationRequest: RegistrationRequestModel = {
        ...this.registrationForm.value,
      };

      // Success 🎉
      console.log({ registrationRequest });
    }
  }
}
