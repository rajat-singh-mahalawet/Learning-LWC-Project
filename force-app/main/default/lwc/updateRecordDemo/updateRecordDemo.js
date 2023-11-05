import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
const COLS = [
    {label : 'Id', fieldName: 'Id'},
    {label : 'Name', fieldName: 'Name'},
    {label : 'Title', fieldName: 'Title'},
    {label : 'Phone', fieldName: 'Phone', editable : true},
    {label : 'Email', fieldName: 'Email', type: 'email', editable:true}
]
export default class UpdateRecordDemo extends LightningElement {
    draftValues = []
    contactData=[]
    columns = COLS

    @wire(getListUi, {objectApiName: CONTACT_OBJECT, listViewApiName:'AllContacts'})
    listHandler({data,error}){
        if(data){
            console.log(data)

            this.contactData = data.records.records.map(item => {
                return {
                    "Id" : item.fields.Id.value,
                    "Name" : item.fields.Name.value,
                    "Title" : item.fields.Title.value,
                    "Phone" : item.fields.Phone.value,
                    "Email" : item.fields.Email.value
                }
            })
        }
        if(error){
            console.error(error)
        }
    }

    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const inputrecords = event.detail.draftValues.map(item => {
            console.log(item)
            const fields = {...item}
            console.log(JSON.stringify(fields))
            return {fields:fields}
        })
        //console.log(JSON.stringify(inputrecords))

        const promises = inputrecords.map(record => {
            console.log(record)
            if(record){
                updateRecord(record)
            }
        })

        Promise.all(promises).then(result => {
            console.log('Success')
            this.draftValues=[]
        }).catch(error => {
            console.log('error')
        })
    }

}