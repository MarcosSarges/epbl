import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { colors, fonts, metrics } from "../Styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

export default ({ item, onPress = () => {} }: any) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.backgroundColor,
        elevation: 1,
        //padding: metrics.basePadding
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <FontAwesome5Icon
        name="question-circle"
        style={{
          textAlign: "center",
          color: colors.primaryTextColor,
          margin: metrics.baseMargin,
          fontSize: fonts.regular
        }}
      />
      <Text
        style={{
          flex: 1,
          fontSize: fonts.regular,
          //textAlign: "center",
          color: colors.primaryTextColor,
          margin: metrics.baseMargin
        }}
      >
        {item.titulo.length > 40
          ? `${item.titulo.substring(0, 40)}...`
          : item.titulo}
      </Text>
    </TouchableOpacity>
  </View>
);
