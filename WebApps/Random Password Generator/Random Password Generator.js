var passwordLenght = 8;

function getPassword() {
    var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var password = Array(passwordLenght).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    document.getElementById("password").value = password;
}

function changePasswordLenght() {
    var x = prompt("Enter a Value", "Minimum 2 - Maximum 24");
    var num = parseInt(x);
    if (!Number.isInteger(num)) {
        changePasswordLenght();
    }
    else if (num < 2 || num > 24) {
        changePasswordLenght();
    }
    passwordLenght = num;
}