import React from "react";
import { Text } from "react-native";
import { colors, metrics, fonts } from "./../Styles";

type Props = {
  title: string;
  custom?: {};
};

export default ({ title = "", custom = {} }: Props) => (
  <Text
    style={{
      fontSize: fonts.bigger,
      color: colors.primaryTextColor,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "Arial",
      ...custom
    }}
  >
    {title}
  </Text>
);
