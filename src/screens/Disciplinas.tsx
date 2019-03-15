import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';

const Menu = require('./../assets/img/menu.png');

type Props = {} & NavigationScreenProps

class Disciplinas extends Component<Props> {

    state = {
        data: [
            { titulo: 'ab', key: 'a' },
            { titulo: 'bcd', key: 'b' },
            { titulo: 'c', key: 'c' },
            { titulo: 'd', key: 'd' },
            { titulo: 'e', key: 'e' },
            { titulo: 'f', key: 'f' },
            { titulo: 'g', key: 'g' },
            { titulo: 'h', key: 'h' },
            { titulo: 'i', key: 'i' },
            { titulo: 'j', key: 'j' },
            { titulo: 'k', key: 'k' },
            { titulo: 'l', key: 'l' },
            { titulo: 'm', key: 'm' },
        ],
        dataOrigem: [
            { titulo: 'ab', key: 'a' },
            { titulo: 'bcd', key: 'b' },
            { titulo: 'c', key: 'c' },
            { titulo: 'd', key: 'd' },
            { titulo: 'e', key: 'e' },
            { titulo: 'f', key: 'f' },
            { titulo: 'g', key: 'g' },
            { titulo: 'h', key: 'h' },
            { titulo: 'i', key: 'i' },
            { titulo: 'j', key: 'j' },
            { titulo: 'k', key: 'k' },
            { titulo: 'l', key: 'l' },
            { titulo: 'm', key: 'm' },
        ]
    }

    render() {
        return (
            <Container>
                <Header titulo='Disciplinas' navigation={this.props.navigation} />
                <View style={{ paddingVertical: 8, paddingHorizontal: 10, flex: 1 }}>
                    <TextInput
                        style={{ elevation: 1, width: '100%', height: 60, paddingLeft: 15 }}
                        placeholder='Filtrar...'
                        onChangeText={(input) => {
                            if (input.length == 0) {
                                this.setState({ data: this.state.dataOrigem });
                            } else {
                                this.setState({
                                    data: this.state.data.filter(({ titulo }) => {
                                        if (titulo.includes(input)) {
                                            return true
                                        } else {
                                            return false
                                        }
                                    })
                                })
                            }
                        }}

                    />
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ margin: 4, height: 50, elevation: 1, borderWidth: 1, borderColor: 'rgba(0,0,0,0)' }}>
                                <Text>{item.titulo}</Text>
                                <TouchableOpacity>
                                    <Text>Aqui via o icone para selecionar</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#3F51B5', height: 35, justifyContent: 'center', }}
                        onPress={() => this.props.navigation.navigate('Nova Disciplina')}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Nova disciplina</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default Disciplinas;