import { useEffect, useState } from "react";
import { getWeather } from "../fetches/weather";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then(setWeather).catch(console.error);
  }, []);

  if (!weather) return <p>Loading...</p>;

  return (
    <div>
      <h3>Weather</h3>
      <p>{weather.temperature} {weather.unit}</p>
      <p>{weather.location}</p>
      <small>{weather.timestamp}</small>
    </div>
  );
}