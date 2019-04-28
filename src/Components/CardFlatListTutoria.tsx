import React from "react";
import { View, TouchableOpacity, Text, Alert, Image } from "react-native";
import { colors, fonts, metrics } from "../Styles";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
//@ts-ignore
import view_edit from "./../Assets/img/view-edit.gif";

interface Props {
  item: any;
  addTask: () => void;
  deletar: () => void;
}

const renderSubTarefas = (item: any) =>
  item.subTarefas.map((el: any) => (
    <Text
      key={Math.random()}
      style={{
        marginTop: 3,
        fontSize: 14,
        color: colors.primaryTextColor,
        marginBottom: metrics.baseMargin,
        marginLeft: metrics.baseMargin * 2
      }}
    >
      Tarefa: {el.titulo}
    </Text>
  ));

export default ({ item, addTask = () => {}, deletar = () => {} }: Props) => (
  <View
    style={{
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.backgroundColor,
      elevation: 1,
      flexDirection: "row"
    }}
  >
    <View
      style={{
        flexDirection: "column",
        flex: 1
      }}
    >
      <Text
        style={{
          flex: 1,
          textAlign: "justify",
          color: colors.primaryTextColor,
          margin: metrics.baseMargin,
          fontSize: fonts.small
        }}
      >
        {item.titulo.length > 17
          ? `${item.titulo.substring(0, 17)}...`
          : item.titulo}
      </Text>
      {item.subTarefas.length > 0 ? renderSubTarefas(item) : false}
    </View>

    <View
      style={{
        flexDirection: "row"
      }}
    >
      <TouchableOpacity
        onPress={addTask}
        style={{
          width: 60,
          backgroundColor: colors.success,
          borderColor: colors.border,
          elevation: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
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
  </View>
);
