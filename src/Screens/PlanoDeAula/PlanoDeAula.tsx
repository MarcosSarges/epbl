import React, { Component } from "react";

import { View, StatusBar } from "react-native";
import { colors } from "../../Styles";
import Header from "../../Components/Header";

// import { Container } from './styles';

export default class PlanoDeAula extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header {...this.props} />
      </View>
    );
  }
}
