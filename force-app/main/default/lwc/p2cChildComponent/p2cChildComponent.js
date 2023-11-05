import { LightningElement, api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api message = 'I am from Child itself'
    @api cardHeading
}