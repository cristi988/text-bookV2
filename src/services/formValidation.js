
export default class Validator {

    constructor(data){
        this.data = data;
        this.formErrors = {
        }
        this.isValid = true;        
    }


    validate() {
            if (!this.data.fName) {
                this.formErrors.fNameError = 'First name is needed';
            }

            if (!this.data.lName) {
                this.formErrors.lNameError = 'Last name is needed';
            }

            if (!this.data.email) {
                this.formErrors.emailError = 'Email is needed';
            }

            if (!this.data.phone) {
                this.formErrors.phoneError = 'Phone number is needed';
            }

            if (!this.data.address) {
                this.formErrors.addressError = 'Address is needed';
            }

            Object.keys(this.formErrors).forEach(key=>{
                if (this.formErrors[key]){
                    this.isValid = false;
                }
            })
    }

    getErrors() {
        return this.formErrors;
    }

    isValid(){
        return this.isValid;
    }
}
