import React, { Component } from "react";
import { View, StatusBar, StyleSheet, Text } from "react-native";
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
        <Header {...this.props} back />
        <View style={styles.container}>
          <Title title={this.state.item.titulo} />
          <View
            style={{
              marginTop: metrics.baseMargin,
              elevation: 2,
              borderColor: colors.border,
              backgroundColor: colors.backgroundColor,
              padding: metrics.basePadding
            }}
          >
            <Text
              style={{
                fontSize: fonts.regular,
                color: colors.primaryTextColor,
                textAlign: "justify",
                fontFamily: "Arial"
              }}
            >
              {this.state.item.conteudo}
            </Text>
          </View>
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
