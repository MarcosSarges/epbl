import React from "react";
import { View, TouchableOpacity, Text, Alert, Image } from "react-native";
import { colors, fonts, metrics } from "../Styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
//@ts-ignore
import view_edit from "./../Assets/img/view-edit.gif";

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
        margin: metrics.baseMargin,
        fontSize: fonts.regular
      }}
    >
      {item.titulo.length > 17
        ? `${item.titulo.substring(0, 17)}...`
        : item.titulo}
    </Text>
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 60,
        backgroundColor: colors.success,
        borderColor: colors.border,
        elevation: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* <FontAwesome5Icon
        name="edit"
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          color: colors.secondaryTextColor,
          margin: metrics.baseMargin,
          fontSize: fonts.regular
        }}
      /> */}
      <Image
        resizeMode="cover"
        source={view_edit}
        style={{
          width: 22,
          height: 22,
          margin: metrics.baseMargin
        }}
      />
    </TouchableOpacity>
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
