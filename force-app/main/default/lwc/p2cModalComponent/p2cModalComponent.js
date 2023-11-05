import { LightningElement } from 'lwc';

export default class P2cModalComponent extends LightningElement {

    okHandler(){

        const custmEvent = new CustomEvent('close',{
            bubbles:true,
            detail : "Hello!!! Closed the modal"
        })
        //EventTarget.dispatchEvent(custmEvent) or simply below
        this.dispatchEvent(custmEvent)
    }
}