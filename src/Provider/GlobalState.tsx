import React, { Component } from "react";
import ProblemaSQLite from "../Database/ProblemaSQLite";
import ReferenciaSQLite from "../Database/ReferenciaSQLite";
import ObjetivoSQLite from "../Database/ObjetivoSQLite";
import TurmaSQLite from "../Database/TurmaSQLite";
import PlanodeAula from "../Database/PlanodeAula";

export const Context = React.createContext({});

export const Consumer = Context.Consumer;

export default class Provider extends Component {
  state = {
    listaProblema: [],
    listaReferencias: [],
    listaObjetivos: [],
    listaTurmas: [],
    planoDeAula: {},
    listaTutorias: []
  };

  buscarTutorias = async (id: any) => {
    await PlanodeAula.listarTutorias(id).then(el => {
      this.setState({
        listaTutorias: el
      });
      return true;
    });
    return false;
  };

  buscarPlanoDeAula = async (id: number) => {
    await PlanodeAula.listarTudo(id).then((el: any) => {
      this.setState({ planoDeAula: el, listaTutorias: el.Tutorias });
      return true;
    });
    return false;
  };

  setListTurmas = (array: []) => this.setState({ listaTurmas: array });

  listarTurmas = async () => {
    await TurmaSQLite.listarTurmas().then(res => {
      this.setState({ listaTurmas: res });
    });
    return true;
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
        listarObjetivos: this.listarObjetivos,
        listarTurmas: this.listarTurmas,
        buscarPlanoDeAula: this.buscarPlanoDeAula,
        buscarTutorias: this.buscarTutorias
      }}
    >
      {this.props.children}
    </Context.Provider>
  );
}
