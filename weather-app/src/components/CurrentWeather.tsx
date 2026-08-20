import type { WeatherData } from "../api/weather";

type CurrentWeatherProps = {
  weather: WeatherData;
};

const icons: Record<string, string> = {
  "clear-day": "☀️",
  "clear-night": "🌙",
  "rain": "🌧️",
  "snow": "❄️",
  "cloudy": "☁️",
  "partly-cloudy-day": "🌤️",
  "partly-cloudy-night": "🌥️",
  "wind": "💨",
  "fog": "🌫️",
};


export default function CurrentWeather({ weather }: CurrentWeatherProps) {
  return (
    <div className="current-weather">
      <h2>{weather.resolvedAddress}</h2>
      <p>Temperature: {weather.currentConditions.temp}°C</p>
      <p>
        Condition: {weather.currentConditions.conditions}{" "}
        {icons[weather.currentConditions.icon]}
      </p>
    </div>
  );
}
