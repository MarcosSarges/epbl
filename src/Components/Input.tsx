import React from "react";
import { TextInput } from "react-native";
import { colors, fonts, metrics } from "../Styles";

export default ({
  onChangeText = (input: string) => {},
  placeholder = "",
  value
}:any) => {
    return (<TextInput value={value} style={{
      borderBottomWidth: 1,
      color: colors.primaryTextColor,
      fontSize: fonts.regular
    }} placeholder={placeholder} onChangeText={onChangeText} />);
  };
