import { AbstractControl } from '@angular/forms'

export class Validations {

  // validación solo textos
  static allText(control: AbstractControl) {
    if (control.value != null && control.value.match(/^[0-9]/)) {
      return {onlyText: true}
    }
    return null;
  }
}
