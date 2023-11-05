import { LightningElement , wire, api} from 'lwc';
import { getRecord , getFieldDisplayValue ,getFieldValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class GetRecordAdapterDemo extends LightningElement {
    @api recordId
    revenu
    name
    owner

    @wire(getRecord, {recordId : '$recordId', layoutTypes: ['Full'], modes: ['Edit']})
    getrecordHandler({data,error}){
        if(data){
            console.log(data)
            this.name = getFieldDisplayValue(data, NAME_FIELD) != null ? getFieldDisplayValue(data, NAME_FIELD) : getFieldValue(data, NAME_FIELD)
            this.owner = data.fields.Owner.displayValue != null ? data.fields.Owner.displayValue : data.fields.Owner.value
            this.revenu = data.fields.AnnualRevenue.displayValue != null ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
        }
        else if(error){
            console.error(error)
        }
    }
}