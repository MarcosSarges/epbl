import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { colors, fonts, metrics } from "../Styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default ({ item, onPress = () => {}, deletar = () => {} }: any) => (
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
        margin: metrics.baseMargin
      }}
    >
      {item.titulo}
    </Text>
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 60,
        backgroundColor: colors.success,
        borderColor: colors.border,
        elevation: 1
      }}
    >
      <FontAwesome5Icon
        name="edit"
        style={{
          textAlign: "center",
          color: colors.secondaryTextColor,
          margin: metrics.baseMargin,
          fontSize: fonts.regular
        }}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: 60,
        backgroundColor: colors.danger,
        borderColor: colors.border,
        elevation: 1
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
