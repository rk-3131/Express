const btn = document.getElementById("button");
const tempG = document.getElementById("temp");
const countryG = document.getElementById("country");
const conditionG = document.getElementById("condition");
const dateG = document.getElementById("date");
const dayG = document.getElementById("day");

const getDateAndTime = (e) => {
  // e.preventDefault();
  const now = new Date();
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const day = days[now.getDay()];
  const date = now.getDate();

  dateG.innerHTML = date;
  dayG.innerHTML = day;
};

const afterClicked = async (e) => {
  e.preventDefault();
  getDateAndTime();
  //   alert("clicked");
  const form = document.getElementById("myForm");
  const city = form.elements[0].value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce01ebf2067c5fdeda9ec64142038e2d`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const temp = json.main.temp - 273.15;
    const tempStatus = json.weather[0].main;
    const country = json.sys.country;
    tempG.innerHTML = `<p id="temp">${temp.toFixed(2)}&deg;C</p>`;
    countryG.innerHTML = country;
    console.log(tempStatus);
    if (tempStatus == "Sunny") {
      conditionG.innerHTML =
        '<i class="fa-solid fa-sun" style="color: #ffd43b"></i>';
    } else if (tempStatus == "Clouds") {
      conditionG.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    } else if (tempStatus == "Rainy") {
      conditionG.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
    } else {
      conditionG.innerHTML =
        '<i class="fa-regular fa-sun" style="color: #FFD43B;"></i>';
    }
  } catch (error) {
    console.error(error.message);
  }
};
btn.addEventListener("click", afterClicked);
