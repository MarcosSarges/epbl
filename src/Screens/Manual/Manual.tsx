import React, { Component } from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import { colors, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import CardFlatList from "./../../Components/CardFlatList";

import Conteudo from "./Conteudo";
import Header from "../../Components/Header";

type Props = {} & NavigationScreenProps;

export default class Manual extends Component<Props> {
  state = {
    data: Conteudo
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
          <FlatList
            contentContainerStyle={styles.flatlist}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            keyExtractor={item => `${item.key}`}
            data={this.state.data}
            renderItem={({ item }) => (
              <CardFlatList
                item={item}
                onPress={() =>
                  this.props.navigation.navigate("Manual - Detalhes", { item })
                }
              />
            )}
          />
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
  flatlist: { paddingVertical: metrics.basePadding }
});
