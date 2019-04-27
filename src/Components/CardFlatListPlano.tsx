import React from "react";
import { View, TouchableOpacity, Text, Alert, Image } from "react-native";
import { colors, fonts, metrics } from "../Styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default ({ item, deletar = () => {} }: any) => (
  <View
    style={{
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.backgroundColor,
      elevation: 1,
      //padding: metrics.basePadding
      flexDirection: "row"
    }}
  >
    <Text
      style={{
        flex: 1,
        textAlign: "center",
        color: colors.primaryTextColor,
        margin: metrics.baseMargin,
        fontSize: fonts.regular
      }}
    >
      {item.titulo.length > 17
        ? `${item.titulo.substring(0, 17)}...`
        : item.titulo}
    </Text>
    <TouchableOpacity
      style={{
        width: 60,
        backgroundColor: colors.danger,
        borderColor: colors.border,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={deletar}
    >
      <FontAwesome5Icon
        name="trash"
        style={{
          textAlign: "center",
          color: colors.secondaryTextColor,
          margin: metrics.baseMargin,
          fontSize: fonts.regular
        }}
      />
    </TouchableOpacity>
  </View>
);
