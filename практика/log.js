function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var fields = [email, password];
    var errors = [emailError, passwordError];
    var fieldIds = ["email", "password"];


    // Проверка на пустые поля и установка красной границы
    fields.forEach(function(value, index) {
        if (value === '') {
            document.getElementById(fieldIds[index]).style.border = "2px solid red";
            errors[index].style.display = "block";
            valid = false;
        } else {
            document.getElementById(fieldIds[index]).style.border = "none";
            errors[index].style.display = "none";
        }
    });

    var valid = true;

    // Проверка email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Проверка пароля
    if (password.length < 6) {
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (valid) {
        alert("Вы успешно вошли в аккаунт");
    }
    
}