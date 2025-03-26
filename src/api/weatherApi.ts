import axios from "axios";

const API_KEY = "82a45461ddde05ce2bdb97ed1e382848";
const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/";

export const fetchWeatherByCity = async (city: string) => {
  const url = `${API_ENDPOINT}weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchWeatherByCoords = async (lat: number, lon: number) => {
  const url = `${API_ENDPOINT}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};