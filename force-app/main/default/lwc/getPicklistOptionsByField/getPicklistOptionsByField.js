import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'

export default class GetPicklistOptionsByField extends LightningElement {
    selectedValue = ''
    industryOptions = []
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfoParam

    @wire(getPicklistValues , {recordTypeId: '$objectInfoParam.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
    pickListHandler({data}){
        if(data){
            console.log(data)
            this.industryOptions = [...this.generatePicklistOptions(data)]
        }

    }

    handleChange(event){
        this.selectedValue = event.target.value
    }


    generatePicklistOptions(data){
       return data.values.map( item => {return {label: item.label, value: item.value} } )
        // return data.values.map(function(item){
        //     return {label: item.label, value: item.value}
        // })
    }




}