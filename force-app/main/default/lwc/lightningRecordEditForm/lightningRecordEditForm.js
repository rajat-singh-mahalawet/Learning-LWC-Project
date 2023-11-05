import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/contact.Name'
import TITLE_FIELD from '@salesforce/schema/contact.Title'
import PHONE_FIELD from '@salesforce/schema/contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/contact.AccountId'

export default class LightningRecordEditForm extends LightningElement {
    contactObject = CONTACT_OBJECT
    fields      = {
        accountField : ACCOUNT_FIELD,
        nameField    : NAME_FIELD,
        titleField   : TITLE_FIELD,
        phoneField   : PHONE_FIELD,
        emailField   : EMAIL_FIELD
    }

    resetFields(){
        const allFields = this.template.querySelectorAll('lightning-input-field')

        if(allFields){
            Array.from(allFields).forEach(element => {
                element.reset()                
            })
        }
    }

}