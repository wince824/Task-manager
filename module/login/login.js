
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("userAccount"));

    if (!savedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      alert("Login successful!");

      window.location.href = "/dashboard.html";
    } else {
      alert("Incorrect email or password.");
    }
  });

