import React, { useEffect, useState } from "react";
import "./Countrydetails.css";

const Countrydetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {data.map((country, index) => (
        <div key={index} className="country-container">
          <div className="InnerBorder">
            <div>{country.flag}</div>
            <div>{country.name.common}</div>
          </div>
          <div>
            <div>Population: {country.population}</div>
            <div>Region: {country.region}</div>
            <a href={country.maps.googleMaps}>Link</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countrydetails;
