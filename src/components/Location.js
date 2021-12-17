import React from "react";

const Location = ({ location }) => {
  return (
    <>
      <tr>
        {Object.entries(location).map(([key, value]) => {
          return (
            <td key={key}>
              {typeof value != "object"
                ? value
                : Object.values(value).map((val) => {
                    return val;
                  })}
            </td>
          );
        })}
      </tr>
    </>
  );
};

export default Location;
