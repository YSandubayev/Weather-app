import type { ForecastDay } from "../api/weather";

type ForecastProps = {
  days: ForecastDay[];
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

export default function Forecast({ days }: ForecastProps) {
  return (
    <div className="forecast">
      <h3>Forecast</h3>
      <ul>
        {days.slice(0, 14).map((day) => (
          <li key={day.datetime}>
            {day.datetime}: {day.tempmin}°C – {day.tempmax}°C ({day.conditions}){" "}
            {icons[day.icon]}
          </li>
        ))}
      </ul>
    </div>
  );
}
