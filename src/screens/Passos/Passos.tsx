import React, { Component } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalPassos from '../../components/ModalPassos';

type Props = {

} & NavigationScreenProps

class Passos extends Component<Props> {

  state = {
    data: [],
    modalVisible: false,
  }

  setModalVisible() {
    this.setState({ modalVisible: false });
  }
  render() {
    return (
      <Container navigation={this.props.navigation} title='Passos' cad destino='NovoPlanoDeAula'>
        <ModalPassos modalVisible={this.state.modalVisible} hiddenModel={(titulo) => {
          const { data } = this.state;
          data.push({ titulo: titulo, key: titulo })
          this.setState({ modalVisible: false, data })
        }} />

        {this.state.data.length > 0 ? <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => {
            return <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 8, marginVertical: 5 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CriarTarefa', { nomePasso: `${item.titulo}` })}
              >
                <Text>{item.titulo}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { }}
                style={{ backgroundColor: 'red', padding: 10 }}
              >
                <Text style={{ color: '#FFF' }}>Deletar</Text>
              </TouchableOpacity>
            </View>
          }}
        /> : <Text style={{ flex: 1 }}>Você não possui nenhum passo</Text>}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.setState({ modalVisible: true })}
          style={{ backgroundColor: 'green', padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name='plus' color='#FFF' />
          <Text style={{ color: '#fff', marginLeft: 10 }}>Adicionar novo passo</Text>
        </TouchableOpacity>

      </Container>
    );
  }

}

export default Passos;