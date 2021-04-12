import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MyDateValidators {

    static readonly isInFuture: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

        if (control.value === null) {
            return null;
        }

        const selectedDate = new Date(control.value);
        const dateNow = new Date();

        const isInFuture = selectedDate > dateNow;

        return isInFuture ? null : { 'future': { dateNow, selectedDate } };
    }

    static readonly isHigher: (condition?: Date) => ValidatorFn =
        (condition?: Date): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {

            if (control.value === null) {
                return null;
            }

            const selectedDate = new Date(control.value);

            const dateNow = condition ? condition : new Date();
            
            const isInFuture = selectedDate > dateNow;

            console.log("Validator;", "Now:", dateNow, "Selected:", selectedDate, "Is lager:", isInFuture);

            return isInFuture ? null : { 'future': { dateNow, selectedDate } };
        }

}
