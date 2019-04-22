import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text, StatusBar } from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import CardFlatList from "../../Components/CardFlatList";
import Input from "../../Components/Input";
import ButtonPlus from "../../Components/ButtonPlus";
import Header from "../../Components/Header";

type Props = {} & NavigationScreenProps;

export default class Objetivos extends Component<Props> {
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
          <Input onChangeText={this.filter} placeholder="Filtrar..." />
          {this.state.data.length > 0 ? (
            <FlatList
              contentContainerStyle={styles.flatlist}
              keyExtractor={item => `${item.turma_id}`}
              data={this.state.data}
              renderItem={({ item }) => <CardFlatList item={item} />}
            />
          ) : (
            <Text style={{ textAlign: "center", fontSize: fonts.bigger }}>
              Você não possui nenhuma turma cadastrada
            </Text>
          )}
          <ButtonPlus onPress={() => {}} />
        </View>
      </View>
    );
  }
}

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