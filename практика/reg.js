function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var fields = [phone, username, email, password, confirmPassword];
    var errors = [usernameError, emailError,phoneError, passwordError, confirmPasswordError];
    var fieldIds = ["username", "email","email", "password", "confirmPassword"];


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

    // Проверка имени пользователя
    if (username.length < 2) {
        usernameError.style.display = "block";
        valid = false;
    } else {
        usernameError.style.display = "none";
    }

    // Проверка email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

     // Проверка номера телефона
    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
        phoneError.style.display = "block";
        valid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Проверка пароля
    if (password.length < 6) {
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Проверка подтверждения пароля
    if (password !== confirmPassword) {
        confirmPasswordError.style.display = "block";
        valid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (valid) {
        alert("Регистрация успешна!");
    }
    
}
  function goBack() {
    window.history.back();
}