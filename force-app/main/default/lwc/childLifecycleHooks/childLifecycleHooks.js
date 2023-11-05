import { LightningElement } from 'lwc';

export default class ChildLifecycleHooks extends LightningElement {

    constructor(){
        super()

        //DOM parent elements are not loaded yet, so cannot access, cannot use query selector
        //DOM child elements are not loaded yet, so cannot access
        this.template.addEventListener('mouseover', function(){})
        console.log('Child constructor')
    }

    connectedCallback(){

        //can be used to fetch data from server
        const elem = this.template.querySelector('.btn')
        console.log(this.isConnected)
        console.log('Child connectedCallback')
        throw new Error('loading of child component failed')
    }

    renderedCallback(){
        console.log('Child renderedCallback')

    }
}