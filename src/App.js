import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  // console.log(weather);
  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchData} />
      <Card />
      <Button
        onClick={() => weather.fetchCurrentUserLocationData()}
        value="Refresh"
      />
    </div>
  );
}

export default App;
