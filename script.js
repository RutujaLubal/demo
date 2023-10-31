function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
    if (!/^[a-zA-Z]+$/.test(name)) {
    errorMessage.textContent = "Name can only contain letters.";
    return false;
    }
    var existingUsernames = ["user1", "user2", "user3"]; 
    var isUsernameTaken = false;
    for (var i = 0; i < existingUsernames.length; i++) {
    if (existingUsernames[i] === username) {
    isUsernameTaken = true;
    break;
    }
    }
    if (isUsernameTaken) {
    errorMessage.textContent =
    "Username is already taken. Please choose another one.";
    return false;
    }
    if (email.indexOf("@") === -1) {
    errorMessage.textContent = "Invalid email address.";
    return false;
    }
    if (phone.length !== 10) {
    errorMessage.textContent = "Phone number should be 10 digits long.";
    return false;
    }
    if (
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
    errorMessage.textContent =
    "Password must contain uppercase, lowercase, numbers, and symbols.";
    return false;
    }
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(password);
    return false ;
}