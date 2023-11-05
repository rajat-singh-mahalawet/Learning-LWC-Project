import { LightningElement } from 'lwc';

export default class ParentLifecyleHooks extends LightningElement {

    constructor(){
        super()

        //DOM parent elements are not loaded yet, so cannot access, cannot use query selector
        //DOM child elements are not loaded yet, so cannot access
        this.template.addEventListener('mouseover', function(){})
        console.log('Parent constructor')
    }

    connectedCallback(){

        //can be used to fetch data from server
        const elem = this.template.querySelector('.btn')
        console.log(this.isConnected)
        console.log('Parent connectedCallback')
    }

    renderedCallback(){
        console.log('Parent renderedCallback')

    }

    errorCallback(err, stacktrace){
        console.log(err.message)
        console.log(stacktrace)
    }
}