import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/my-item/6">Item</Link>
    </>
  );
};

export default Nav;
