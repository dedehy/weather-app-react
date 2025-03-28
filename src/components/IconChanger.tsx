import React from "react";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";

type IconChangerProps = {
  weather: string;
};

const IconChanger: React.FC<IconChangerProps> = ({ weather }) => {
  let iconElement: React.ReactNode;
  let iconColor: string;

  switch (weather) {
    case "Rain":
      iconElement = <BsFillCloudRainFill />;
      iconColor = "#272829";
      break;

    case "Clear":
      iconElement = <BsFillSunFill />;
      iconColor = "#FFC436";
      break;
    case "Clouds":
      iconElement = <BsCloudyFill />;
      iconColor = "#102C57";
      break;

    case "Mist":
      iconElement = <BsCloudFog2Fill />;
      iconColor = "#279EFF";
      break;
    default:
      iconElement = <TiWeatherPartlySunny />;
      iconColor = "#7B2869";
  }

  return (
    <span className="icon" style={{ color: iconColor }}>
      {iconElement}
    </span>
  );
};

export default IconChanger;
