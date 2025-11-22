
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
// Returns all element descendants of node that match selectors ([data-import]).
// this returns an array like element that can be looped through

function renderComponents(elements){

  // loop through this array list elements
  for (let element of elements) {
    // get the specific attributes that we stored the path to the component/module in
    const dataImport = element.getAttribute("data-import");
    
    fetch(dataImport)
      .then((res) => {
          if(!res.ok){
              throw "Not found"
          }
        return res.text();
      })
      .then((component) => {
        element.innerHTML = component;
        loadComponentScripts(element)
        const subComponents = element.querySelectorAll("[data-import]");
        renderComponents(subComponents)
      })
      .catch(() => {
        element.innerHTML = `<h4>Component not found</h4>`;
      });
  }
}
const componentElements = document.querySelectorAll("[data-import]");
renderComponents(componentElements)

function loadComponentScripts(element){
    const scripts = element.querySelectorAll("script");
    for (let script of scripts) {
        const newScript = document.createElement('script');
        if(script.src){
            newScript.src = script.src;
        }
        if(script.textContent){
            newScript.textContent = script.textContent;
        }
        script.remove()
        
        element.appendChild(newScript)
    }
}