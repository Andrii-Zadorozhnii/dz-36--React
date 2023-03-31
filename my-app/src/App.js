import logo from './logo.svg';
import './App.css';
import './styles/reset.css';
import "./styles/styles.css";

function App() {
  return (
    <form>
      <main class="main-area">
        <h3 class="text-title">
          CSS Weather Forecast
          <img class="sun-title" src="./images/sun-icon.png" alt="" />
        </h3>
        <div class="weather-table">
          <ul>
            <li class="city1">
              <p>Lisbon</p>
              <span class="temperature-city1">
                21°C</span>
            </li>
            <li class="city2">
              <p>Paris</p>
              <span class="temperature-city2">
                  11°C</span>
            </li>
            <li class="city3">
              <p>Belgrade</p>
              <span class="temperature-city3">
                  15°C</span>
            </li>
            <li class="city4">
              <p>Venice</p>
              <span class="temperature-city4">
                  21°C </span>
            </li>
            <li class="city5">
              <p>Tel-Avive</p>
              <span class="temperature-city5">
                  32°C </span>
            </li>
            <li class="city6">
              <p>Cair</p>
              <span class="temperature-city6">
                  21°C </span>
            </li>
            <li class="city7">
              <p>New-York</p>
              <span class="temperature-city7">
                  17°C </span>
            </li>
            <li class="city8">
              <p>New-Delhi</p>
              <span class="temperature-city8">
                  17°C </span>
            </li>
            <li class="city9">
              <p>San-Francisco</p>
              <span class="temperature-city9">
                  15°C </span>
            </li>
            <li class="city10">
              <p>Tokyo</p>
              <span class="temperature-city10">
                  8°C </span>
            </li>
            <li class="city11">
              <p>Sydney</p>
              <span class="temperature-city11">
                  25°C </span>
            </li>
          </ul>
          <p class="text__underWeather">Have a nice day and don't forget umbrella if you are in New
            Delhi now!</p>
        </div>
      </main>
    </form>
  );
}

export default App;
