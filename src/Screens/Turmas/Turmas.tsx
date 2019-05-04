import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import CardFlatList from "./../../Components/CardFlatList";
import Input from "./../../Components/Input";
import ButtonPlus from "./../../Components/ButtonPlus";
import Header from "../../Components/Header";
import { Context } from "../../Provider/GlobalState";
import TurmaSQLite from "../../Database/TurmaSQLite";
import PlanodeAula from "../../Database/PlanodeAula";
import Icon from "react-native-vector-icons/FontAwesome5";

type Props = {} & NavigationScreenProps;

export default class Turmas extends Component<Props> {
  state = {
    data: [{ turma_id: 1, titulo: "UEPA-TADS-2016" }],
    dataOrigem: [{ turma_id: 1, titulo: "UEPA-TADS-2016" }],
    load: true
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
    this.context.listarTurmas().then(el => {
      this.setState({
        load: false
      });
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
          {this.state.load ? (
            <ActivityIndicator color={colors.primaryDarkColor} size="large" />
          ) : (
            <React.Fragment>
              {this.context.listaTurmas.length > 0 ? (
                <FlatList
                  contentContainerStyle={styles.flatlist}
                  //@ts-ignore
                  keyExtractor={item => `${item.turma_id}`}
                  data={this.context.listaTurmas}
                  renderItem={({ item }) => (
                    <CardFlatList
                      turmas={true}
                      deletar={() => {
                        //@ts-ignore
                        TurmaSQLite.deletarTurma(item.turma_id);
                        this.context.listarTurmas();
                      }}
                      item={item}
                      onPress={() =>
                        this.props.navigation.navigate("Plano - Visualizar", {
                          turma: item
                        })
                      }
                    />
                  )}
                />
              ) : (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Icon
                    name="exclamation-circle"
                    size={50}
                    color={colors.secondaryColor}
                  />
                  <Text style={{ textAlign: "center", fontSize: fonts.bigger }}>
                    Você não possui nenhuma turma cadastrada
                  </Text>
                </View>
              )}
              <ButtonPlus
                onPress={() => {
                  this.props.navigation.navigate("Cadastrar turma", {
                    editar: false
                  });
                }}
              />
            </React.Fragment>
          )}
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
