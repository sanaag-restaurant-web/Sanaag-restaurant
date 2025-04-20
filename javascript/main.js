function abuuriCunto(imageUrl, magaca = "Meal Cusub", faahfaahin = "Delicious food") {
    const dish = document.createElement("div");
    dish.className = "dishes";
  
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = magaca;
  
    const title = document.createElement("h3");
    title.textContent = magaca;
  
    const desc = document.createElement("p");
    desc.textContent = faahfaahin;
  
    dish.appendChild(img);
    dish.appendChild(title);
    dish.appendChild(desc);
  
    return dish;
  }
  
  function sooDegCuntooyinTiro(tirada = 6) {
    const meesha = document.getElementById("culinary-dishes");
    meesha.innerHTML = ""; 
  
    for (let i = 0; i < tirada; i++) {
      fetch("https://foodish-api.com/api/")
        .then(res => res.json())
        .then(data => {
          const Meal = abuuriCunto(data.image, `Meal ${i + 1}`);
          meesha.appendChild(Meal);
        })
        .catch(err => console.error("Cunto lama keeni karin:", err));
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
  
    sooDegCuntooyinTiro();
  
   
    const button = document.getElementById("load-new-dishes");
    button.addEventListener("click", () => {
      sooDegCuntooyinTiro();
    });
  });
  
