import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidator = (passwordControlname:string,comfirmPasswordControlName:string)=>{
    const validator = (form:AbstractControl)=>{
        const passwordControl =form.get(passwordControlname);
        const comfirmPasswordControl = form.get(comfirmPasswordControlName);

        if(!passwordControl || !comfirmPasswordControl) return;

        if(passwordControl.value !== comfirmPasswordControl.value){
            comfirmPasswordControl.setErrors({notMatch:true});
        }else{
            const errors = comfirmPasswordControl.errors;
            if(!errors)return;

            delete errors.notMatch;
            comfirmPasswordControl.setErrors(errors);
        }

    }
    return validator
}