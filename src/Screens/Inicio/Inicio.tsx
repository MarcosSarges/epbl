import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableNativeFeedback,
  ScrollView,
  Image
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, fonts, metrics } from "../../Styles";
import Title from "../../Components/Title";

const Inicio = (props: {} & NavigationScreenProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.primaryColor, flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDarkColor}
      />
      <View
        style={{
          padding: metrics.basePadding,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <View>
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
        <Image
          source={require("./../../Assets/img/uepa.png")}
          style={{ resizeMode: "cover", height: 50, width: 50 }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          flex: 1,
          backgroundColor: colors.backgroundColor
        }}
        contentContainerStyle={{ padding: metrics.basePadding }}
      >
        <View
          style={{
            marginTop: 16,
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
        <Title title="PBL" />
        <Text style={{ fontSize: fonts.regular }} selectable={true}>
          A metodologia Problem-Based Learning (Aprendizado Baseado em Problemas
          - ABP) consiste em utilizar cenários reais como apoio ao aprendizado.
          Nesta metodologia, problemas existentes são incorporados à matéria,
          desafiando alunos a buscar soluções para situações verdadeiras do
          dia-a-dia do mercado de trabalho ou da academia em que estarão
          inseridos.
        </Text>
        <Title title="Problema" />
        <Text style={{ fontSize: fonts.regular }} selectable={true}>
          Ela é a principal estratégia da metodologia de ensino PBL, que visa o
          aprendizado do aluno através da interação da matéria com uma
          situação-problema vivenciado no dia-a-dia.
        </Text>
        <Title title="Exemplo" />
        <Text style={{ fontSize: fonts.regular }} selectable={true}>
          Para entender o que seria o Problema dentro da metodologia, criamos um
          exemplo.{`\n`}Problema: "Minha empresa tem muitos registros e não
          estamos conseguindo lidar com a busca, armazenamento e atualização."
          {`\n`}A partir desse problema criamos os objetivos e selecionamos as
          referências.{`\n`}Objetivos:{`\n`}1) Identificar os requisitos para
          desenvolver uma solução;{`\n`}2) Elaborar protótipos da solução;{`\n`}
          3) Familiarizar com os conceitos de prototipagem;
          {`\n`}4) Familiarizar com as ferramentas de prototipagem;{`\n`}
          Referências:{`\n`}Como elaborar uma entrevista
          (https://www.devmedia.com.br/tecnicas-para-levantamento-de-requisitos/9151);
          {`\n`}Livro PMBOK;{`\n`}Ferramenta: Adobe XD;
        </Text>
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
