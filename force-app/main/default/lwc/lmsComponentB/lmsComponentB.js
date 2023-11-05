import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, MessageContext, subscribe,unsubscribe } from 'lightning/messageService';
export default class LmsComponentB extends LightningElement {

    outValue
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){

        this.subscription = subscribe(this.context, SAMPLEMC, message=>this.handleMessage(message), {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.outValue = message.lmsData.value ? message.lmsData.value : 'No message published'
    }

    handleClick(){
        unsubscribe(this.subscription)
        this.subscription = null
        this.outValue = ''
    }
}