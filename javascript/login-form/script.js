const form =
document.getElementById("loginform");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const error = document.getElementById("error");

    if(username === "" && password === ""){

        error.innerText = "Please enter username and password";

    }

    else if(username === ""){

        error.innerText = "Please enter username";

    }

    else if(password === ""){

        error.innerText = "Please enter password";

    }

    else{

        error.innerText = "Login Successful";

    }
});