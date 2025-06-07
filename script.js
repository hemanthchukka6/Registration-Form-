document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorElement = document.getElementById("error");
  const successElement = document.getElementById("success");

  errorElement.textContent = "";
  successElement.textContent = "";

  // Basic Validation
  if (password !== confirmPassword) {
    errorElement.textContent = "Passwords do not match.";
    return;
  }

  if (password.length < 6) {
    errorElement.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Simulate success
  successElement.textContent = "Registration Successful!";
  this.reset();
});
