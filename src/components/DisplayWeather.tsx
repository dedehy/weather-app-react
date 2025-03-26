import React, { useState, useEffect } from "react";
import { MainWrapper } from "./weather.module";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import WeatherInfo from "./WeatherInfo";
import { fetchWeatherByCity, fetchWeatherByCoords } from "../api/weatherApi";

const DisplayWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const data = await fetchWeatherByCity(searchCity);
      setWeatherData(data);
      // setError("");
    } catch (error) {
      console.error(error);
      setError("City not found. Please try again.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchWeatherByCoords(latitude, longitude);
          setWeatherData(data);
          setIsLoading(true);
        } catch (error) {
          console.error(error);
          setError("Failed to fetch weather for your location.");
        }
      });
    };

    fetchData();
  }, []);

  return (
    <MainWrapper>
      <div className="container">
        <SearchBar
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSearch={handleSearch}
        />

        {error && <p className="error">{error}</p>}

        {weatherData && isLoading ? (
          <WeatherInfo weatherData={weatherData} />
        ) : (
          <Loading />
        )}
      </div>
    </MainWrapper>
  );
};

export default DisplayWeather;
