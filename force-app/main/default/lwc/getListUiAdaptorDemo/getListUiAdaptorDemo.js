import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title'
export default class GetListUiAdaptorDemo extends LightningElement {

    contacts
    pageToken = 0
    previousPageToken
    nextPageToken
    @wire(getListUi, {objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts', sortBy : TITLE_FIELD, pageSize: 10, pageToken : '$pageToken'})
    getlistHandler({data, error}){
        if(data){
            console.log(data)
            this.contacts           = data.records.records
            this.previousPageToken  = data.records.previousPageToken
            this.nextPageToken      = data.records.nextPageToken
        }
        else if(error){
            console.error(error)
        }
    }

    handlePreviousClick(){
        this.pageToken = this.previousPageToken

    }

    handleNextClick(){
        if(this.nextPageToken){
            this.pageToken = this.nextPageToken
        }

    }
}