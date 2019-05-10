import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, metrics, fonts } from "./../Styles";

export default ({ onPress = () => {}, exp = false }: any) => (
  <TouchableOpacity
    style={{
      borderColor: colors.border,
      backgroundColor: colors.secondaryColor,
      paddingVertical: 18,
      paddingHorizontal: 20,
      borderRadius: 100,
      position: "absolute",
      right: metrics.baseMargin,
      bottom: metrics.baseMargin,
      elevation: 2
    }}
    onPress={onPress}
  >
    <Icon
      name={exp ? "file-export" : "plus"}
      size={fonts.big}
      color={colors.primaryTextColor}
    />
  </TouchableOpacity>
);
