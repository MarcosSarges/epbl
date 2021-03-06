import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Text, ScrollView } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { colors, metrics, fonts } from "../../Styles";
import Title from "../../Components/Title";
import Header from "../../Components/Header";

type Props = {} & NavigationScreenProps;
type State = { item: any };

export default class DetalhesManual extends Component<Props, State> {
  state = {
    //@ts-ignore
    item: this.props.navigation.state.params.item
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header navigation={this.props.navigation} back hiddenButton />
        <View style={styles.container}>
          <Title title={this.state.item.titulo} />
          <ScrollView>
            <Text
              style={{
                fontSize: fonts.regular,
                color: colors.primaryTextColor,
                textAlign: "left"
              }}
            >
              {this.state.item.conteudo}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding + 10,
    backgroundColor: colors.backgroundColor,
    flex: 1
  },
  flatlist: { paddingVertical: metrics.basePadding }
});
