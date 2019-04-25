import React, { Component } from "react";
import ProblemaSQLite from "../Database/ProblemaSQLite";
import ReferenciaSQLite from "../Database/ReferenciaSQLite";

export const Context = React.createContext({
  listaProblema: []
});

export const Consumer = Context.Consumer;

export default class Provider extends Component {
  state = {
    listaProblema: [],
    listaReferencias: []
  };

  setListReferencia = (array: []) => this.setState({ listaReferencias: array });

  listarReferencias = () => {
    ReferenciaSQLite.listarReferencias().then(res => {
      this.setState({ listaReferencias: res });
    });
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
        listarProblemas: this.listarProblemas,
        listarReferencias: this.listarReferencias
      }}
    >
      {this.props.children}
    </Context.Provider>
  );
}
