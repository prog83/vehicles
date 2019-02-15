import "typeface-roboto";
import React, { Component } from "react";
import AppHeader from "./components/header/";
import AppBody from "./components/body/";

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <AppHeader title="Позбавлення ПКТЗ" />        
        <AppBody />
      </div>
    );
  }
}
