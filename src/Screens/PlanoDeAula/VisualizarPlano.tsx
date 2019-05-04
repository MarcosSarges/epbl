import React, { Component } from "react";

import { View, StatusBar, Text } from "react-native";
import { colors } from "../../Styles";
import Header from "../../Components/Header";
import { NavigationScreenProps } from "react-navigation";

type Props = {} & NavigationScreenProps;

export default class VisualizarPlano extends Component<Props> {
  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }

  render() {
    const { turma }: any = this.props.navigation.state.params;
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header
          navigation={this.props.navigation}
          back
          onPress={() => this.props.navigation.navigate("Turmas")}
        />

        <View>
          <Text>{turma.titulo}</Text>
        </View>
      </View>
    );
  }
}
