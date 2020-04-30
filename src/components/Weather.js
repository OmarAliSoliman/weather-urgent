import React, { useState, lazy, Suspense } from "react";
import { getdate } from "./api";
// import Showdata from "./Showdata";
import Form from "./Form";
import Loader from './Loader';

const Showdata = lazy(() => import("./Showdata"));

function Weather() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [status, setStatus] = useState("");
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const getWeather = (value) => {
    getdate(value)
      .then((response) => {
        setCityName(response.data.name);
        setCountry(response.data.sys.country);
        setTemp(Math.floor(response.data.main.temp - 273.15));
        setTempMax(Math.floor(response.data.main.temp_max - 273.15));
        setTempMin(Math.floor(response.data.main.temp_min - 273.15));
        setStatus(response.data.weather[0].main);
        setIcon(response.data.weather[0].icon);
        setDescription(response.data.weather[0].description);
      })
      .catch((error) => {
        alert("No City Found With this name");
        setCityName("");
      });
  };

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="weather-page">
        <div className="container text-center weather-container mt-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="content">
                <h4 className="wheter-slag">Just type the city name</h4>
                <p className="text-muted">you must spelling correctly</p>
                <Form
                  getweather={getWeather}
                  updatevalue={updateValue}
                  value={value}
                />
                <br />
                {cityName !== "" ? (
                  <Suspense fallback={<Loader />}>
                  <Showdata
                    cityName={cityName}
                    country={country}
                    temp={temp}
                    tempMax={tempMax}
                    tempMin={tempMin}
                    status={status}
                    icon={icon}
                    description={description}
                  />
                </Suspense>
                ):(<h4 className="no-city-select">not found city <i className="fa fa-exclamation-circle" aria-hidden="true"></i></h4>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
