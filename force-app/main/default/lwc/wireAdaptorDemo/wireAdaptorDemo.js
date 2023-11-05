import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi'
import Id from '@salesforce/user/Id'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireAdaptorDemo extends LightningElement {
    userId = Id
    Name
    Email
    
    userDetail
    @wire(getRecord, {recordId : '$userId', fields})
    userDetailsHandler({data, error}){
        if(data){

            this.userDetail = data.fields
            this.Name =  data.fields.Name.value
            this.Email = data.fields.Email.value
        }
        else if(error){
            //console.log(error)
        }
    }

    @wire(getRecord, {recordId : '$userId', fields})
    userDetailProperty

    if(userDetailProperty){
        //console.log(userDetailProperty.data)
    }

    objectInfoData
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            this.objectInfoData = data
        }
        if(error){
            console.error(error)
        }
    }

    objectInfosData
    sObjects = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]

    @wire(getObjectInfos, {objectApiNames : '$sObjects'})
    objectInfos({data}){
        if(data){
            this.objectInfosData = data
            console.log(data)
        }
    }


}