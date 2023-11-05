import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigationHome extends NavigationMixin(LightningElement) {

    navigateHome(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName: 'home'
            }
        })
    }

    navigateChatter(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName: 'chatter'
            }
        })
    }

    navigateNewContact(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'

            }
        })
    }

    navigateNewContactDefault(){
        const defaultValues = encodeDefaultFieldValues({
                                FirstName: 'fname',
                                LastName: 'lname',
                                LeadSource: 'Other'

                                })

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        })
    }
}