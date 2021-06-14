function scrollAvi(){
    window.scrollTo(0,998);
}

function scrollShay(){
    console.log(window.scrollY);
    window.scrollTo(0,535);
}

const personSelectionItem = document.querySelector("#Selection");
const commentorNameitem = document.querySelector("#name");
const contentItem = document.querySelector("#content");

async function getData(){
    const response = await fetch("/api");
    const data = await response.json();
    console.log(data);
    
    for(let i = 0; i<data.length; i++){
        const ShayCommentSection = document.querySelector("#ShayCommentSection");
        const AviCommentSection = document.querySelector("#AviCommentSection");
    
        const html = `<div class = "comment"><h3 class = "commentorName">${data[i].commentorName}</h1><p class = "commentBody">${data[i].content}</p></div>`;
    
        if(data[i].personSelection==="Shay"){
            ShayCommentSection.innerHTML += html;
        }else{
            AviCommentSection.innerHTML += html;
        }
        console.log(i);
    }
}

async function returnValues(){
    
    const personSelection = personSelectionItem.value;
    const commentorName = commentorNameitem.value;
    const content = contentItem.value;

    data = {personSelection, commentorName, content};
   
    options = {
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    };

    const response = await fetch("/api", options);
    const json = await response.json();
    console.log(json);
}

getData();


