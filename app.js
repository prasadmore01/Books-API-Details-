let showBtn = document.getElementById("showBtn")
showBtn.addEventListener("click",showBooks)
let booksArr = []
let table = document.querySelector('table')

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

    display()
    // console.log(booksArr)


}


function display(){
    table.innerHTML+="<tr><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Pages</th></tr>"

    for(let i=0;i<20;i++){

        table.innerHTML += "<tr><td>"+ booksArr[i].title +"</td><td>"+booksArr[i].author+"</td><td>"+booksArr[i].country+"</td><td>"+booksArr[i].language+"</td><td>"+booksArr[i].pages+"</td></tr>"
    }
}