import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const searchInput = useRef();
  const [options, setOptions] = useState([
    "option1",
    "option2",
    "NYC",
    "London",
    "Anamay",
  ]);
  const [res, setRes] = useState([]);
  const width = {
    width: "25%",
  };
  const handleOnclick = (e) => {
    searchInput.current.value = e.target.textContent;
    setRes([searchInput.current.value]);
  };
  const handleOnchange = (e) => {
    if (e.target.value === "") return setRes([]);
    setRes(
      options.filter((option) => {
        return option.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };
  return (
    <>
      <h2 className="text-center">Welcome to About</h2>
      <div className="container my-2">
        <div style={width} className="input-group mb-3">
          <input
            ref={searchInput}
            onChange={(e) => {
              handleOnchange(e);
            }}
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <ul className="list-group">
          {res.map((re) => {
            return (
              <li
                onClick={(e) => {
                  handleOnclick(e);
                }}
                key={re}
                className="list-group-item"
              >
                {re}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default About;
