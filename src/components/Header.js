import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

// header section for windmill
const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Windmill</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
