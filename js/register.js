var dataEle = {
    firstname: {
        ele: document.getElementById("firstname"),
        err: document.getElementById("firstname_error"),
    },
    lastname: {
        ele: document.getElementById("lastname"),
        err: document.getElementById("lastname_error"),
    },
    email: {
        ele: document.getElementById("email"),
        err: document.getElementById("email_error"),
    },
    phone: {
        ele: document.getElementById("phone"),
        err: document.getElementById("phone_error"),
    },
    password: {
        ele: document.getElementById("password"),
        err: document.getElementById("password_error"),
    }
}

function checkRegister() {
    var checkErr = false;
    if (dataEle.firstname.ele.value == "") {
        showError(dataEle.firstname.err, "Please enter firstname.");
        checkErr = true;
    }
    if (dataEle.lastname.ele.value == "") {
        showError(dataEle.lastname.err, "Please enter lastname.");
        checkErr = true;
    }
    if (dataEle.email.ele.value == "") {
        showError(dataEle.email.err, "Please enter email.");
        checkErr = true;
    } else {
        if (validateEmail(dataEle.email.ele.value) == false) {
            showError(dataEle.email.err, "Invalid email.");
            checkErr = true;
        }
    }
    if (dataEle.phone.ele.value == "") {
        showError(dataEle.phone.err, "Please enter phone.");
        checkErr = true;
    } else {
        if (validatePhone(dataEle.phone.ele.value) == false) {
            showError(dataEle.phone.err, "Invalid phone.");
            checkErr = true;
        }
    }
    if (dataEle.password.ele.value == "") {
        showError(dataEle.password.err, "Please enter password.");
        checkErr = true;
    }

    if (!checkErr) {
        window.location = "verify.html";
    }
}

function validateEmail(email) {
    return email && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
}

function validatePhone(phone) {
    return phone && (/^\d{10,11}$/).test(phone);
}

function showError(ele, mess) {
    ele.style.display = 'block';
    ele.innerText = mess;
}

function hiddenError(ele) {
    ele.style.display = 'none';
}