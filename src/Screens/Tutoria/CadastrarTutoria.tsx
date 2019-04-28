import React, { Component } from "react";

import {
  View,
  StatusBar,
  StyleSheet,
  Alert,
  Modal,
  ScrollView
} from "react-native";
import { NavigationScreenProps, FlatList } from "react-navigation";
import { colors, metrics, fonts } from "../../Styles";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Icon from "react-native-vector-icons/FontAwesome5";
import Title from "../../Components/Title";
import Button from "../../Components/Button";
import CardFlatListTutoria from "../../Components/CardFlatListTutoria";

// import { Container } from './styles';

type Props = {} & NavigationScreenProps;

export default class CadastrarTutoria extends Component<Props> {
  /**
   * tutoria:{
   *  tutoria_id:1,
   *  titulo:"aaaaaaaaaaaaaaaaaa",
   *  subTarefas:[
   *    {
   *        subTutoria_id:1,
   *        titulo:"aaaaaaaaaaaaaaaaaa",
   *    },
   *    {
   *        subTutoria_id:2,
   *        titulo:"aaaaaaaaaaaaaaaaaa",
   *    }
   *  ]
   * }
   */

  state = {
    addTutoria: "",
    listaTutoria: [],
    modal: false,
    item: false,
    index: 0,
    addTarefa: "",
    load: false
  };
  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }

  onSubmit = (event: any) => {
    if (this.state.addTutoria.length > 0) {
      const novaLista = this.state.listaTutoria;
      const novaTutoria = {
        titulo: this.state.addTutoria,
        subTarefas: []
      };
      //@ts-ignore
      novaLista.push(novaTutoria);

      console.log(novaLista);
      this.setState({ addTutoria: "", listaTutoria: novaLista });
    } else {
      Alert.alert("Ops!", "É necessario inserir algum texto");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header navigation={this.props.navigation} back />
        <Modal
          visible={this.state.modal}
          animated
          animationType="fade"
          transparent
          onRequestClose={() => this.setState({ modal: !this.state.modal })}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              flex: 1,
              justifyContent: "center",
              paddingHorizontal: metrics.basePadding
            }}
          >
            {this.state.item ? (
              <View
                style={{
                  backgroundColor: colors.backgroundColor,
                  position: "relative",
                  // borderBottomColor: colors.border,
                  // borderWidth: 1,
                  elevation: 2
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.primaryColor,
                    padding: metrics.basePadding
                  }}
                >
                  <Title
                    title={this.state.item.titulo.toUpperCase()}
                    custom={{ textAlign: "justify" }}
                  />
                </View>
                <View
                  style={{
                    padding: metrics.basePadding
                  }}
                >
                  <Input
                    maxLength={17}
                    placeholder="Titulo da Tarefa"
                    value={this.state.addTarefa}
                    onChangeText={text => this.setState({ addTarefa: text })}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      marginTop: metrics.baseMargin
                    }}
                  >
                    <Button
                      title="Cancelar"
                      typeIcon="times"
                      type="danger"
                      onPress={() =>
                        this.setState({
                          modal: false,
                          item: false,
                          addTarefa: ""
                        })
                      }
                    />
                    <Button
                      title="Adicionar"
                      typeIcon="save"
                      onPress={() => {
                        if (this.state.addTarefa.length > 0) {
                          const { listaTutoria } = this.state;
                          const novaLista = listaTutoria.map(
                            (el: any, index: number) => {
                              if (index === this.state.index) {
                                el.subTarefas.push({
                                  titulo: this.state.addTarefa
                                });
                                return el;
                              }
                              return el;
                            }
                          );
                          this.setState({
                            listaTutoria: novaLista,
                            modal: false,
                            item: false,
                            addTarefa: ""
                          });
                        } else {
                          Alert.alert("Ops!", "Digite alguma coisa");
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            ) : (
              false
            )}
          </View>
        </Modal>
        <ScrollView style={styles.container}>
          <Title title="Tutorias" />
          {this.state.listaTutoria.length > 0 ? (
            <FlatList
              keyExtractor={(item, index) => `${index}${Math.random()}`}
              data={this.state.listaTutoria}
              renderItem={({ item, index }) => (
                <CardFlatListTutoria
                  item={item}
                  addTask={() => {
                    this.setState({ modal: !this.state.modal, item, index });
                  }}
                  deletar={() => {
                    const { listaTutoria } = this.state;
                    const novaLista: any = [];
                    listaTutoria.forEach((el, i) => {
                      if (index != i) {
                        novaLista.push(el);
                      }
                    });
                    this.setState({
                      listaTutoria: novaLista
                    });
                  }}
                />
              )}
            />
          ) : (
            <Title title="Você deve adcionar pelo menos uma tutoria" />
          )}
        </ScrollView>

        <View style={styles.viewInput}>
          <Input
            maxLength={17}
            custom={styles.input}
            onSubmitEditing={this.onSubmit}
            value={this.state.addTutoria}
            placeholder="Adicionar tutoria rapidamente"
            onChangeText={text => this.setState({ addTutoria: text })}
          />
          <Icon
            name="check-circle"
            solid
            color={colors.success}
            size={fonts.regular}
            onPress={this.onSubmit}
            style={{ marginRight: metrics.baseMargin }}
          />
        </View>
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
                    this.props.navigation.pop(3);
                  }
                },
                { text: "Não" }
              ]);
            }}
          />
          <Button
            type="success"
            typeIcon="save"
            title={"Finalizar"}
            onPress={() => {
              if (this.state.listaTutoria.length > 0) {
                Alert.alert("Confirmação", `Deseja finzalizar?`, [
                  {
                    text: "Sim",
                    onPress: () => {
                      this.setState({ load: true });
                      // this.props.navigation.navigate("Criar plano de aula", {
                      //   turma: this.state
                      // });
                    }
                  },
                  {
                    text: "Não"
                  }
                ]);
              } else {
                Alert.alert(
                  "Ops!",
                  "Você deve adicionar pelo menos uma tutoria"
                );
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor
    //flex: 1
  },
  viewButton: {
    marginTop: metrics.baseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: metrics.baseMargin
  },
  viewInput: {
    // position: "absolute",
    // bottom: 76,
    // left: 0,
    // right: 0,
    padding: metrics.basePadding,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: metrics.basePadding,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "#FFF",
    borderBottomWidth: 0,
    margin: 0,
    padding: 0
  }
});
