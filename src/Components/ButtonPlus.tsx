import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, metrics, fonts } from "./../Styles";

export default ({
  onPress = () => {},
  exp = false,
  title = "",
  custom = {}
}: any) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
    onPress={onPress}
  >
    <View
      style={{
        borderColor: colors.border,
        backgroundColor: colors.secondaryColor,
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderRadius: 100,
        position: "absolute",
        right: metrics.baseMargin,
        bottom: metrics.baseMargin,
        ...custom
        // elevation: 2
      }}
    >
      {exp ? (
        <Text>{title}</Text>
      ) : (
        <Icon
          name={exp ? "file-export" : "plus"}
          size={fonts.big}
          color={colors.primaryTextColor}
        />
      )}
    </View>
  </TouchableNativeFeedback>
);
