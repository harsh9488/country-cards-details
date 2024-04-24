import { useEffect, useState } from "react";
import "./CountryAPI.css";

const CountryAPI = () => {
  const [data, setdata] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        console.log(data);
      });
  }, []);

  const handleMap = (googleMap) => {
    window.open(googleMap, "_blank");
  };

  return (
    <>
      <div className="container">
        {data &&
          data.map((item, i) => (
            <div className="card">
              <img src={item.flags.png} alt="" srcset="" />

              <p>{item.name.common}</p>
              <p>{item.population}</p>
              <p>{item.region}</p>
              <button onClick={() => handleMap(item.maps.googleMaps)}>
                Map
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default CountryAPI;
