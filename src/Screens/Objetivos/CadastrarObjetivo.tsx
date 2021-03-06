import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TextInput, Alert } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps, ScrollView } from "react-navigation";
import Input from "../../Components/Input";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { Context } from "../../Provider/GlobalState";
import ObjetivoSQLite from "../../Database/ObjetivoSQLite";
import removeSpace from "../../util/removeSpace";

type Props = {} & NavigationScreenProps;

export default class CadastrarObjetivo extends Component<Props> {
  state = {
    id: 0,
    titulo: "",
    editar: false
  };

  componentDidMount() {
    //bool
    console.log(this.props.navigation.state.params);
    const { editar }: any = this.props.navigation.state.params;
    if (typeof editar != "undefined") {
      if (editar) {
        const { objetivo }: any = this.props.navigation.state.params;
        this.setState({
          id: objetivo.objetivo_id,
          titulo: objetivo.titulo,
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
          titulo="O que é a descrição do objetivo?"
          conteudo="Esse campo você deve digitar qual sera o objetivo do problema."
        />

        <ScrollView contentContainerStyle={styles.container}>
          <Input
            custom={{ marginBottom: metrics.baseMargin }}
            value={this.state.titulo}
            multiline={true}
            placeholder="Descrição do objetivo"
            onChangeText={(txt: string) => this.setState({ titulo: txt })}
          />
          {/* <View style={styles.viewInput}>
            <TextInput
              placeholder="Historia do problema, basicamente descrever o problema..."
              style={styles.textInput}
              value={this.state.historia}
              onChangeText={txt => this.setState({ historia: txt })}
              multiline
            />
          </View> */}
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
                if (this.state.titulo.length > 0) {
                  Alert.alert("Confirmação", `Titulo: ${this.state.titulo}`, [
                    {
                      text: "Cancelar"
                    },
                    {
                      text: "Confirmar",
                      onPress: () => {
                        if (this.state.editar) {
                          ObjetivoSQLite.atualizarObjetivos(
                            removeSpace(this.state.titulo),
                            this.state.id
                          ).then(res => {
                            console.log(res);
                          });

                          this.context.listarObjetivos();
                          this.props.navigation.goBack();
                        } else {
                          ObjetivoSQLite.saveObjetivo(
                            removeSpace(this.state.titulo)
                          );
                          this.context.listarObjetivos();
                          this.props.navigation.goBack();
                        }
                      }
                    }
                  ]);
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

CadastrarObjetivo.contextType = Context;

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
