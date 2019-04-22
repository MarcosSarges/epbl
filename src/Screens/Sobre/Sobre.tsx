import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors, metrics } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import Header from "../../Components/Header";
type Props = {} & NavigationScreenProps;

export default (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDarkColor}
      />
      <Header {...props} />

      <View style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor,
    flex: 1
  },
  flatlist: { paddingVertical: metrics.basePadding }
});
