import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // dateRangeValidator: ValidatorFn = (start_date:any, end_date:any): {
  //   [key: string]: any;
  // } | null => {
  //   let invalid = false;
  //   const from = this.fg && this.fg.get("from").value;
  //   const to = this.fg && this.fg.get("to").value;
  //   if (from && to) {
  //     invalid = new Date(from).valueOf() > new Date(to).valueOf();
  //   }
  //   return invalid ? { invalidRange: { from, to } } : null;
  // };

 validateDeliveryDate(start_date:any, end_date:any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Your validation logic here
      // const isValid = /* your validation logic */;
      // return isValid ? null : { deliveryDate: true };
          let invalid = false;
    const from = start_date.value;
    const to = end_date.value;
    if (from && to) {
      invalid = new Date(from).valueOf() > new Date(to).valueOf();
    }
    return invalid ? { invalidRange: { from, to } } : null;
    };
  }
}
