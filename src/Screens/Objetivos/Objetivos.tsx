import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, StatusBar } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import CardFlatList from "../../Components/CardFlatList";
import ButtonPlus from "../../Components/ButtonPlus";
import Header from "../../Components/Header";
import { Context } from "../../Provider/GlobalState";
import ObjetivoSQLite from "../../Database/ObjetivoSQLite";
import Icon from "react-native-vector-icons/FontAwesome5";

type Props = {} & NavigationScreenProps;

export default class Objetivos extends Component<Props> {
  state = {
    data: [],
    dataOrigem: []
  };

  componentDidMount = () => {
    this.context.listarObjetivos();
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
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          {/* <Input onChangeText={this.filter} placeholder="Filtrar..." /> */}
          {this.context.listaObjetivos.length > 0 ? (
            <FlatList
              contentContainerStyle={styles.flatlist}
              //@ts-ignore
              keyExtractor={item => `${item.objetivo_id}`}
              data={this.context.listaObjetivos}
              renderItem={({ item }) => (
                <CardFlatList
                  deletar={() => {
                    //@ts-ignore
                    ObjetivoSQLite.deletarObjetivo(item.objetivo_id);
                    this.context.listarObjetivos();
                  }}
                  item={item}
                  onPress={() => {
                    this.props.navigation.navigate("Cadastrar objetivo", {
                      objetivo: item,
                      editar: true
                    });
                  }}
                />
              )}
            />
          ) : (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Icon
                name="exclamation-circle"
                size={50}
                color={colors.secondaryColor}
              />
              <Text style={{ textAlign: "center", fontSize: fonts.bigger }}>
                Você não possui nenhum objetivo cadastrado.
              </Text>
            </View>
          )}
          <ButtonPlus
            onPress={() => {
              this.props.navigation.navigate("Cadastrar objetivo", {
                editar: false
              });
            }}
          />
        </View>
      </View>
    );
  }
}

Objetivos.contextType = Context;

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
