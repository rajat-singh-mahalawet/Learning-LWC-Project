import { LightningElement } from 'lwc';

export default class CondtionalRendering extends LightningElement {
    data = {
        'isVisible' : false
    }

    isVisible = false

    handleClick(){
        if(!this.data.isVisible)
        {
            this.isVisible = true
            this.data = {...this.data, 'isVisible' : true}
        }
        else{
            this.isVisible = false
            this.data = {...this.data, 'isVisible' : false}
        }
    }

    changeHandler(event)
    {  
        this.data = {...this.data, 'name' : event.target.value}

    }

    get nameValue(){
        return this.data.name === 'hello'
    }

    get getLabel(){
        return this.data.isVisible ? 'Hide Text' : 'Show Text'
    }

    //falsy value
    //x = 0, false, undefined, null, "" 
}