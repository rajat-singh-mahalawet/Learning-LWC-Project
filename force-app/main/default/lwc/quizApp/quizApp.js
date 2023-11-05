/**
 * @description       : 
 * @author            : Rajat M
 * @group             : 
 * @last modified on  : 07-24-2023
 * @last modified by  : Rajat M
**/
import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={}
    correctAnswer = 0
    isSubmitted = false

    quizQuestion = [
        {
            id          : "Question1",
            question    : "Which one of the following is not a template loop?",
            answers     :{
                a : "for:each",
                b : "iterator",
                c : "map loop"
            },
            correctAnswer : "c"
        },
        {
            id          : "Question2",
            question    : "Which one of the following is invalid in LWC folder?",
            answers     :{
                a : ".svg",
                b : ".apex",
                c : ".js"
            },
            correctAnswer : "b"
        },
        {
            id          : "Question3",
            question    : "Which one of the following is not a directive?",
            answers     :{
                a : "for:each",
                b : "if:true",
                c : "@track"
            },
            correctAnswer : "c"
        }

    ]

    changeHandler(event){
        console.log("name: " + event.target.name)
        console.log("value: " + event.target.value)
        const {name, value} = event.target

        this.selected = {...this.selected, [name] : value}
        console.log(Object.keys(this.selected))
    }

    get answerStyle(){
        return `slds-text-heading_large ${this.quizQuestion.length === this.correctAnswer ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.quizQuestion.length)
    }

    submitHandler(event){
        event.preventDefault(); //to avoid to refresh the page
        let correctAndArr   = this.quizQuestion.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswer  = correctAndArr.length
        this.isSubmitted    = true
        console.log(`Correct answer is ${this.correctAnswer}`)
        

    }

    resetHandler(){
        this.selected       = {}
        this.correctAnswer  = 0
        this.isSubmitted    = false

    }

}