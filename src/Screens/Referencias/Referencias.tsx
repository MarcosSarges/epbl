import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, StatusBar } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import CardFlatList from "../../Components/CardFlatList";
import ButtonPlus from "../../Components/ButtonPlus";
import Header from "../../Components/Header";
import { Context } from "../../Provider/GlobalState";
import ReferenciaSQLite from "../../Database/ReferenciaSQLite";
import Icon from "react-native-vector-icons/FontAwesome5";

type Props = {} & NavigationScreenProps;

export default class Referencias extends Component<Props> {
  state = {
    data: [],
    dataOrigem: []
  };

  componentDidMount = () => {
    this.context.listarReferencias();
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
        <Header
          navigation={this.props.navigation}
          titulo="O que é a referência?"
          conteudo="São links, livros, artigos, vídeos, etc, que serviram como base para elaboração da solução do problema."
          subTitulo="O que fazer nessa tela?"
          subConteudo="Você pode cadastrar referências clicando no botão flutuante (+), editá-las ou apagá-las."
        />
        <View style={styles.container}>
          {/* <Input onChangeText={this.filter} placeholder="Filtrar..." /> */}
          {this.context.listaReferencias.length > 0 ? (
            <FlatList
              contentContainerStyle={styles.flatlist}
              //@ts-ignore
              keyExtractor={item => `${item.referencia_id}`}
              data={this.context.listaReferencias}
              renderItem={({ item }) => (
                <CardFlatList
                  deletar={() => {
                    //@ts-ignore
                    ReferenciaSQLite.deletarReferencia(item.referencia_id);
                    this.context.listarReferencias();
                  }}
                  item={item}
                  onPress={() => {
                    this.props.navigation.navigate("Cadastrar referência", {
                      referencia: item,
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
                Você não possui nenhuma referencia cadastrada.
              </Text>
            </View>
          )}
          <ButtonPlus
            onPress={() => {
              this.props.navigation.navigate("Cadastrar referência", {
                editar: false
              });
            }}
          />
        </View>
      </View>
    );
  }
}

Referencias.contextType = Context;

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
