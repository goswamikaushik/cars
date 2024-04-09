import React from "react";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div>
      <CarForm />
      <CarValue />
      <CarList />
      <CarSearch />
    </div>
  );
};

export default App;
