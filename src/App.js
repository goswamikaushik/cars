import React from "react";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
      <h1>kaushkkkkkkkkkk</h1>
    </div>
  );
};

export default App;
