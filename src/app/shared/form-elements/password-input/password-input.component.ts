import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input()
  public parentForm?: FormGroup;

  @Input()
  public fieldName?: string;

  @Input()
  public label?: string;

  public value!: string;

  public changed!: (value: string) => void;

  public touched!: () => void;
  public isDisabled?: boolean;

  public passwordFieldType: string = 'password';

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName!) as FormControl;
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  constructor() {}
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public togglePasswordVisible(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'text' ? 'password' : 'text';
  }
}
