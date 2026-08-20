import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import RefreshButton from "./components/RefreshButton";
import Footer from "./components/Footer";
import { fetchWeather } from "./api/weather";
import type { WeatherData } from "./api/weather";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(city: string) {
    try {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleRefresh() {
    setWeather(null);
    setSearchInput("");
  }

  return (
    <div className="weather-app">
      <Header />
      <Search
        input={searchInput}
        setInput={setSearchInput}
        onSearch={handleSearch}
      />

      {loading && <div className="loader"></div>}

      {weather && !loading && (
        <div>
          <CurrentWeather weather={weather} />
          <Forecast days={weather.days} />
        </div>
      )}

      <RefreshButton onRefresh={handleRefresh} />
      <Footer />
    </div>
  );
}

export default App;
