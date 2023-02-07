


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          document.getElementById('navbar_top').style.backgroundColor= 'white';
          document.getElementById('navbar_top').style.padding='1%';
          document.getElementById('navbar_top').style.marginBottom ='1%';
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + '3px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
           document.getElementById('navbar_top').style.height = '14%';
           document.getElementById('navbar_top').style.padding='1%';
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


function Login(){
  window.open("login.html","_self");
 
}


function SignUp(){
  window.open("register.html","_self");
}