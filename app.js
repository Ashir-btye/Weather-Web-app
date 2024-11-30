let card_title = document.querySelector(".card-title");
let card_text = document.querySelector(".card-text");

let btn = document.querySelector(".search_btn");
let fieldinput = document.querySelector(".fieldinput");

function getWeather() {
    // this is my api key form weather app 
  const api = "df84072390ca9b2854d661803bbfc7bf";
    const city = fieldinput.value;
  // const city = "karachi";
//   console.log(city);
 
    // url Weather with api 
  const currentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

//   fetching the from api data 
  fetch(currentWeather)
    .then((res) => res.json())
    .then((data) => {
    //   console.log(data.main.temp);
      card_title.innerHTML = city
      card_text.innerHTML = `
      Tempature :  ${Math.round(data.main.temp -273.15)} 
      <br>
      Humidity : ${data.main.humidity}
      <br>
      Feels Like : ${Math.round(data.main.feels_like -273.15)}
      `
    })
    
    .catch((error) => {
      console.error(error);
    //   alert("Error Fetching The data");
    });
    
}

console.log(document.getElementsByTagName("video").playbackRate())
