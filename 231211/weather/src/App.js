import "./App.css";
import { useState, useEffect } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getweatherByCurrentLocation(lat, lon);
    });
  };
  const getweatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f92de45eddf20c9ba7ffbe80ba0ec2e8&units=metric`;
    let response = await fetch(url);
    // console.log(url);
    let data = await response.json();
    console.log(`data`, data);
    // setWeather(data);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f92de45eddf20c9ba7ffbe80ba0ec2e8&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };
  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
    getWeatherByCity();
  }, [city]);
  return (
    <div className="container">
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} setCity={setCity} />
    </div>
  );
}

export default App;
