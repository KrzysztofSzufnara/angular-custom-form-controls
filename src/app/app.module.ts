import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { InputComponent } from './shared/form-elements/input/input.component';
import { InputModule } from './shared/form-elements/input/input.module';
import { FieldErrorsComponent } from './shared/form-elements/field-errors/field-errors.component';
import { PasswordInputComponent } from './shared/form-elements/password-input/password-input.component';
import { PasswordInputModule } from './shared/form-elements/password-input/password-input.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    InputComponent,
    FieldErrorsComponent,
    PasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    //InputModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CommonModule,
    PasswordInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far);
  }
}
