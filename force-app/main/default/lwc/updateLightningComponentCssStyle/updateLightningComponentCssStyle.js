import { LightningElement } from 'lwc';

export default class UpdateLightningComponentCssStyle extends LightningElement {

    isComponentLoaded = false
    renderedCallback(){
        if(this.isComponentLoaded) return
        const style = document.createElement('style')
        style.innerText = ` c-update-lightning-component-css-style .slds-button_neutral{
            background: red;
            color: white;
        }`

        this.template.querySelector('lightning-button').appendChild(style)
        this.isComponentLoaded = true
    }

}