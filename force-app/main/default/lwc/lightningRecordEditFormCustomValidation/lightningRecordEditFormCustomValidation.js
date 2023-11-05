import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class LightningRecordEditFormCustomValidation extends LightningElement {

    accountObject = ACCOUNT_OBJECT
    inputValue  = ''

    handleInput(event){
        this.inputValue = event.target.value
    }

    formSubmitHandler(event){
        event.preventDefault()
        const inputField = this.template.querySelector('lightning-input')
        if(! this.inputValue.includes('Australia')){
            inputField.setCustomValidity("Name does not contain 'Australia'")
        }else{
            inputField.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = this.inputValue
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputField.reportValidity()
    }

    successHandler(event){
        this.showToast("Account Created", "Records Id: " + event.detail.id, "success")

    }
    

    errorHandler(event){
        this.showToast('Account Creation Failed', 'Error Message: ' + event.detail.message, 'error')
    }

    showToast(title1, message1, variant1){

        const showToast = new ShowToastEvent({
            title: title1,
            message: message1,
            variant: variant1
        })

        this.dispatchEvent(showToast)
    }
}