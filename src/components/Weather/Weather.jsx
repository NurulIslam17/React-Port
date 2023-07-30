import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(null);
  const baseURL =
    `https://api.openweathermap.org/data/2.5/weather?appid=5ca775f76c2feaa4dfb3b8e09ac53d0d&units=metric&q=${city}`;

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const hanndleSubmit = (e) => {
    e.preventDefault();
    axios.get(`${baseURL}`).then((response) => {
      setWeather(response.data);
    });
    setCity("");
  };

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setWeather(response.data);
    });
  }, []);
  if (!weather) return null;

  return (
    <>
      <section className="my-5">
        <h3 className="text-center">Weather Info</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto bg-info p-3">
              <div className="card card-body">
                <form method="post" onSubmit={hanndleSubmit} className="d-flex">
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={city}
                    placeholder="Enter City Name"
                    className="form-control outline_none"
                    id=""
                  />
                  <input
                    type="submit"
                    className="btn btn-success text-center ms-2 outline_none"
                    value="Search Weather"
                  />
                </form>

                <div className="row mt-5">
                  <div className="col-md-6">
                    <strong>Temp : </strong>
                    {weather.main.temp} <sup>0</sup>C<br />
                    <strong>Max : </strong> {weather.main.temp_max} <sup>0</sup>
                    C
                    <br />
                    <strong>Min : </strong> {weather.main.temp_min} <sup>0</sup>
                    C
                    <br />
                    <strong>Winds : </strong> {weather.wind.speed} km/h
                    <br />
                    <strong>Sunrise : </strong>
                    {weather.sys.sunrise}
                    <br />
                    <strong>Sunset : </strong> {weather.sys.sunset} <br />
                    <strong>humidity : </strong> {weather.main.humidity} %<br />
                  </div>
                  <div className="col-md-6">
                    <strong>Contry : </strong> {weather.sys.country} <br />
                    <strong>City : </strong> {weather.name} <br />
                    <strong>Long : </strong> {weather.coord.lon} <br />
                    <strong>Lat : </strong> {weather.coord.lat} <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Weather;
