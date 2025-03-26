import React, { useState, useEffect, useCallback } from "react";
import { MainWrapper } from "./weather.module";
import axios from "axios";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import WeatherInfo from "./WeatherInfo";

const DisplayWeather = () => {
  const api_key = "82a45461ddde05ce2bdb97ed1e382848";
  const api_endpoint = "https://api.openweathermap.org/data/2.5/";

  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCity, setSearchCity] = useState("");

  const fetchCurrentWeather = useCallback(
    async (lat: number, lon: number) => {
      const url = `${api_endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
      const response = await axios.get(url);
      return response.data;
    },
    [api_endpoint, api_key]
  );

  const fetchWeatherData = async (city: string) => {
      const url = `${api_endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await axios.get(url);
      return response.data;
  };

  const handleSearch = async () => {
    if(!searchCity.trim()){
      return;
    }
    try{
      const data = await fetchWeatherData(searchCity);
      setWeatherData(data);
    }catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const data = await fetchCurrentWeather(latitude, longitude);
        setWeatherData(data);
        setIsLoading(true);
      });
    };
    fetchData();
  }, [fetchCurrentWeather]);

  return (
    <MainWrapper>
      <div className="container">
        <SearchBar
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          handleSearch={handleSearch}
        />

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
