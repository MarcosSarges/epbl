import React from "react";
import {
  TextInput,
  KeyboardTypeOptions,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  ViewStyle,
  TextStyle
} from "react-native";
import { colors, fonts, metrics } from "../Styles";
import { string } from "prop-types";

interface Props {
  onChangeText: (input: string) => void;
  onSubmitEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  placeholder: string;
  value: string;
  custom?: TextStyle & ViewStyle;
  multiline?: boolean;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
}

export default ({
  onChangeText = (input: string) => {},
  onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {},
  placeholder = "",
  value = "",
  custom = {},
  multiline = false,
  keyboardType = "default",
  maxLength = 1000
}: Props) => {
  return (
    <TextInput
      maxLength={maxLength}
      onSubmitEditing={onSubmitEditing}
      selectionColor={colors.success}
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
