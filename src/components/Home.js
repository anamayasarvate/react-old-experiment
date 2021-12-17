import React, { useEffect, useState } from "react";
import axios from "axios";

import Location from "./Location";

const Home = () => {
  const [headers, setHeaders] = useState([]);
  const [locations, setLocations] = useState([]);
  const [order, setOrder] = useState({});
  const [searchedLocations, setSearchedLocations] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    response.data.results.forEach((result) => {
      setHeaders(Object.keys(result.location));
      setLocations((prevLocations) => {
        return [...prevLocations, result.location];
      });
      // console.log(result.location);
    });
    const orderObj = {};
    headers.forEach((header) => {
      orderObj[header] = true;
    });
    setOrder(orderObj);
  };

  const sort = (e) => {
    const newLocations = [...locations];
    const headerName = e.target.textContent;
    const compare = (a, b) => {
      if (!order[headerName]) {
        let c = a;
        a = b;
        b = c;
      }
      if (typeof a[headerName] === "object") {
        const keyA = Object.keys(a[headerName])[0];
        const keyB = Object.keys(b[headerName])[0];
        const valueB = b[headerName][keyB];
        const valueA = a[headerName][keyA];
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
        return 0;
      } else {
        if (a[headerName] < b[headerName]) {
          return -1;
        }
        if (a[headerName] > b[headerName]) {
          return 1;
        }
        return 0;
      }
    };
    newLocations.sort(compare);
    setLocations(newLocations);
    const newOrder = { ...order };
    newOrder[headerName] = !newOrder[headerName];
    setOrder(newOrder);
  };
  const searchTable = (e) => {
    const query = e.target.value;
    const foundLocations = locations.filter((location) => {
      return Object.values(location).some((value) => value === query);
    });
    setSearchedLocations(foundLocations);
  };
  return (
    <>
      <h1>Welcome Home</h1>
      <input
        type="text"
        onChange={(e) => {
          searchTable(e);
        }}
      />
      {searchedLocations.length > 0 &&
        searchedLocations.map((loc) => {
          return <p>{JSON.stringify(loc)}</p>;
        })}
      <table>
        <thead>
          <tr>
            {headers.map((header) => {
              return (
                <th key={header} onClick={(e) => sort(e)}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => {
            return (
              <Location
                key={location.coordinates.latitude}
                location={location}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
