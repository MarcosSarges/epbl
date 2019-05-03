import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, StatusBar } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import {
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import CardFlatList from "./../../Components/CardFlatList";
import Input from "./../../Components/Input";
import ButtonPlus from "./../../Components/ButtonPlus";
import Header from "../../Components/Header";
import { Context } from "../../Provider/GlobalState";
import TurmaSQLite from "../../Database/TurmaSQLite";
import PlanodeAula from "../../Database/PlanodeAula";

type Props = {} & NavigationScreenProps;

export default class Turmas extends Component<Props> {
  state = {
    data: [{ turma_id: 1, titulo: "UEPA-TADS-2016" }],
    dataOrigem: [{ turma_id: 1, titulo: "UEPA-TADS-2016" }]
  };

  filter = (input: string) => {
    const { data, dataOrigem } = this.state;
    if (input.length == 0) {
      this.setState({ data: dataOrigem });
    } else {
      this.setState({
        data: data.filter(
          el => el.titulo.toLowerCase().includes(input.toLowerCase()) && true
        )
      });
    }
  };

  componentDidMount() {
    PlanodeAula.listarTudo(15).then(el => {
      console.log(el);
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          {/* <Input onChangeText={this.filter} placeholder="Filtrar..." /> */}
          {this.context.listaTurmas.length > 0 ? (
            <FlatList
              contentContainerStyle={styles.flatlist}
              //@ts-ignore
              keyExtractor={item => `${item.problema_id}`}
              data={this.context.listaTurmas}
              renderItem={({ item }) => (
                <CardFlatList
                  deletar={() => {
                    //@ts-ignore
                    TurmaSQLite.deletarTurma(item.problema_id);
                    this.context.listarTurmas();
                  }}
                  item={item}
                  onPress={() => {
                    this.props.navigation.navigate("Cadastrar turma", {
                      problema: item,
                      editar: true
                    });
                  }}
                />
              )}
            />
          ) : (
            <Text style={{ textAlign: "center", fontSize: fonts.bigger }}>
              Você não possui nenhuma turma cadastrada
            </Text>
          )}
          <ButtonPlus
            onPress={() => {
              this.props.navigation.navigate("Cadastrar turma", {
                editar: false
              });
            }}
          />
        </View>
      </View>
    );
  }
}

Turmas.contextType = Context;

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor,
    flex: 1
  },
  flatlist: {
    paddingVertical: metrics.basePadding
  }
});
