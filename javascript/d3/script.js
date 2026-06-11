const validation = (e) => {
    event.preventDefault()

    let error = document.getElementById("error")
    let uname = e.target.username.value
    let passkey = e.target.password.value

    if (uname === "") {
        error.innerHTML = "please enter username"
    }
}