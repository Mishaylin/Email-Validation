function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var reTypeEmail = document.getElementById("retypeEmail").value;
    var password = document.getElementById("password").value;
    var reTypePassword = document.getElementById("retypePassword").value;

    // Used to ensure that whatever entered in the email type box is valid with the use of the @ sign

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == null || name.trim() === "") {
      alert("You forgot to enter your name");
      return false;
    }
    // The use of explaination mark,is that if the email doesn't contain a @ sign it must alert the user
    if (!emailRegex.test(email)) {
      alert("Email is not valid");
      return false;
    }

    if (email !== reTypeEmail) {
      alert("Retype your email correctly");
      return false;
    }

    if (password.trim() === "") {
      alert("Password is required to continue");
      return false;
    }

    if (password !== reTypePassword) {
      alert("Passwords do not match the one you have created");
      return false;
    }

    if (!document.getElementById("checkbox").checked) {
      alert("Passwords do not match each other");
      return false;
    }

    // Show the completion message in a window.alert()
    window.alert("Form is filled and submitted");

    // Prevent form submission (for demonstration purposes)
    return false;
  }