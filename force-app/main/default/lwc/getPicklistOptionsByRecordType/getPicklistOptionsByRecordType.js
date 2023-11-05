import { LightningElement,wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistOptionsByRecordType extends LightningElement {
    selectedTypeValue
    selectedStatusValue
    cleanStatusOptions
    typeOptions = []

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo

    @wire(getPicklistValuesByRecordType, {objectApiName : ACCOUNT_OBJECT, recordTypeId : '$objectInfo.data.defaultRecordTypeId'})
    picklistHandler({data, error}){
        if(data){
            console.log(data)
            this.typeOptions = [...this.generatePicklistOption(data.picklistFieldValues.Type)]
            this.cleanStatusOptions = this.generatePicklistOption(data.picklistFieldValues.CleanStatus)
        }
        if(error){
            console.log('picklistHandlererror: ' + error)
        }
    }

    handleChange(event){
        if(event.target.name === 'Type'){
            this.selectedTypeValue = event.target.value
        }else if(event.target.name === 'CleanStatus'){
            this.selectedStatusValue = event.target.value
        }
    }

    generatePicklistOption(data){
        return data.values.map( item => ( {label: item.label, value: item.value} ) ) 
    }

}