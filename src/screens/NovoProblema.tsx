import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';

type Props = {} & NavigationScreenProps

class NovoProblema extends Component<Props> {

    render() {
        return (
            <Container>
                <Header titulo='Novo Problema' navigation={this.props.navigation} />
                <ScrollView style={{ paddingVertical: 8, paddingHorizontal: 10, flex: 1 }}>
                    <TextInput style={{ elevation: 1, width: '100%', height: 60, paddingLeft: 15 }} placeholder='Titulo do problema...' />
                    <TextInput
                        multiline
                        style={{ elevation: 1, width: '100%', height: 300, paddingLeft: 15, alignItems: 'flex-end', justifyContent: 'flex-start' }} placeholder='Historia do problema...' />
                    <FlatList
                        data={[]}
                        renderItem={({ item }) => <Text>{item.title}</Text>}
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#3F51B5', height: 35, justifyContent: 'center', }}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Adicionar Objetivos</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={[]}
                        renderItem={({ item }) => <Text>{item.title}</Text>}
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#3F51B5', height: 35, justifyContent: 'center', marginTop: 5 }}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Adicionar Referencias</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ backgroundColor: '#3F51B5', height: 35, justifyContent: 'center', marginTop: 5 }}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Salvar Problema</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Container>
        );
    }
}

export default NovoProblema;