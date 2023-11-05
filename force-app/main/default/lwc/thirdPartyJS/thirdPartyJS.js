import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdPartyJS extends LightningElement {

    showCurrentTime
    isLibraryLoaded = false

    renderedCallback(){
        if(this.isLibraryLoaded){
            return
        }else{
            Promise.all([

            loadScript(this, MOMENT +'/moment/moment.min.js'),
            loadStyle(this, ANIMATE+'/animate/animate.min.css')
            ]).then(()=>{

                this.displayTime()

            }).catch(error=>{
                console.log(error)
            })
            this.isLibraryLoaded = true
    }
    }

    displayTime(){
        this.showCurrentTime = moment().format('LLLL')

    }


}