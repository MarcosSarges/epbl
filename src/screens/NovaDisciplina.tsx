import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';

const Menu = require('./../assets/img/menu.png');

type Props = {} & NavigationScreenProps

class NovaDisciplina extends Component<Props> {

    render() {
        return (
            <Container>
                <Header titulo='Nova Disciplina' navigation={this.props.navigation} />
                <View style={{ paddingVertical: 8, paddingHorizontal: 10, flex: 1 }}>
                    <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, textAlign: 'center' }}>Disciplina</Text>
                    <TextInput style={{ elevation: 1, width: '100%', height: 60, paddingLeft: 15 }} placeholder='Nome da disciplina...' />
                    <Text style={{ color: "#000", fontWeight: "bold", fontSize: 16, textAlign: 'center' }}>Turma</Text>
                    <TextInput style={{ elevation: 1, width: '100%', height: 60, paddingLeft: 15 }} placeholder='Nome da Turma...' />

                    <TouchableOpacity
                        style={{ backgroundColor: '#3F51B5', height: 35, justifyContent: 'center', }}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar disciplina</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default NovaDisciplina;