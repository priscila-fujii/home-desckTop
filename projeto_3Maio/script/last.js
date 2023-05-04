let corpoDoc;
let docCreator;
let tagH1;

setTimeout(function demorar(){
    corpoDoc = document.querySelector('.corpo');
    docCreator = document.createElement('p');
    tagH1 = document.getElementById("h1").style.color = '#ffe478';
    docCreator.textContent = "Novo Mundoooo";
    corpoDoc.appendChild(docCreator);
}, 6000);

// -------------------------------------