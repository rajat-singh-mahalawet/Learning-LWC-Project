import { LightningElement } from 'lwc';
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType'
export default class ApexImperitiveWithParamDemo extends LightningElement {

    accounts
    get options(){
        return [
            {label: 'None', value:'null'},
            {label: 'Direct', value:'Customer - Direct'},
            {label: 'Channel', value:'Customer - Channel'}
        ]
    }

    handleChange(event){
        getAccountsByType({type: event.target.value}).then(results=>{
            this.accounts = results
            console.log(results)
        }).catch(error=>{
            console.log(error)
        })
    }


}