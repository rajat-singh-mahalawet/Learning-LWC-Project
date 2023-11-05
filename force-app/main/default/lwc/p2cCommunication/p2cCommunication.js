import { LightningElement } from 'lwc';

export default class P2cCommunication extends LightningElement {

    showModal = false
    msg
    handleClick(event){

        this.showModal = !this.showModal

    }

    closeHandler(event){
        this.msg = event.detail
        this.showModal = !this.showModal
    }
}