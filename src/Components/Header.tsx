import React, { useState } from "react";
import { View, Text, Alert, ScrollView, StyleSheet, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, metrics, fonts } from "./../Styles";
import { NavigationScreenProps } from "react-navigation";
import Title from "./Title";
import ConteudoBotao from "../Screens/Manual/ConteudoBotao";

type Props = {
  back?: boolean;
  onPress?: () => void;
  titulo?: string;
  subTitulo?: string;
  conteudo?: string;
  subConteudo?: string;
  hiddenButton?: boolean;
  terceiroTitulo?: string;
  terceiroConteudo?: string;
};

export default (props: Props & NavigationScreenProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.header}>
      <Modal
        animated
        animationType="fade"
        hardwareAccelerated
        transparent
        visible={visible}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
        >
          <ScrollView
            contentContainerStyle={{
              elevation: 4,
              margin: metrics.baseMargin,
              padding: metrics.basePadding,
              paddingBottom: 20,
              marginBottom: 20,
              borderRadius: 20,
              backgroundColor: "#FFF",
              position: "relative"
            }}
          >
            <Icon
              style={{
                position: "absolute",
                right: metrics.baseMargin,
                top: metrics.baseMargin,
                zIndex: 5000
              }}
              name="times-circle"
              solid
              size={30}
              onPress={() => {
                setVisible(!visible);
              }}
              color={colors.primaryColor}
            />

            <Text
              style={{
                textAlign: "center",
                color: colors.primaryTextColor,
                fontWeight: "bold",
                textTransform: "uppercase",
                fontSize: fonts.big,
                marginTop: 35
              }}
            >
              {props.titulo}
            </Text>
            <Text style={{ fontSize: fonts.regular, textAlign: "center" }}>
              {props.conteudo}
            </Text>
            {props.subTitulo ? (
              <React.Fragment>
                <Text
                  style={{
                    textAlign: "center",
                    color: colors.primaryTextColor,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: fonts.big,
                    marginTop: 8
                  }}
                >
                  {props.subTitulo}
                </Text>
                <Text style={{ fontSize: fonts.regular, textAlign: "center" }}>
                  {props.subConteudo}
                </Text>
                {props.terceiroTitulo ? (
                  <React.Fragment>
                    <Text
                      style={{
                        textAlign: "center",
                        color: colors.primaryTextColor,
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontSize: fonts.big,
                        marginTop: 8
                      }}
                    >
                      {props.terceiroTitulo}
                    </Text>
                    <Text
                      style={{
                        fontSize: fonts.regular,
                        textAlign: "center",
                        marginBottom: 10
                      }}
                    >
                      {props.terceiroConteudo}
                    </Text>
                  </React.Fragment>
                ) : (
                  false
                )}
              </React.Fragment>
            ) : (
              false
            )}
          </ScrollView>
        </View>
      </Modal>

      {props.back ? (
        <Icon
          style={{ marginHorizontal: metrics.baseMargin }}
          name="arrow-left"
          color={colors.primaryTextColor}
          size={fonts.regular}
          onPress={() => {
            if (typeof props.onPress === "undefined") {
              props.navigation.goBack();
            } else {
              props.onPress();
            }
            // Alert.alert("Você está saindo?", "Tem certeza?", [
            //   { text: "Sim", onPress: () => props.navigation.goBack() },
            //   { text: "Não" }
            // ]);
          }}
        />
      ) : (
        false
      )}
      <Text style={styles.title}>{props.navigation.state.routeName}</Text>
      {props.back ? (
        <React.Fragment>
          {props.hiddenButton ? (
            false
          ) : (
            <Icon
              style={{ marginRight: metrics.baseMargin }}
              name="question"
              solid
              color={colors.primaryTextColor}
              size={fonts.regular}
              onPress={() => setVisible(!visible)}
            />
          )}
        </React.Fragment>
      ) : (
        <View style={{ flexDirection: "row" }}>
          <Icon
            style={{ marginRight: metrics.baseMargin + 5 }}
            name="question"
            solid
            color={colors.primaryTextColor}
            size={fonts.regular}
            onPress={() => {
              setVisible(!visible);
            }}
          />
          <Icon
            style={{ marginRight: metrics.baseMargin }}
            name="bars"
            color={colors.primaryTextColor}
            size={fonts.regular}
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    width: metrics.screenWidth,
    backgroundColor: colors.primaryColor,
    padding: metrics.basePadding,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3
  },
  title: {
    color: colors.primaryTextColor,
    fontSize: fonts.regular,
    fontWeight: "bold",
    flex: 1
  }
});
