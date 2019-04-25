import React from "react";
import { TextInput } from "react-native";
import { colors, fonts, metrics } from "../Styles";

export default ({
  onChangeText = (input: string) => {},
  placeholder = "",
  value,
  custom = {},
  multiline = false
}: any) => {
  return (
    <TextInput
      multiline={multiline}
      value={value}
      style={{
        borderBottomWidth: 1,
        color: colors.primaryTextColor,
        fontSize: fonts.regular,
        ...custom
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};
