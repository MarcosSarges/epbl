import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ToastAndroid
} from "react-native";
import { colors, metrics, fonts } from "../../Styles";
import { NavigationScreenProps } from "react-navigation";
import Header from "../../Components/Header";
import openLink from "../../util/openLink";
type Props = {} & NavigationScreenProps;

export default (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDarkColor}
      />
      <Header {...props} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("./../../Assets/img/uepa.png")}
          style={{ resizeMode: "contain", height: 100, width: "100%" }}
        />
        <Text style={styles.title}>Finalidade</Text>
        <Text selectable={true} style={styles.texto}>
          Este aplicativo tem a finalidade de auxiliar docentes na aplicação da
          metodologia PBL – Problem Based Learning em suas turmas
          universitárias, fornecendo o apoio necessário para que essa aplicação
          seja feita de forma satisfatória e efetiva.
        </Text>
        <Text style={styles.title}>Motivação</Text>
        <Text style={styles.texto} selectable={true}>
          O aplicativo foi desenvolvido como a ferramenta resultante das
          pesquisas para o trabalho de conclusão de curso apresentado na
          Universidade do Estado do Pará – UEPA, para conclusão do curso de Tec.
          em Anál. E Desenvolvimento de Sistemas pelos discentes responsáveis.
        </Text>
        <Text style={styles.title}>Discentes</Text>
        <Text style={styles.texto}>Letícia Moura de Almeida</Text>
        <Text style={styles.texto}>Marcos Paulo Sarges Rolim</Text>
        <Text style={styles.texto}>Rodrigo Oliveira da Silva</Text>

        <Text style={styles.title}>Orientador</Text>
        <Text style={styles.texto}>
          Prof. Me. Anderson Jorge Serra da Costa.
        </Text>

        <Text style={styles.title}>Referencias</Text>
        <TouchableOpacity onPress={() => openLink("https://br.freepik.com")}>
          <Text
            selectable={true}
            selectionColor={colors.secondaryLightColor}
            style={styles.texto}
          >
            Logo: Designed by rawpixel.com / Freepik{"\n"}
            Disponivel em: https://br.freepik.com
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor
  },
  title: {
    fontSize: fonts.big,
    color: colors.primaryTextColor,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  texto: {
    fontSize: fonts.regular,
    color: colors.primaryTextColor,
    textAlign: "justify"
  }
});
