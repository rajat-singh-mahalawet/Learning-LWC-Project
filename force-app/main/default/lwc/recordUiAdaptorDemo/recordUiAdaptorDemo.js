import { LightningElement, wire, api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class RecordUiAdaptorDemo extends LightningElement {
    @api recordId
    data1=[]
    column=[
        { label: 'Label', fieldName: 'Name' },
        { label: 'Account Number', fieldName: 'AccountNumber' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' }
    ]
    temp = {}

    @wire(getRecordUi, {recordIds : '$recordId', layoutTypes : ['Full'], modes: ['Edit']})
    recordUiHandler({data}){
        if(data){
            console.log(data.records[this.recordId].fields)
            
            this.column.forEach(item => {
                let ky = item.fieldName
                let val = data.records[this.recordId].fields[item.fieldName].value
                 
                this.temp[ky] = val 
                
            })

            this.data1 = [...this.data1, this.temp]
            console.log(this.data1)
        }

    }  
}