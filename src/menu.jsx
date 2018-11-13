import React, { Component } from "react";

const Menu = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          Gladiator!
        </a>
        <span>
          <button onClick={props.onAddGladiator}>Add a Gladiator!</button>
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
