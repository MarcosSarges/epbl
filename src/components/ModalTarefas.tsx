import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = { modalVisible: boolean, hiddenModel: (titulo: string) => void }

class ModalTarefas extends Component<Props> {
  state = {
    titulo: ''
  }
  render() {
    return (
      <Modal
        hardwareAccelerated
        presentationStyle='overFullScreen'
        animationType="fade"
        animated
        transparent
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{
            backgroundColor: '#FFF',
            height: Dimensions.get('window').height / 3,
            marginHorizontal: 40,
          }}>
            <Text style={{ marginVertical: 8, fontWeight: 'bold', flex: 1, textAlign: 'center', fontSize: 20 }}>Passo</Text>
            <View style={{ marginHorizontal: 8, flex: 1 }}>
              <TextInput
                placeholder='Titulo do passo'
                style={{ borderBottomWidth: 1 }}
                onChangeText={(text) => this.setState({ titulo: text })}
              />
            </View>
            <TouchableHighlight
              style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}
              onPress={() => this.props.hiddenModel(this.state.titulo)}>
              <Text style={{ color: '#FFF' }}>Salvar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal >
    );
  }
}
export default ModalTarefas;