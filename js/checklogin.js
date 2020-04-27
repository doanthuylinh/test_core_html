function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" | password == "") {
        alert('Please enter username and password.');
    } else {
        alert('Login succesfully.');
        window.location = "manage.html";
    }
}