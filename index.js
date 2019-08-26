function validate() {
    var firstname = document.getElementById('firstname').value;
   var lastname = document.getElementById('lastname').value;
   var email = document.getElementById('email').value;
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
   var mobile = document.getElementById('mobile').value;
   var message = document.getElementById('message').value;
 
  if(firstname==""){
   alert("Please enter your firstname");
   return false;
 
 }else if(lastname==""){
   alert("Please enter your lastname");
   return false;
 
 }else if (email==""){
   alert("Please enter your  email address");
   return false;
 
  }else if (username==""){
   alert("Please enter your username");
   return false;
 
 }else if(mobile==""){
   alert("Please enter your mobile number");
   return false;
 
   }else if(message==""){
   alert("Please jot down something here");
   return false;
 }
 }