import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = ['raj', 'tim', 'jon', 'bin']

    fetchDetailHandler(){

        const elem = this.template.querySelector('h1')
        elem.style.border = "1px solid red"
        console.log(elem.innerText)
        const userElement = this.template.querySelectorAll('.name')
        Array.from(userElement).forEach(currentItem => {
            currentItem.setAttribute('title', currentItem.innerText) 
            console.log(currentItem.innerText)
        });
    }

}