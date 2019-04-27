import React from "react";
import { View, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, metrics, fonts } from "./../Styles";

export default (props: any) => {
  return (
    <View
      style={{
        height: 55,
        width: metrics.screenWidth,
        backgroundColor: colors.primaryColor,
        padding: metrics.basePadding,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 3
      }}
    >
      {props.back ? (
        <Icon
          style={{ marginHorizontal: metrics.baseMargin }}
          name="arrow-left"
          color={colors.primaryTextColor}
          size={fonts.regular}
          onPress={() => {
            Alert.alert("Você está saindo?", "Tem certeza?", [
              { text: "Sim", onPress: () => props.navigation.goBack() },
              { text: "Não" }
            ]);
          }}
        />
      ) : (
        false
      )}
      <Text
        style={{
          color: colors.primaryTextColor,
          fontSize: fonts.regular,
          fontWeight: "bold",
          fontFamily: "Gugi",
          flex: 1
        }}
      >
        {props.navigation.state.routeName}
      </Text>
      <Icon
        style={{ marginRight: metrics.baseMargin }}
        name="bars"
        color={colors.primaryTextColor}
        size={fonts.regular}
        onPress={() => {
          props.navigation.openDrawer();
        }}
      />
    </View>
  );
};
