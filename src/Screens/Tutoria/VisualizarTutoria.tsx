import React, { Component } from "react";

import {
  View,
  StatusBar,
  CheckBox,
  Text,
  ActivityIndicator
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

type Props = {} & NavigationScreenProps;

export default class VisualizarTutoria extends Component<Props> {
  state = {
    Tutorias: []
  };

  static navigationOptions: NavigationBottomTabScreenOptions = {
    tabBarIcon: ({ tintColor }) => (
      //@ts-ignore
      <FontAwesome5Icon name="brain" color={tintColor} size={20} />
    )
  };

  componentWillMount() {
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
          conteudo="Nessa tela você pode realizar o Check-in, editar e deletar das tutorias e atividades já realizadas."
          onPress={() => this.props.navigation.navigate("Turmas")}
        />
        <Title title="Check-List Tutorias" />
        {this.state.Tutorias.length === 0 ? (
          <ActivityIndicator />
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
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    value={item.estado === 0 ? false : true}
                    onValueChange={value =>
                      //@ts-ignore
                      this.checkBoxTutoria(index, item.planoTuto_id, value)
                    }
                  />
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
                <FlatList
                  contentContainerStyle={{ marginLeft: 20 }}
                  data={item.subTarefas}
                  keyExtractor={item => `${item.planoTuto_id}${Math.random()}`}
                  renderItem={props => (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
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
