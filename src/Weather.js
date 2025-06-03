import React from "react";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 10:00",
    description: "sunny",
    temperature: 24,
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather-App">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="weather">
          <div>
            <h1 className="city">{weatherData.city}</h1>
            <p className="current-details">
              {weatherData.date}, {weatherData.description} <br />
              Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
              <strong>{weatherData.wind} km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span
              className="current-temperature-value"
              id="current-temperature"
            >
              {weatherData.temperature}
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
    </div>
  );
}
