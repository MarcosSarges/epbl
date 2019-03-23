/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import Router from './Router';

const Context = React.createContext({});

class Provider extends Component {

  state = {

  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}


interface Props { }
export default class App extends Component<Props> {
  render() {
    return (
      <Router />
    );
  }
}
