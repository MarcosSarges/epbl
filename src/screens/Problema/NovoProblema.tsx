import React, { Component } from "react";
import { NavigationScreenProps } from "react-navigation";
import Container from "../../components/Container";
import {
  Card,
  Button,
  Text,
  Input,
  CardItem,
  Item,
  Label,
  View,
  Form
} from "native-base";
import { Alert } from "react-native";

type Props = {} & NavigationScreenProps;

class NovoProblema extends Component<Props> {
  render() {
    return (
      <Container
        cad
        title="Novo Problema"
        navigation={this.props.navigation}
        destino="Problemas"
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "arial",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          Problema
        </Text>

        <Form style={{ marginHorizontal: 16 }}>
        <Item floatingLabel>
            <Label>Título</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Descrição do Problema</Label>
            <Input multiline />
          </Item>
        </Form>

        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <Button
            success
            style={{
              marginTop: 16,
              marginHorizontal: 16,
              flex: 1,
              alignItems: "center"
            }}
            onPress={() => {
              Alert.alert(
                "Salvar",
                "Você realmente deseja salvar o novo Problema?",
                [
                  {
                    text: "Sim", style: "default", onPress: () => this.props.navigation.goBack()},
                  { text: "Não", style: "cancel" }
                ]
              );
            }}
          >
            <Text>Salvar</Text>
          </Button>
          <Button
            style={{
              marginTop: 16,
              marginRight: 16,
              flex: 1,
              alignItems: "center"
            }}
            danger
            onPress={() => {
              Alert.alert(
                "Cancelamento",
                "Você realmente deseja cancelar o cadastro do Problema?",
                [
                  { text: "Sim", style: "default", onPress: () => this.props.navigation.goBack(null)},
                  { text: "Não", style: "cancel" }
                ]
              );
            }}
          >
            <Text>Cancelar</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default NovoProblema;
