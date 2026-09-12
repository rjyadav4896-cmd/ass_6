// Get the registration form
alert("JavaScript is working!");
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    // Stop form from submitting
    event.preventDefault();

    // Get values from input fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    // Clear old error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("termsError").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    // Assume form is valid
    let valid = true;

    // -------------------------------
    // 1. Full Name Validation
    // -------------------------------

    if (name === "") {
      document.getElementById("nameError").innerHTML = "Full Name is required.";

      valid = false;
    }

    // -------------------------------
    // 2. Email Validation
    // -------------------------------

    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required.";

      valid = false;
    } else if (!email.includes("@")) {
      document.getElementById("emailError").innerHTML = "Enter a valid email.";

      valid = false;
    }

    // -------------------------------
    // 3. Mobile Number Validation
    // -------------------------------

    if (mobile === "") {
      document.getElementById("mobileError").innerHTML =
        "Mobile Number is required.";

      valid = false;
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      document.getElementById("mobileError").innerHTML =
        "Mobile Number must contain exactly 10 digits.";

      valid = false;
    }

    // -------------------------------
    // 4. Password Validation
    // -------------------------------

    if (password === "") {
      document.getElementById("passwordError").innerHTML =
        "Password is required.";

      valid = false;
    } else if (password.length < 8) {
      document.getElementById("passwordError").innerHTML =
        "Password must contain at least 8 characters.";

      valid = false;
    }

    // -------------------------------
    // 5. Confirm Password Validation
    // -------------------------------

    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").innerHTML =
        "Please confirm your password.";

      valid = false;
    } else if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerHTML =
        "Passwords do not match.";

      valid = false;
    }

    // -------------------------------
    // 6. Terms & Conditions
    // -------------------------------

    if (!terms) {
      document.getElementById("termsError").innerHTML =
        "You must accept the Terms & Conditions.";

      valid = false;
    }

    // -------------------------------
    // 7. Final Result
    // -------------------------------

    if (valid) {
      document.getElementById("success").innerHTML = "Registration Successful.";
    }
  });
