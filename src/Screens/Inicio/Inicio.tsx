import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableNativeFeedback,
  ScrollView
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, fonts, metrics } from "../../Styles";

const Inicio = (props: {} & NavigationScreenProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.primaryColor, flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDarkColor}
      />
      <View style={{ padding: metrics.basePadding }}>
        <Text
          style={{
            textAlign: "center",
            color: colors.secondaryTextColor,
            fontWeight: "bold",
            fontSize: fonts.big
          }}
        >
          E-PBL
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: colors.secondaryTextColor,
            fontWeight: "bold",
            fontSize: fonts.regular
          }}
        >
          O que é o PBL?
        </Text>
      </View>
      <ScrollView
        style={{
          borderRadius: 20,
          flex: 1,
          backgroundColor: colors.backgroundColor
        }}
      >
        <View
          style={{
            marginTop:16,
            position: "relative",
            alignSelf: "center"
          }}
        >
          <Icon
            name="question"
            size={40}
            color={colors.primaryColor}
            style={{ position: "absolute", right: -25, top: 0 }}
          />
          <Icon
            name="question"
            size={30}
            color={colors.primaryColor}
            style={{ position: "absolute", left: -25, top: 25 }}
          />
          <Icon
            name="question"
            size={20}
            color={colors.primaryColor}
            style={{ position: "absolute", left: -10, top: 5 }}
          />
          <Icon name="user" size={70} color={colors.primaryColor} />
        </View>
      </ScrollView>

      <View
        style={{
          padding: 8,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => props.navigation.navigate("Turmas")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
               justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Icon name="chalkboard-teacher" color="#fff" size={20} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: fonts.regular,
                  color: colors.secondaryTextColor
                }}
              >
                Minhas Turmas
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => props.navigation.navigate("Problemas")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
               justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Icon name="puzzle-piece" color="#fff" size={20} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: fonts.regular,
                  color: colors.secondaryTextColor
                }}
              >
                Problemas
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => props.navigation.navigate("Manual")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
               justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Icon name="book-reader" color="#fff" size={20} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: fonts.regular,
                  color: colors.secondaryTextColor
                }}
              >
                Manual
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => props.navigation.navigate("Objetivos")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
               justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Icon name="bullseye" color="#fff" size={20} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: fonts.regular,
                  color: colors.secondaryTextColor
                }}
              >
                Objetivos
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => props.navigation.navigate("Referências")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
               justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Icon name="link" color="#fff" size={20} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: fonts.regular,
                  color: colors.secondaryTextColor
                }}
              >
                Referências
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => props.navigation.navigate("Sobre o E-PBL")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 8,
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Icon name="question" color="#fff" size={20} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: fonts.regular,
                  color: colors.secondaryTextColor
                }}
              >
                Sobre o E-PBL
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Inicio;
