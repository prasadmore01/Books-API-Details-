let showBtn = document.getElementById("showBtn")
showBtn.addEventListener("click",showBooks)
let booksArr = []

function showBooks(){

    let books = new XMLHttpRequest();

    books.open("get",'books.json',true)

    books.send()

    books.onload =function(){
        if(books.status===200){
        let response = (this.responseText)
        let res = JSON.parse(response)
        
        for(let i=0;i<50;i++){
            booksArr.push(res[i])
        }
    
        }

    }

    console.log(booksArr)


}