function api() {
  return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((response) => response.data.meals)
    .catch((error) => {
      console.error("Error fetching meals:", error);
    });
}

function menu(imageUrl, magaca = "Meal Cusub", faahfaahin = "Delicious food") {
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

function renderData() {
  api().then((meals) => {
    if (!meals || meals.length === 0) {
      console.log("No meals found.");
      return;
    }

    const container = document.getElementById("culinary-dishes");
    container.innerHTML = ""; 

    const shuffledMeals = meals.sort(() => 0.5 - Math.random());
    const limitedMeals = shuffledMeals.slice(0, 6);

    limitedMeals.forEach((meal) => {
      const newMeal = menu(
        meal.strMealThumb,
        meal.strMeal,
        meal.strInstructions.substring(0, 100) + "..."
      );
      container.appendChild(newMeal);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderData();

  const loadButton = document.getElementById("load-new-dishes");
  if (loadButton) {
    loadButton.addEventListener("click", renderData);
  } else {
    console.error("Button with ID 'load-new-dishes' not found!");
  }
});

document.getElementById("menu-button").addEventListener("click", function () {
  window.location.href = "/Menu.html";
});
