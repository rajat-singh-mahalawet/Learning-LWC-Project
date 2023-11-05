import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType'
export default class ApexImportWireDemo extends LightningElement {

    accountList

    @wire(getAccountsByType, {type: 'Customer - Channel'})
    accounts


    @wire(getAccounts)
    accountHandler({data}){
        if(data){
            console.log(data)

            this.accountList = data.map(item => {
                let newType = item.Type === 'Customer - Channel' ? 'Channel' :
                            item.Type === 'Customer - Direct' ? 'Direct' : '----'
                return {...item, newType}
            })
            console.log(this.accountList)
        }
    }

}