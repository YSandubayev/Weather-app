export interface CurrentConditions {
  temp: number;
  windspeed: number;
  conditions: string;
   icon: string;
}

export interface ForecastDay {
  datetime: string;
  tempmax: number;
  tempmin: number;
  conditions: string;
   icon: string;
}

export interface WeatherData {
  resolvedAddress: string;
  currentConditions: CurrentConditions;
  days: ForecastDay[];
}

export async function fetchWeather(city: string): Promise<WeatherData> {
    const apiKey = "4ELTYP8EXUFBU93R49ZJMVXYF";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json&include=current,days&lang=en`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error requesting weather data");
    }

    const data: WeatherData = await response.json();
    return data;
}