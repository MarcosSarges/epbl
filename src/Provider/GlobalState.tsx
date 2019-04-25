import React, { Component } from "react";
import ProblemaSQLite from "../Database/ProblemaSQLite";

export const Context = React.createContext({
  listaProblema: []
});

export const Consumer = Context.Consumer;

export default class Provider extends Component {
  state = {
    listaProblema: []
  };

  setListProblema = (array: []) => this.setState({ listaProblema: array });

  listarProblemas = () => {
    ProblemaSQLite.listarProblemas().then(res => {
      this.setState({ listaProblema: res });
    });
  };

  render = () => (
    <Context.Provider
      value={{
        ...this.state,
        listarProblemas: this.listarProblemas
      }}
    >
      {this.props.children}
    </Context.Provider>
  );
}
