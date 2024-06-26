import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totlaCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return <div className="car-value">Total Cost : ${totlaCost}</div>;
};

export default CarValue;
