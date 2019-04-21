import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

type Props = { modalVisible: boolean; hiddenModel: (titulo: string) => void };

class ModalPassos extends Component<Props> {
  state = {
    titulo: "",
    descricao: ""
  };
  render() {
    return (
      <Modal
        hardwareAccelerated
        presentationStyle="overFullScreen"
        animationType="fade"
        animated
        transparent
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Vai sair?", "woowo", [
            {
              onPress: () => this.props.hiddenModel(this.state.titulo),
              text: "Fechar"
            }
          ]);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            position: "relative"
          }}
        >
          <View
            style={{ position: "absolute", left: 270, top: 150, zIndex: 10 }}
          >
            <TouchableHighlight
              underlayColor="red"
              onPress={() => this.props.hiddenModel(this.state.titulo)}
            >
              <Icon name="times-circle" size={30} color="red" />
            </TouchableHighlight>
          </View>
          <View
            style={{
              backgroundColor: "#FFF",
              height: Dimensions.get("window").height / 2,
              marginHorizontal: 40
            }}
          >
            <Text
              style={{
                marginVertical: 8,
                fontWeight: "bold",
                flex: 1,
                textAlign: "center",
                fontSize: 20
              }}
            >
              Passo
            </Text>
            <View style={{ marginHorizontal: 8, flex: 1 }}>
              <TextInput
                placeholder="Titulo do passo"
                style={{ borderBottomWidth: 1 }}
                onChangeText={text => this.setState({ titulo: text })}
              />
            </View>
            <View style={{ marginHorizontal: 8, flex: 1 }}>
              <TextInput
                multiline
                placeholder="descriçao"
                style={{ borderBottomWidth: 1 }}
                onChangeText={text => this.setState({ descricao: text })}
              />
            </View>
            <TouchableHighlight
              style={{
                backgroundColor: "green",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                margin: 8
              }}
              onPress={() => this.props.hiddenModel(this.state.titulo)}
            >
              <Text style={{ color: "#FFF" }}>Salvar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
export default ModalPassos;
