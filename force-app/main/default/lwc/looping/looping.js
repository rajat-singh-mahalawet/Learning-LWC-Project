import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Toyota", "Maruti", "Mercedes"]


    ceoList = [
        {
            id : 1,
            company : "Facebook",
            name    : "Mark Zuckerberg"            
        },
        {
            id : 2,
            company : "Space X",
            name    : "Elon Musk"            
        },
        {
            id : 3,
            company : "Amazon",
            name    : "Rajat"            
        }
    ]
}