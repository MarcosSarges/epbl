import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'


class CriarTarefa extends Component {

  render() {
    return (
      <View>
        <FlatList
          data={[{ title: 'aa' }]}
          renderItem={({ item }) => {
            return <View><Text>{item.title}</Text></View>
          }}
        />
        <TextInput
          placeholder='Digite o nome da tarefa'
        />
        <TouchableOpacity style={{ backgroundColor: 'green' }}>
          <Text>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CriarTarefa;