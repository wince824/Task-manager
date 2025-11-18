
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');
const welcomeMessage = document.querySelector(".welcome");
const createMessage = document.getElementById("create");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    
    tabContent.forEach(c => c.classList.remove('active'));
    target.classList.add('active');

    
    if (tab.dataset.tabTarget === "#signup") {
      welcomeMessage.textContent = "Join TaskMaster";
      createMessage.textContent = "Create an account to boost your productivity";
    } else {
      welcomeMessage.textContent = "Welcome Back!";
      createMessage.textContent = "Enter your details to access your account";
    }
  });
});
