function toLogin() {
    window.location = "login.html";
}

function toUnicode(event, elmnt) {
    var eles = document.getElementById('div_verify_code').children;
    if (!/[^0-9]/g.test(event.key)) {
        elmnt.value = event.key;
        var next = elmnt.tabIndex;
        if (next < eles.length) {
            eles[next].focus();
        }
        if (next === eles.length) {
            eles[0].focus();
        }
    } else {
        if (event.key = "Backspace") {
            elmnt.value = '';
        }
    }
    for (const ele of eles) {
        if (ele.value === '') {
            document.getElementById('btn_verify').setAttribute("disabled", "disabled");
            return;
        }
    }
    document.getElementById('btn_verify').removeAttribute("disabled");
}

function blockCharacter(event) {
    if (/[^0-9]/g.test(event.key)) {
        event.preventDefault();
        return false;
    }
}