import React, { Component } from "react";
import ProblemaSQLite from "../Database/ProblemaSQLite";
import ReferenciaSQLite from "../Database/ReferenciaSQLite";
import ObjetivoSQLite from "../Database/ObjetivoSQLite";
import TurmaSQLite from "../Database/TurmaSQLite";

export const Context = React.createContext({
  listaProblema: []
});

export const Consumer = Context.Consumer;

export default class Provider extends Component {
  state = {
    listaProblema: [],
    listaReferencias: [],
    listaObjetivos: [],
    listaTurmas: []
  };

  setListTurmas = (array: []) => this.setState({ listaTurmas: array });

  listarTurmas = () => {
    TurmaSQLite.listarTurmas().then(res => {
      this.setState({ listaTurmas: res });
    });
  };

  setListObjetivos = (array: []) => this.setState({ listaObjetivos: array });

  listarObjetivos = () => {
    ObjetivoSQLite.listarObjetivos().then(res => {
      this.setState({ listaObjetivos: res });
    });
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
        listarReferencias: this.listarReferencias,
        listarObjetivos: this.listarObjetivos
      }}
    >
      {this.props.children}
    </Context.Provider>
  );
}
