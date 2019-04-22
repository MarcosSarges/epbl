import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Text } from "react-native";
import { colors, fonts, metrics } from "../Styles";

export default ({
  onPress = () => {},
  type = "success",
  typeIcon = "",
  title = ""
}) => (
  <TouchableOpacity
    style={{
      backgroundColor:
        type === "success"
          ? colors.success
          : type === "danger"
          ? colors.danger
          : colors.warning,
      elevation: 2,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: 160,
      height: 60,
      padding: metrics.basePadding
    }}
    onPress={onPress}
  >
    {typeIcon === "save" ? (
      <FontAwesome5Icon
        name="save"
        size={fonts.small}
        color={colors.secondaryTextColor}
      />
    ) : typeIcon === "times" ? (
      <FontAwesome5Icon
        name="times"
        size={fonts.small}
        color={colors.secondaryTextColor}
      />
    ) : (
      false
    )}
    <Text
      style={{
        fontSize: fonts.small,
        color: colors.secondaryTextColor,
        fontWeight: "bold"
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
