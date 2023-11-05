import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts'
import getAccountsByType from '@salesforce/apex/AccountController.getAccountsByType'
export default class ApexImperitiveDemo extends LightningElement {

    accounts
    handleClick(){

        getAccounts().then(results =>{
            console.log(results)
            if(this.account != results){
                this.accounts = results
            }
        }).catch(error=>{
            console.log(error)
        })
    }
}