import React from "react";

function Showdata(props) {
  const {cityName, country, icon, status, temp, tempMax, tempMin, description} = props;
  
  const minmax = (min, max) => {
    return (
      <h3>
        <span className="city-temp-min">{min}&deg;</span>
        <span className="city-temp-max">{max}&deg;</span>
      </h3>
    );
  };

  return (
    <div>
      <div>
        <span className="city-name">{cityName},</span>
        <span className="city-country"> {country}</span>
        <br />
        <img
          className="city-icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt=""
        />
        <h2 className="city-status">{status}</h2>
        <h1 className="city-temp">{temp}&deg;</h1>
        {minmax(tempMax, tempMin)}
        <p className="city-description mt-4">{description}</p>
      </div>
    </div>
  );
}

export default Showdata;
