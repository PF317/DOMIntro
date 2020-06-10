let body = document.querySelector('body');
body.setAttribute('style','color: cornflowerblue')

let newButton = document.createElement('button');
body.appendChild(newButton);
newButton.innerHTML = "ADD";

let i = 0;

function addButtonClicked(){
     //console.log('hit')
 
     let newHeader = document.createElement('h2');
     newHeader.innerHTML  = "Coded by Patrick Francois";
     newHeader.setAttribute('id',i);  
     body.appendChild(newHeader);
   
    console.log(newHeader);
}
newButton.addEventListener('click', addButtonClicked);

let newButton2 = document.createElement('button');
body.appendChild(newButton2);
newButton2.innerHTML = "REMOVE";

function removeButtonClicked(){
        console.log('hit')

    let newHeader = document.createElement('h2');
    newHeader.innerHTML  = "Coded by Patrick Francois";
    body.appendChild(newHeader);
    
  
}
newButton2.addEventListener('click', removeButtonClicked);