import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderMethod from './renderMethod.html'

export default class RenderMethod extends LightningElement {

    //used to render different html files using same JS file in same LWX component.
    render(){
        return signinTemplate
    }
}