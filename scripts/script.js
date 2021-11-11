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


  var hamMenu = document.querySelector("nav ul");

  var hamButton = document.querySelector(".icon");
  
  
  
  
  // Click on menu Button
  
  hamButton.addEventListener("click", toggleHamburgerMenu);
  
  
  
  function toggleHamburgerMenu(){
  
      hamMenu.classList.toggle("visible");
  
  }