import React, { Component } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalPassos from '../../components/Modal';

type Props = {

} & NavigationScreenProps

class Passos extends Component<Props> {

  state = {
    data: [
      { titulo: 'ab', key: 'a' },
    ],
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
          data.push({ titulo, key: titulo })
          this.setState({ modalVisible: false, data })
        }} />

        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => {
            return <View><Text>{item.titulo}</Text></View>
          }}
        />
        
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