import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';
import { Card, Input, Icon, Button } from 'react-native-elements';


type Props = {} & NavigationScreenProps

class NovaDisciplina extends Component<Props> {

    render() {
        return (
            <Container>
                <Header titulo='Nova Disciplina' navigation={this.props.navigation} />
                <Card title='Turma'                >
                    <Input
                        placeholder='Identificação da turma...'
                        leftIcon={<Icon name='id-card' type='font-awesome' />}
                    />
                </Card>
                <Card title='Disciplina'>
                    <Input
                        placeholder='Titulo da disciplina...'
                        leftIcon={<Icon name='edit' type='font-awesome' />}
                    />
                </Card>
                <Button
                    containerStyle={{ marginHorizontal: 15, marginTop: 8 }}
                    icon={<Icon name='save' type='font-awesome' color='#fff' />}
                    title=' Salvar disciplina'
                    onPress={() => this.props.navigation.navigate('Problemas', { novoplano: true })}
                />
            </Container>
        );
    }
}

export default NovaDisciplina;