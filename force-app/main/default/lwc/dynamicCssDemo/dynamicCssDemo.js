import { LightningElement } from 'lwc';

export default class DynamicCssDemo extends LightningElement {

    percent = 10
    changeHandler(event){
        this.percent = event.target.value

    }

    get percentWidth(){
        return `width:${this.percent}%`
    }
}