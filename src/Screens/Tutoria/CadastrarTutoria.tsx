import React, { Component } from "react";

import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  CheckBox
} from "react-native";
import { NavigationScreenProps, FlatList } from "react-navigation";
import { colors, metrics, fonts } from "../../Styles";
import Header from "../../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../Components/Input";
import Icon from "react-native-vector-icons/FontAwesome5";
import Title from "../../Components/Title";

// import { Container } from './styles';

type Props = {} & NavigationScreenProps;

export default class CadastrarTutoria extends Component<Props> {
  /**
   * tutoria:{
   *  tutoria_id:1,
   *  texto:"aaaaaaaaaaaaaaaaaa",
   *  subTutorias:[
   *    {
   *        subTutoria_id:1,
   *        texto:"aaaaaaaaaaaaaaaaaa",
   *    },
   *    {
   *        subTutoria_id:2,
   *        texto:"aaaaaaaaaaaaaaaaaa",
   *    }
   *  ]
   * }
   */

  state = {
    addTutoria: "",
    listaTutoria: []
  };
  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }

  onSubmit = (event: any) => {
    if (this.state.addTutoria.length > 0) {
      const { listaTutoria } = this.state;
      //@ts-ignore
      listaTutoria.push(this.state.addTutoria);

      this.setState({ addTutoria: "" });
    } else {
      Alert.alert("Ops!", "É necessario inserir algum texto");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header navigation={this.props.navigation} back />
        <ScrollView style={styles.container}>
          {this.state.listaTutoria.length > 0 ? (
            <FlatList
              data={this.state.listaTutoria}
              renderItem={({ item }) => (
                <View>
                  <CheckBox onValueChange={a => console.log(a)} />
                  <Text>{item}</Text>
                </View>
              )}
            />
          ) : (
            <Title title="Você deve adcionar pelo menos uma tutoria" />
          )}
        </ScrollView>
        <View style={styles.viewInput}>
          <Input
            custom={styles.input}
            onSubmitEditing={this.onSubmit}
            value={this.state.addTutoria}
            placeholder="Adicionar tutoria rapidamente"
            onChangeText={text => this.setState({ addTutoria: text })}
          />
          <Icon
            name="check-circle"
            solid
            color={colors.success}
            size={fonts.regular}
            onPress={this.onSubmit}
            style={{ marginRight: metrics.baseMargin }}
          />
        </View>
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
  viewInput: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: metrics.basePadding,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: metrics.basePadding,
    margin: metrics.baseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "#FFF",
    borderBottomWidth: 0,
    margin: 0,
    padding: 0
  }
});
