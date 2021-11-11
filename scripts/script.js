// JavaScript Document

//Dark mode//
window.onload = function() {
  runScript();
};

function runScript() {
  let item = document.getElementById('darkmode');

  if(item) {
      item.addEventListener('change', function(event){
          document.querySelector('body').classList.toggle('dark');
      });
  } else {
      console.log("hoi");
  }}  
//menu//

var deButton = document.querySelector("menu");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("formmenu");
	hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);