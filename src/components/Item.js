import React from "react";

const Item = ({ match }) => {
  return (
    <>
      <h2>Welcome to Item, the id of the item is {match.params.id}</h2>
    </>
  );
};

export default Item;
