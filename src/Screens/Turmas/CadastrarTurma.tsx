import React, { Component } from "react";

import { View, StatusBar, StyleSheet } from "react-native";
import { colors, metrics } from "../../Styles";
import Header from "../../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../Components/Input";
import { NavigationScreenProps } from "react-navigation";

// import { Container } from './styles';

type Props = {} & NavigationScreenProps;
export default class CadastrarTurma extends Component<Props> {
  state = {
    titulo: ""
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />

        <Header navigation={this.props.navigation} back />
        <ScrollView contentContainerStyle={style.container}>
          <Input
            custom={style.inputMargin}
            onChangeText={text => this.setState({ titulo: text })}
            placeholder="Titulo da turma"
            value={this.state.titulo}
          />
          <Input
            custom={style.inputMargin}
            onChangeText={text => this.setState({ titulo: text })}
            placeholder="Semetre da turma"
            value={this.state.titulo}
          />
          <Input
            custom={style.inputMargin}
            onChangeText={text => this.setState({ titulo: text })}
            placeholder="Ano da turma"
            value={this.state.titulo}
          />
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor,
    flex: 1
  },
  inputMargin: {
    marginTop: metrics.baseMargin
  }
});
