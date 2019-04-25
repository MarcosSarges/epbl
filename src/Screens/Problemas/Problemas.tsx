import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, StatusBar } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import CardFlatList from "../../Components/CardFlatList";
import ButtonPlus from "../../Components/ButtonPlus";
import Header from "../../Components/Header";
import ProblemaSQLite from "../../Database/ProblemaSQLite";
import { Context } from "../../Provider/GlobalState";

type Props = {} & NavigationScreenProps;

export default class Problemas extends Component<Props> {
  state = {
    data: [],
    dataOrigem: []
  };

  componentDidMount = () => {
    this.context.listarProblemas();
  };

  filter = (input: string) => {
    const { data, dataOrigem } = this.state;

    if (input.length == 0) {
      this.setState({ data: dataOrigem });
    } else {
      this.setState({
        data: data.filter(
          //@ts-ignore
          el => el.titulo.toLowerCase().includes(input.toLowerCase()) && true
        )
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header {...this.props} />
        <View style={styles.container}>
          {/* <Input onChangeText={this.filter} placeholder="Filtrar..." /> */}
          {this.context.listaProblema.length > 0 ? (
            <FlatList
              contentContainerStyle={styles.flatlist}
              //@ts-ignore
              keyExtractor={item => `${item.problema_id}`}
              data={this.context.listaProblema}
              renderItem={({ item }) => (
                <CardFlatList
                  deletar={() => {
                    //@ts-ignore
                    ProblemaSQLite.deletarProblema(item.problema_id);
                    this.context.listarProblemas();
                  }}
                  item={item}
                  onPress={() => {
                    this.props.navigation.navigate("Cadastrar problema", {
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
              this.props.navigation.navigate("Cadastrar problema", {
                editar: false
              });
            }}
          />
        </View>
      </View>
    );
  }
}

Problemas.contextType = Context;

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
