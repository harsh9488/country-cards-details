import React, { useEffect, useState } from "react";
import "./Country.css";

export const Country = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const handleMapButtonClick = (googleMapsLink) => {
    window.open(googleMapsLink, "_blank");
  };

  return (
    <div>
      <div className="container">
        {data.map((item, i) => (
          <div className="cards">
            <div>
              <div>
                <img src={item.flags.png} alt="" />
              </div>
              <div>{item.name.common}</div>
            </div>
            <div>
              <div>{item.population}</div>
              <div>{item.region}</div>
            </div>
            <button onClick={() => handleMapButtonClick(item.maps.googleMaps)}>
              Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
