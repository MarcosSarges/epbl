import React, { Component } from "react";

import { View, StatusBar, StyleSheet, Alert } from "react-native";
import { colors, metrics } from "../../Styles";
import Header from "../../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../Components/Input";
import { NavigationScreenProps } from "react-navigation";
import Button from "../../Components/Button";
import TurmaSQLite from "../../Database/TurmaSQLite";

// import { Container } from './styles';

type Props = {} & NavigationScreenProps;
export default class CadastrarTurma extends Component<Props> {
  state = {
    titulo: "",
    semestre: "",
    ano: ""
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header
          navigation={this.props.navigation}
          back
          titulo="Como eu devo preencer?"
          conteudo="Os campos são para identificação das turmas, detro do fluxo isso não causará impacto."
        />
        <ScrollView contentContainerStyle={styles.container}>
          <Input
            custom={styles.inputStyle}
            onChangeText={text => this.setState({ titulo: text })}
            placeholder="Titulo da turma"
            value={this.state.titulo}
          />
          <Input
            keyboardType="numeric"
            custom={styles.inputStyle}
            onChangeText={text => this.setState({ semestre: text })}
            placeholder="Semetre da turma"
            value={this.state.semestre}
          />
          <Input
            keyboardType="numeric"
            custom={styles.inputStyle}
            onChangeText={text => this.setState({ ano: text })}
            placeholder="Ano da turma"
            value={this.state.ano}
          />
          <View style={styles.viewButton}>
            <Button
              type="danger"
              typeIcon="times"
              title="Cancelar"
              onPress={() => {
                Alert.alert("Ops!", "Você quer realmente sair?", [
                  {
                    text: "Sim",
                    onPress: () => {
                      this.props.navigation.goBack();
                    }
                  },
                  { text: "Não" }
                ]);
              }}
            />
            <Button
              type="success"
              typeIcon="next"
              title={"Avançar"}
              onPress={() => {
                if (
                  this.state.titulo.length > 0 &&
                  this.state.semestre.length > 0 &&
                  this.state.ano.length > 0
                ) {
                  Alert.alert(
                    "Confirmação",
                    `Titulo: ${this.state.titulo} - Semestre: ${
                      this.state.semestre
                    } - Ano: ${this.state.ano}.`,
                    [
                      {
                        text: "Confirmar",
                        onPress: () => {
                          this.props.navigation.navigate(
                            "Criar plano de aula",
                            {
                              turma: this.state
                            }
                          );
                        }
                      },
                      {
                        text: "Cancelar"
                      }
                    ]
                  );
                } else {
                  Alert.alert("Ops!", "Você deve preencer todos os campos");
                }
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor,
    flex: 1
  },
  inputStyle: {
    marginTop: metrics.baseMargin
  },
  viewButton: {
    marginTop: metrics.baseMargin,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
