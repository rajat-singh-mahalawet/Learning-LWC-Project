import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track
    data = {
        name    : "Hello World from JS",
        course : "data"
    }

    courseChangeHandler(event){
        //this.data = {...this.data, course : event.target.value}
        this.data.course = event.target.value
    }

    //getter example
    num1 = 10
    num2 = 20

    get sumNumbers(){
        return this.num1 + this.num2
    }



}