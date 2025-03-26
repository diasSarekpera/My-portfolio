alert("Il faut être connecté à internet pour pouvoir utiliser cette appliction");
const apiKey = "27d71ef22f881bb8c2e76cf459c0f21d";
//Récupération des Elément HTML
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
//Ajout de l'évènement click au bouton
searchBtn.addEventListener("click", () => {
  const cityEntered = cityInput.value;
  if (cityEntered) {
    getWeather(cityEntered);
  } else {
    alert("Veuillez entrez le nom d'une ville");
  }
});

async function getWeather(cityEntered) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityEntered}&appid=${apiKey}&units=metric&lang=fr`
    );
    if (!response.ok) {
      throw new Error("Ville non trouvée");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const { name, main, weather, wind, timezone } = data;
  document.getElementById("city").innerHTML = `Météo à ${name}`;
  document.getElementById("temp").innerHTML = `Température : ${main.temp}°C`;
  document.getElementById("description").innerHTML = `Description : ${weather[0].description}`;
  document.getElementById("humidity").innerHTML = `Humidité : ${main.humidity}%`;
  document.getElementById("wind").innerHTML = `Vent : ${wind.speed} km/h`;

  // Calculer l'heure locale
  const currentUTC = new Date().getTime(); // Temps actuel en millisecondes UTC
  const localTime = new Date(currentUTC + timezone * 1000); // Calcul heure locale

  // Afficher l'heure locale
  document.getElementById("local-time").innerText = `Heure locale : ${localTime.toLocaleTimeString()}`;
}


document.addEventListener("keyup", (e) => {
  if(e.key === "Enter"){
    searchBtn.click();
  }
})