let showBtn = document.getElementById("showBtn")
showBtn.addEventListener("click",showBooks)
let booksArr = []
let table = document.querySelector('table')

function showBooks(){

    let books = new XMLHttpRequest();


    books.open("GET",'books.json',true)

    books.send()

    books.onreadystatechange =function(){
        if(books.readyState==4 && books.status===200){
        let response = (this.responseText)
        let res = JSON.parse(response)
        
        for(let i=0;i<res.length;i++){
            booksArr.push(res[i])
        }
        display()
        }

    }

   



}


function display(){
    table.innerHTML+="<tr><th>Id</th><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Pages</th></tr>"

    for(let i=0;i<50;i++){

        table.innerHTML += "<tr><td>"+(i+1)+"<td>"+ booksArr[i].title +"</td><td>"+booksArr[i].author+"</td><td>"+booksArr[i].country+"</td><td>"+booksArr[i].language+"</td><td>"+booksArr[i].pages+"</td></tr>"
    }
}