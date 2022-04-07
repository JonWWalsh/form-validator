let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0 , "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
});

// id targets our id, serial targets classes(error class, success and failure icons), and message will print a message inside our .error class
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {   // id.value.trim removes extra white space from the value the user inputs.
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}

