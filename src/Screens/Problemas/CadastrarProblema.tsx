import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TextInput, Alert } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps, ScrollView } from "react-navigation";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import ProblemaSQLite from "../../Database/ProblemaSQLite";
import { Context } from "../../Provider/GlobalState";

type Props = {} & NavigationScreenProps;

export default class CadastrarProblemas extends Component<Props> {
  state = {
    id: 0,
    titulo: "",
    historia: "",
    editar: false
  };

  componentDidMount() {
    //bool
    console.log(this.props.navigation.state.params);
    const { editar }: any = this.props.navigation.state.params;
    if (typeof editar != "undefined") {
      if (editar) {
        const { problema }: any = this.props.navigation.state.params;
        this.setState({
          id: problema.problema_id,
          titulo: problema.titulo,
          historia: problema.historia,
          editar: true
        });
      }
    }
  }

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
          titulo="Como preencer os campos?"
          conteudo={`No primeiro campo deve ser passado um titulo para o problema, é indicado colocar o nome do projeto que deseja executar.\nNo campo da historia, você deve descrever o cenario do problema.`}
          subTitulo="Como selecionar um problema?"
          subConteudo={`Antes de apresentar um problema para a turma, é importante que o tutor esteja atualizado sobre os conhecimentos prévios dos alunos. O problema selecionado deve condizer com o nível de instrução desses alunos, para que não se torne um desafio muito além das capacidades dos mesmos. Também é necessário observar a frequência com que esse problema ocorre em situações reais, e a relevância dele para o meio de onde foi escolhido.\nMais detalhes no manual.`}
        />

        <ScrollView contentContainerStyle={styles.container}>
          <Input
            value={this.state.titulo}
            placeholder="Titulo do problema"
            onChangeText={(txt: string) => this.setState({ titulo: txt })}
          />
          <View style={styles.viewInput}>
            <TextInput
              placeholder="Historia do problema, basicamente descrever o problema..."
              style={styles.textInput}
              value={this.state.historia}
              onChangeText={txt => this.setState({ historia: txt })}
              multiline
            />
          </View>
          <View style={styles.viewButton}>
            <Button
              type="danger"
              typeIcon="times"
              title="Cancelar"
              onPress={() => {
                Alert.alert("Ops!", "Você quer realmente sair?", [
                  { text: "Não" },
                  {
                    text: "Sim",
                    onPress: () => {
                      this.props.navigation.goBack();
                    }
                  }
                ]);
              }}
            />
            <Button
              type="success"
              typeIcon="save"
              title={this.state.editar ? "Editar" : "Salvar"}
              onPress={() => {
                if (
                  this.state.titulo.length > 0 &&
                  this.state.historia.length > 0
                ) {
                  Alert.alert(
                    "Confirmação",
                    `Titulo: ${
                      this.state.titulo
                    } - Hitoria: ${this.state.historia.slice(0, 40)}...`,
                    [
                      {
                        text: "Cancelar"
                      },
                      {
                        text: "Confirmar",
                        onPress: () => {
                          if (this.state.editar) {
                            ProblemaSQLite.atualizarProblema(
                              this.state.titulo,
                              this.state.historia,
                              this.state.id
                            ).then(res => {
                              console.log(res);
                            });

                            this.context.listarProblemas();
                            this.props.navigation.goBack();
                          } else {
                            ProblemaSQLite.saveProblema(
                              this.state.titulo,
                              this.state.historia
                            );

                            this.context.listarProblemas();
                            this.props.navigation.goBack();
                          }
                        }
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

CadastrarProblemas.contextType = Context;

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor
    //flex: 1
  },
  flatlist: {
    paddingVertical: metrics.basePadding
  },
  viewInput: {
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomColor: "#000",
    marginVertical: metrics.baseMargin
  },
  textInput: {
    fontSize: fonts.regular,
    color: colors.primaryTextColor,
    height: 350
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
