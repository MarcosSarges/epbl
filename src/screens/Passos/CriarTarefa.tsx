import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Container from '../../components/Container';
import { NavigationScreenProps } from 'react-navigation';

type Props = {

} & NavigationScreenProps

class CriarTarefa extends Component<Props> {

  state = {
    data: [],
    inputTarefa: ''
  }

  pushList = (text: string) => {
    const data = this.state.data;
    const item: { conteudo: string } = { conteudo: text }
    data.push(item);
    this.setState({ data })
  }

  render() {
    return (
      <Container navigation={this.props.navigation} title='Tarefas' cad destino='Passos'>
        <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center' }}>{`Tarefas do ${this.props.navigation.getParam('nomePasso')}`}</Text>
        {
          this.state.data.length > 0 ? <FlatList
            contentContainerStyle={{ paddingTop: 8 }}
            data={this.state.data}
            renderItem={({ item }) => {
              return <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 8, marginVertical:5 }}>
                <Text>{item.conteudo}</Text>
                <TouchableOpacity
                  onPress={() => { }}
                  style={{ backgroundColor: 'red', padding: 10 }}
                >
                  <Text style={{ color: '#FFF' }}>Deletar</Text>
                </TouchableOpacity>
              </View>
            }}
          /> :
            <Text style={{ flex: 1 }}>Você não possui nenhuma tarefa</Text>
        }

        <View style={{ margin: 8 }}>
          <View style={{ marginBottom: 8 }}>
            <TextInput
              onChangeText={(text) => {
                this.setState({ inputTarefa: text });
              }}
              style={{ borderBottomWidth: 1 }}
              placeholder='Digite o nome da tarefa'
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.state.inputTarefa.length > 0 ? this.pushList(this.state.inputTarefa) : Alert.alert('Erro', 'É preciso digitar algo')
            }}
            style={{ backgroundColor: 'green', padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
          >

            <Icon name='plus' color='#FFF' />
            <Text style={{ color: '#fff' }}> Adicionar Tarefa</Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}

export default CriarTarefa;