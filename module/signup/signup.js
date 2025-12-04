
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

   
    const userData = {
      fullName,
      email,
      password
    };

    localStorage.setItem("userAccount", JSON.stringify(userData));

    alert("Account created successfully!");
    window.location.href = "/dashboard.html"; 
  });

