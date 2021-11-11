// JavaScript Document

document.querySelector('#darkmode').addEventListener('change', function(event){
  document.querySelector('body').classList.toggle('dark');
});

/* klikken met de muis op deButton*/
var deButton = document.querySelector(".Menu");

function doeFormNeerEnOp(){
    let hetFormulier = document.querySelector("form");
    hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);


