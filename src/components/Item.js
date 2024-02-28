import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
        {/* delete the error string concat below for an easy bug squash */}
        <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
