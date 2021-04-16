import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export class BetweenValidator {

    static readonly isBetween: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

        if (control.value === null) {
            return null;
        }

        const number = control.value;

        

        return (number > 50 && number < 100) ? null : {value : {number}};

        // console.log('isBetween validator', number);

        // return null;
    }
}
