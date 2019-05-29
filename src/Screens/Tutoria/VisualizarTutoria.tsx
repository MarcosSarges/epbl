import React, { Component, Fragment } from "react";

import {
  View,
  StatusBar,
  CheckBox,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Alert
} from "react-native";
import { Context } from "../../Provider/GlobalState";
import { colors, fonts, metrics } from "../../Styles";
import Header from "../../Components/Header";
import {
  NavigationScreenProps,
  NavigationBottomTabScreenOptions
} from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
import Title from "../../Components/Title";
import PlanodeAula from "../../Database/PlanodeAula";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import removeSpace from "../../util/removeSpace";

type Props = {} & NavigationScreenProps;

export default class VisualizarTutoria extends Component<Props> {
  state = {
    Tutorias: [],
    tutoria: {},
    novoTextoTuto: "",
    atividade: {},
    novoTextoAtivi: "",
    modalTutoria: false,
    modalAtividade: false
  };

  static navigationOptions: NavigationBottomTabScreenOptions = {
    tabBarIcon: ({ tintColor }) => (
      //@ts-ignore
      <FontAwesome5Icon name="brain" color={tintColor} size={20} />
    )
  };

  async componentDidMount() {
    console.log("aqui", this.props.navigation.state.params);

    this.setState({
      Tutorias: this.context.listaTutorias
    });
  }
  //@ts-ignore
  checkBoxTutoria = (index, planoTuto_id, value) => {
    const newList: any = [];
    //@ts-ignore
    this.state.Tutorias.forEach((el: any, i) => {
      if (index === i) {
        newList.push({
          turma_id: el.turma_id,
          estado: el.estado === 0 ? 1 : 0,
          titulo: el.titulo,
          planoTuto_id: el.planoTuto_id,
          //@ts-ignore
          subTarefas: el.subTarefas.map(e => {
            return {
              planoTuto_id: e.planoTuto_id,
              estado: el.estado === 0 ? 1 : 0,
              titulo: e.titulo,
              planoTarefas_id: e.planoTarefas_id
            };
          })
        });
        return;
      }
      newList.push(el);
    });

    PlanodeAula.updateTutoria(planoTuto_id, value ? 1 : 0).then(el => {
      console.log(el);
      this.setState({
        Tutorias: newList
      });
    });
  };

  //@ts-ignore
  checkBoxTarefa = (indexPai, indexFilho, planoTarefas_id, value) => {
    const newList: any = [];
    //@ts-ignore
    this.state.Tutorias.forEach((el: any, x) => {
      const subList: any = [];
      //@ts-ignore
      el.subTarefas.forEach((el, i) => {
        //{planoTuto_id: 4, estado: 0, titulo: "123", planoTarefas_id: 1}
        if (indexFilho === i && indexPai === x) {
          subList.push({
            planoTuto_id: el.planoTuto_id,
            estado: el.estado === 0 ? 1 : 0,
            titulo: el.titulo,
            planoTarefas_id: el.planoTarefas_id
          });
          return;
        }
        subList.push(el);
      });

      newList.push({
        turma_id: el.turma_id,
        estado: el.estado,
        titulo: el.titulo,
        planoTuto_id: el.planoTuto_id,
        subTarefas: subList
      });
    });

    PlanodeAula.updateTarefa(planoTarefas_id, value ? 1 : 0).then(el => {
      console.log(el);
      this.setState({
        Tutorias: newList
      });
    });
  };

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header
          navigation={this.props.navigation}
          back
          titulo="O que eu devo fazer aqui?"
          conteudo="Nessa tela você pode editar, apagar ou fazer o Check-in das tutorias e atividades."
          onPress={() => this.props.navigation.navigate("Turmas")}
        />
        <Title title="Check-List Tutorias" />

        <Modal
          visible={this.state.modalTutoria}
          animated
          animationType="fade"
          transparent
          onRequestClose={() =>
            this.setState({ modalTutoria: !this.state.modalTutoria })
          }
        >
          {this.state.modalTutoria ? (
            <Fragment>
              {this.state.tutoria.titulo.length > 0 ? (
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: metrics.basePadding
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.backgroundColor,
                      position: "relative",
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
                        //@ts-ignore
                        title={this.state.tutoria.titulo.toUpperCase()}
                        custom={{ textAlign: "justify" }}
                      />
                    </View>
                    <View
                      style={{
                        padding: metrics.basePadding
                      }}
                    >
                      <Input
                        maxLength={200}
                        multiline
                        placeholder=""
                        value={this.state.novoTextoTuto}
                        onChangeText={text =>
                          this.setState({ novoTextoTuto: removeSpace(text) })
                        }
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
                              modalTutoria: false,
                              tutoria: {},
                              novoTextoTuto: ""
                            })
                          }
                        />
                        <Button
                          title="Atualizar"
                          typeIcon="save"
                          onPress={() => {
                            if (this.state.novoTextoTuto.length > 0) {
                              const { tutoria, novoTextoTuto } = this.state;
                              PlanodeAula.atualizarTutoria(
                                tutoria.planoTuto_id,
                                novoTextoTuto
                              ).then(rs => {
                                console.log(rs);
                                this.context
                                  .buscarTutorias(tutoria.turma_id)
                                  .then(el => {
                                    console.log("aqui", el.Tutorias);
                                    this.setState({
                                      tutoria: {},
                                      novoTextoTuto: "",
                                      modalTutoria: false,
                                      Tutorias: el.Tutorias
                                    });
                                  });
                              });
                            } else {
                              Alert.alert("Ops!", "Digite alguma coisa");
                            }
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                false
              )}
            </Fragment>
          ) : (
            false
          )}
        </Modal>

        <Modal
          visible={this.state.modalAtividade}
          animated
          animationType="fade"
          transparent
          onRequestClose={() =>
            this.setState({ modalAtividade: !this.state.modalAtividade })
          }
        >
          {this.state.modalAtividade ? (
            <Fragment>
              {this.state.atividade.titulo.length > 0 ? (
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: metrics.basePadding
                  }}
                >
                  <View
                    style={{
                      backgroundColor: colors.backgroundColor,
                      position: "relative",
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
                        //@ts-ignore
                        title={this.state.atividade.titulo.toUpperCase()}
                        custom={{ textAlign: "justify" }}
                      />
                    </View>
                    <View
                      style={{
                        padding: metrics.basePadding
                      }}
                    >
                      <Input
                        maxLength={200}
                        multiline
                        placeholder=""
                        value={this.state.novoTextoAtivi}
                        onChangeText={text =>
                          this.setState({ novoTextoAtivi: removeSpace(text) })
                        }
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
                              modalAtividade: false,
                              atividade: {},
                              novoTextoAtivi: ""
                            })
                          }
                        />
                        <Button
                          title="Atualizar"
                          typeIcon="save"
                          onPress={() => {
                            if (this.state.novoTextoAtivi.length > 0) {
                              const { atividade, novoTextoAtivi } = this.state;
                              PlanodeAula.atualizarAtividade(
                                atividade.planoTarefas_id,
                                novoTextoAtivi
                              ).then(rs => {
                                const {
                                  turma
                                } = this.props.navigation.state.params;

                                this.context
                                  .buscarTutorias(turma.turma_id)
                                  .then(el => {
                                    console.log("aqui", el.Tutorias);
                                    this.setState({
                                      atividade: {},
                                      novoTextoAtivi: "",
                                      modalAtividade: false,
                                      Tutorias: el.Tutorias
                                    });
                                  });
                              });
                            } else {
                              Alert.alert("Ops!", "Digite alguma coisa");
                            }
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ) : (
                false
              )}
            </Fragment>
          ) : (
            false
          )}
        </Modal>
        {this.state.Tutorias.length < 1 ? (
          <ActivityIndicator color={colors.primaryDarkColor} size="large" />
        ) : (
          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            data={this.state.Tutorias}
            keyExtractor={item => `${item.planoTuto_id}${Math.random()}`}
            renderItem={({ item, index }) => (
              <View
                style={{
                  borderColor: colors.border,
                  borderWidth: 1,
                  padding: metrics.basePadding
                }}
              >
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    paddingVertical: metrics.basePadding
                  }}
                >
                  <CheckBox
                    value={item.estado === 0 ? false : true}
                    onValueChange={value =>
                      //@ts-ignore
                      this.checkBoxTutoria(index, item.planoTuto_id, value)
                    }
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: fonts.regular,
                        color:
                          item.estado === 0
                            ? colors.primaryTextColor
                            : colors.success,
                        fontWeight: "bold"
                      }}
                    >
                      {item.titulo}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      height: 30,
                      width: 30,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      this.setState({
                        tutoria: item,
                        novoTextoTuto: item.titulo,
                        modalTutoria: true
                      });
                    }}
                  >
                    <FontAwesome5Icon
                      name="edit"
                      style={{
                        fontSize: fonts.regular,
                        color: colors.primaryTextColor,
                        fontWeight: "bold"
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <FlatList
                  contentContainerStyle={{ marginLeft: 20 }}
                  data={item.subTarefas}
                  keyExtractor={item => `${item.planoTuto_id}${Math.random()}`}
                  renderItem={props => (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingVertical: metrics.basePadding,
                        flexWrap: "wrap"
                      }}
                    >
                      <CheckBox
                        value={props.item.estado === 0 ? false : true}
                        onValueChange={value =>
                          this.checkBoxTarefa(
                            index,
                            props.index,
                            props.item.planoTarefas_id,
                            value
                          )
                        }
                      />
                      <View style={{ flex: 1 }}>
                        <Text
                          style={{
                            fontSize: fonts.small,
                            color:
                              props.item.estado === 0
                                ? colors.primaryTextColor
                                : colors.success
                          }}
                        >
                          {props.item.titulo}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          height: 30,
                          width: 30,
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                        onPress={() => {
                          this.setState({
                            atividade: props.item,
                            modalAtividade: true,
                            novoTextoAtivi: props.item.titulo
                          });
                        }}
                      >
                        <FontAwesome5Icon
                          name="edit"
                          style={{
                            fontSize: fonts.small,
                            color: colors.primaryTextColor
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            )}
          />
        )}
      </View>
    );
  }
}

VisualizarTutoria.contextType = Context;
