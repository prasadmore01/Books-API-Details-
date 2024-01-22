let showBtn = document.getElementById("showBtn")
showBtn.addEventListener("click",showBooks)

function showBooks(){

    let books = new XMLHttpRequest();

    books.open("get",'books.json',true)

    books.send()

    books.onload()=function(){
        if(books.status===200){
        let response = (this.responseText)
        console.log(response)
    
        }

    }


}