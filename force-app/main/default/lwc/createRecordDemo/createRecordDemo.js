import { LightningElement } from 'lwc';
import { createRecord, generateRecordInputForCreate } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class CreateRecordDemo extends LightningElement {
    formfields = {}
    handleInputChange(event){
        const {name, value} = event.target
        this.formfields[name] = value
    }

    createContact(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formfields}
        //const inp = generateRecordInputForCreate(this.formfields, CONTACT_OBJECT.objectApiName )
        //console.log( inp  )
        createRecord(recordInput).then(result=>{
            this.showToast('Contact Created', 'Id : ' + result.id)
            this.template.querySelector('.input-form').reset()
        }).catch(error=>{
            this.showToast('Contact Creation Failed', error.body.message, 'error')
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant:variant || 'success'
            })
        )
    }



}