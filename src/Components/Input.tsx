import React from "react";
import { TextInput, KeyboardTypeOptions } from "react-native";
import { colors, fonts, metrics } from "../Styles";
import { string } from "prop-types";

interface Props {
  onChangeText: (input: string) => void;
  placeholder: string;
  value: string;
  custom?: {};
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export default ({
  onChangeText = (input: string) => {},
  placeholder = "",
  value = "",
  custom = {},
  multiline = false,
  keyboardType = "default"
}: Props) => {
  return (
    <TextInput
      keyboardType={keyboardType}
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
