import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement {
    userDetails

    @api
    get details(){
        return this.userDetails

    }
    set details(data){
        let ageDouble = data.age * 2 
        this.userDetails = {...data, age:ageDouble, 'location':'Melbourne'}

    }

}