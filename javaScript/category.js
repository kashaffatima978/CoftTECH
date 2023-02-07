
//*****************************Scroll back to top button**************************************
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 30; // For Safari
  document.documentElement.scrollTop = 300; // For Chrome, Firefox, IE and Opera
}


//*****************************  single page for each product **************************************

var opened
function product(ele) {
  opened = window.open("");

  console.log(window.location.pathname);
  var img = ele.children[0].getAttribute("src");
  var desc = ele.children[1].innerHTML;
  var price = ele.children[2].innerHTML;
  var doc = ("<html><head><title>Products</title></head><body><h1 class=\"h1\" style=\"margin-bottom: 5%;\">Shop Products</h1><div class=\"container\">"+
  "<div class=\"row\" ><div class=\"col-12 col-lg-3 col-md-3 item\"><img src="+img+" style=\"margin-left: 1%;\"></div><div class=\"col-12 col-lg-9 col-md-9 item\" style=\"padding-left: 2%;\">"+
  "<p class=\"one\" ><strong>"+desc+"</strong></p><label>Price: </label><h1 class=\"price\">"+price+"</h1>"+
   "<h3>Description: </h3><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a"+
   "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>"+
  "<button class=\"btnclass\">Buy Now</button></div></div></div>");
  opened.document.write(doc);

  var fileref=document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("href", 'buynow.css');
  console.log(fileref);
  opened.document.head.appendChild(fileref);

  var fileref1=document.createElement("link");
  fileref1.setAttribute("rel", "stylesheet");
  fileref1.setAttribute("href", 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
  console.log(fileref1);
  opened.document.head.appendChild(fileref1);


}
function Login(){
  window.open("login.html","_self");
 
}


function SignUp(){
  window.open("register.html","_self");
}