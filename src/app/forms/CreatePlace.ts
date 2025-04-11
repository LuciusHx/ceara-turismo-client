import { FormGroup, Validators, FormControl } from '@angular/forms';

export function CreatePlaceFormGroup(): FormGroup {
  return new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    about: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
    visitable: new FormControl(false, [Validators.required]),
    foto: new FormControl(null, [Validators.required]),
  });
}
