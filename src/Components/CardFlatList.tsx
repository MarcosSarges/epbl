import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  StyleSheet
} from "react-native";
import { colors, fonts, metrics } from "../Styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
//@ts-ignore
import view_edit from "./../Assets/img/view-edit.gif";

export default ({
  item,
  onPress = () => {},
  deletar = () => {},
  turmas = false
}: any) => (
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
    <View style={{ flex: 1 }}>
      <Text style={styles.text}>
        Titulo:
        {item.titulo.length > 20
          ? `${item.titulo.substring(0, 20)}...`
          : item.titulo}
      </Text>
      {turmas && (
        <React.Fragment>
          <Text style={styles.text}>Ano:{item.ano}</Text>
          <Text style={styles.text}>Semestre:{item.semestre}</Text>
        </React.Fragment>
      )}
    </View>

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
      {turmas ? (
        <FontAwesome5Icon
          name="tasks"
          style={{
            textAlign: "center",
            textAlignVertical: "center",
            color: colors.secondaryTextColor,
            margin: metrics.baseMargin,
            fontSize: fonts.regular
          }}
        />
      ) : (
        <Image
          resizeMode="cover"
          source={view_edit}
          style={{
            width: 22,
            height: 22,
            margin: metrics.baseMargin
          }}
        />
      )}
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

const styles = StyleSheet.create({
  text: {
    textAlignVertical: "center",
    flex: 1,
    color: colors.primaryTextColor,
    padding: metrics.basePadding,
    fontSize: fonts.regular
  }
});
