import React, { Component } from "react";

import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { colors, metrics, fonts } from "../../Styles";
import Header from "../../Components/Header";
import {
  NavigationScreenProps,
  NavigationBottomTabScreenOptions
} from "react-navigation";
import { Context } from "../../Provider/GlobalState";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

type Props = {} & NavigationScreenProps;

export default class VisualizarPlano extends Component<Props> {
  state = {
    //@ts-ignore
    turma: this.props.navigation.state.params.turma,
    planoAula: {},
    load: true
  };

  static navigationOptions: NavigationBottomTabScreenOptions = {
    tabBarIcon: ({ tintColor }) => (
      //@ts-ignore
      <FontAwesome5Icon name="chalkboard-teacher" color={tintColor} size={20} />
    )
  };

  componentDidMount() {
    console.log(this.props.navigation.state.params);
    //@ts-ignore
    this.context.buscarPlanoDeAula(this.state.turma.turma_id).then(el => {
      this.setState({
        planoAula: this.context.planoDeAula,
        load: false
      });
    });
  }

  rendeProblemas = () => {
    //@ts-ignore
    const Probs = this.context.planoDeAula.Problemas.map(el => {
      return (
        <View
          key={JSON.stringify(el)}
          style={{ marginBottom: metrics.baseMargin }}
        >
          <Text style={styles.detalhes}>Titulo: {el.titulo}</Text>
          <Text style={styles.detalhes}>Historia: {el.historia}</Text>
        </View>
      );
    });

    return Probs;
  };

  rendeObjetivos = () => {
    //@ts-ignore
    const Objs = this.context.planoDeAula.Objetivos.map(el => {
      return (
        <View
          key={JSON.stringify(el)}
          style={{ marginBottom: metrics.baseMargin }}
        >
          <Text style={styles.detalhes}>Titulo: {el.titulo}</Text>
        </View>
      );
    });
    return Objs;
  };

  renderReferencias = () => {
    //@ts-ignore
    const Refs = this.context.planoDeAula.Referencias.map(el => {
      return (
        <View
          key={JSON.stringify(el)}
          style={{ marginBottom: metrics.baseMargin }}
        >
          <Text style={styles.detalhes}>Titulo: {el.titulo}</Text>
        </View>
      );
    });
    return Refs;
  };

  render() {
    const { turma }: any = this.state;
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
        <ScrollView
          contentContainerStyle={{ paddingBottom: metrics.basePadding + 65 }}
        >
          {this.state.load ? (
            <ActivityIndicator />
          ) : (
            <React.Fragment>
              <View style={styles.viewCard}>
                <Text style={styles.title}>Plano de aula</Text>
                <Text style={styles.detalhes}>Titulo: {turma.titulo}</Text>
                <Text style={styles.detalhes}>Ano: {turma.ano}</Text>
                <Text style={styles.detalhes}>Semestre: {turma.semestre}</Text>
              </View>
              <View style={styles.viewCard}>
                <Text style={styles.title}>Problemas</Text>
                {this.rendeProblemas()}
              </View>
              <View style={styles.viewCard}>
                <Text style={styles.title}>Objetivos</Text>
                {this.rendeObjetivos()}
              </View>
              <View style={styles.viewCard}>
                <Text style={styles.title}>Referencias</Text>
                {this.renderReferencias()}
              </View>
            </React.Fragment>
          )}
        </ScrollView>
      </View>
    );
  }
}

VisualizarPlano.contextType = Context;

const styles = StyleSheet.create({
  viewCard: {
    marginTop: metrics.baseMargin,
    borderColor: colors.border,
    borderWidth: 1,
    elevation: 1,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin
  },
  detalhes: {
    fontSize: fonts.regular,
    color: colors.primaryTextColor
  },
  title: {
    fontSize: fonts.big,
    color: colors.primaryTextColor,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase"
  }
});
