import React, { Component, createContext } from "react";
import TurmaHelper from "../database/TurmaHelper";

const Context = createContext({});

export const Consumer = Context.Consumer;

export default class Provider extends Component {
  state = {
    listaTurmas: [],
    listaProblemas: [],
    listaPlanoDeAula: [],
    listaPassos: [],
    listaTarefas: [],
    listaObjetivos: [],
    listaReferencias: [],
    dadosPlanos: {}
  };

  setTurmas = async () => {
    //@ts-ignore
    let turmas = [];
    await TurmaHelper.listarTodasAsTurmas().then(res => {
      res.forEach(el => turmas.push(el));
    });
    //@ts-ignore
    this.setState({ listaTurmas: turmas });
  };

  componentDidMount() {
    this.setTurmas();
  }

  render() {
    const values = {
      setTurmas: this.setTurmas,
      ...this.state
    };

    return (
      <Context.Provider value={values}>{this.props.children}</Context.Provider>
    );
  }
}
