import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { colors, fonts, metrics } from "../Styles";

export default ({ item, onPress = () => {} }: any) => (
  <TouchableOpacity
    style={{
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.backgroundColor,
      elevation: 1
      //padding: metrics.basePadding
    }}
    onPress={onPress}
  >
    <Text
      style={{
        textAlign: "center",
        color: colors.primaryTextColor,
        margin: metrics.baseMargin
      }}
    >
      {item.titulo}
    </Text>
  </TouchableOpacity>
);
