import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import IconChanger from "./IconChanger";

type WeatherInfoProps = {
  weatherData: {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    sys: {
      country: string;
    };
    weather: {
      main: string;
    }[];
    wind: {
      speed: number;
    };
  };
};

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData }) => {
  return (
    <>
      <div className="weatherArea">
        <h1>{weatherData.name}</h1>
        <span>{weatherData.sys.country}</span>
        <div className="icon">
          <IconChanger weather={weatherData.weather[0].main} />
        </div>
        <h1>
          {weatherData.main.temp.toFixed(0)}
          <TbTemperatureCelsius />
        </h1>
        <h2>{weatherData.weather[0].main}</h2>
      </div>

      <div className="bottomInfoArea">
        <div className="humidityLevel">
          <WiHumidity className="windIcon" />
          <div className="humidInfo">
            <h1>{weatherData.main.humidity}%</h1>
            <p>Humidity</p>
          </div>
        </div>

        <div className="wind">
          <FaWind className="windIcon" />
          <div className="humidInfo">
            <h1>{weatherData.wind.speed}km/h</h1>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
