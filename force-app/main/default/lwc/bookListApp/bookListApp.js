import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookListApp extends LightningElement {
    searchkey = 'Man'
    bookList
    timer
    
    connectedCallback(){
        this.fetchBookList()
    }

    fetchBookList(){
        fetch(BOOK_URL+this.searchkey).then(response=>response.json()).then(data=>{
            this.bookList = data.items
            console.log(this.bookList)
        }).catch(error=>{
            console.log(error)
        })
    }

    changeHandler(event){
        window.clearTimeout(this.timer)
        this.searchkey = event.target.value
        this.timer = setTimeout(()=>{
            this.fetchBookList()
        },1000)
    }


}