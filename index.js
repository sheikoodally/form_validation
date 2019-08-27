function validate() {

    //input texts
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var mobile = document.getElementById('mobile').value;

    //spans
    var firstname_span = document.getElementById('firstname_span');
    var lastname_span = document.getElementById('lastname_span');
    var email_span = document.getElementById('email_span');
    var username_span = document.getElementById('username_span');
    var password_span = document.getElementById('password_span');
    var confirmPassword_span = document.getElementById('confirmPassword_span');
    var mobile_span = document.getElementById('mobile_span');

    //checks if all data is valid
    let firstCheck, lastCheck, emailCheck, mobileCheck, passwordCheck, confirmPasswordCheck, usernameCheck = false;

    //regex
    const nameRegex = new RegExp(/^[a-zA-Z\s]{2,30}$/);
    const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);


    if(phoneRegex.test(mobile) == false){
        console.log("no good");
    }
    else if (phoneRegex.test(mobile) == true){
        console.log("tested");
    }

    //
    if(firstname.trim() == "" && nameRegex.test(firstname) == false){
        document.getElementById("firstname_span").innerHTML = ("Please enter your firstname")
        firstname_span.style.display = "block";
        firstname_span.style.color = "red";
        firstCheck = false;
    }
    else if(firstname.trim() !== "" && nameRegex.test(firstname) == true){
        firstname_span.style.display = "none";
        firstCheck = true;
    }

   //
   if(lastname.trim() == "" && nameRegex.test(lastname) == false){
        document.getElementById("lastname_span").innerHTML = ("Please enter your lastname")
        lastname_span.style.display = "block";
        lastname_span.style.color = "red";
        lastCheck = false;
    }
    else if(lastname.trim() !== "" && nameRegex.test(lastname) == true){
        lastname_span.style.display = "none";
        lastCheck = true;
    }

    //
    if(email.trim() == ""){
        document.getElementById("email_span").innerHTML = ("Please enter your email")
        email_span.style.display = "block";
        email_span.style.color = "red";
        emailCheck = false;
    }
    else if(email.trim() !== ""){
        email_span.style.display = "none";
        emailCheck = true;
    }

    //
    if(username.trim() == ""){
        document.getElementById("username_span").innerHTML = ("Please enter your username")
        username_span.style.display = "block";
        username_span.style.color = "red";
        usernameCheck = false;
    }
    else if(username.trim() !== ""){
        username_span.style.display = "none";
        usernameCheck = true;
    }

    //
    if(password.trim() == ""){
        document.getElementById("password_span").innerHTML = ("Invalid Password")
        password_span.style.display = "block";
        password_span.style.color = "red";
        passwordCheck = false;
    }   
    else if(password.trim() !== ""){
        password_span.style.display = "none";
        passwordCheck = true;
    }

    //
    if(confirmPassword.trim() == ""){
        document.getElementById("confirmPassword_span").innerHTML = ("Password does not match ")
        confirmPassword_span.style.display = "block";
        confirmPassword_span.style.color = "red";
        confirmPasswordCheck = false;
    }
    else if(confirmPassword.trim() !== ""){
        confirmPassword_span.style.display = "none";
        confirmPasswordCheck = true;
    }

    //
    if(mobile.trim() == "" && phoneRegex.test(mobile) == false){
        mobile_span.innerHTML = ("Please enter your number")
        mobile_span.style.display = "block";
        mobile_span.style.color = "red";
        mobileCheck = false;
    }
    else if(mobile.trim() !== "" && phoneRegex.test(mobile) == true){
        mobile_span.style.display = "none";
        mobileCheck = true;
    }
  
    if (firstCheck == false || lastCheck == false || usernameCheck == false || emailCheck == false || passwordCheck == false || confirmPasswordCheck == false || mobileCheck == false){
        return false;
    }
   
 }

