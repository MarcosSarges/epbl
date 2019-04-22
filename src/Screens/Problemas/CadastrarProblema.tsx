import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Alert
} from "react-native";
import { colors, fonts, metrics } from "../../Styles";
import { NavigationScreenProps, ScrollView } from "react-navigation";
import Input from "../../Components/Input";
import Title from "../../Components/Title";
import Header from "../../Components/Header";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Button from "../../Components/Button";
import ProblemaSQLite from "../../Database/ProblemaSQLite";

type Props = {} & NavigationScreenProps;

export default class CadastrarProblemas extends Component<Props> {
  state = {
    titulo: "",
    historia: ""
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header {...this.props} />

        <ScrollView contentContainerStyle={styles.container}>
          <Input
            value={this.state.titulo}
            placeholder="Titulo do problema"
            onChangeText={(txt: string) => this.setState({ titulo: txt })}
          />
          <View style={styles.viewInput}>
            <TextInput
              placeholder="Historia do problema, basicamente descrever o problema..."
              style={styles.textInput}
              value={this.state.historia}
              onChangeText={txt => this.setState({ historia: txt })}
              multiline
            />
          </View>
          <View style={styles.viewButton}>
            <Button
              type="success"
              typeIcon="save"
              title="Salvar"
              onPress={() => {
                if (
                  this.state.titulo.length > 0 &&
                  this.state.historia.length > 0
                ) {
                  Alert.alert(
                    "Confirmação",
                    `Titulo: ${
                      this.state.titulo
                    } - Hitoria: ${this.state.historia.slice(0, 40)}...`
                  );
                  ProblemaSQLite.saveProblema(
                    this.state.titulo,
                    this.state.historia
                  );
                } else {
                  Alert.alert("Ops!", "Você deve preencer todos os campos");
                }
              }}
            />
            <Button
              type="danger"
              typeIcon="times"
              title="Cancelar"
              onPress={() => {
                Alert.alert("Ops!", "Você quer realmente sair?", [
                  {
                    text: "Sim",
                    onPress: () => {
                      this.props.navigation.goBack();
                    }
                  },
                  { text: "Não" }
                ]);
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor
    //flex: 1
  },
  flatlist: {
    paddingVertical: metrics.basePadding
  },
  viewInput: {
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderBottomColor: "#000",
    marginVertical: metrics.baseMargin
  },
  textInput: {
    fontSize: fonts.regular,
    color: colors.primaryTextColor,
    height: 350
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
