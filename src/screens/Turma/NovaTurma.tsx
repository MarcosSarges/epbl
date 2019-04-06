import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import { Card, Button, Text, Input, CardItem, Item, Label, View, Form } from 'native-base';
import { Alert } from 'react-native';

type Props = {} & NavigationScreenProps

class NovaTurma extends Component<Props> {

    render() {
        return (
            <Container cad title='Nova Turma' navigation={this.props.navigation} destino='Turmas' >
                <Text style={{ fontSize: 20, fontFamily: 'arial', fontWeight: 'bold', textAlign: 'center' }}>
                    Turma
                </Text>

                <Form style={{ marginHorizontal: 16 }} >
                    <Item floatingLabel>
                        <Label>Identificação da turma</Label>
                        <Input />
                    </Item>

                    <Item floatingLabel>
                        <Label>Ano</Label>
                        <Input keyboardType='numeric' />
                    </Item>

                    <Item floatingLabel>
                        <Label>Semestre</Label>
                        <Input keyboardType='numeric' />
                    </Item>
                </Form>

                <View
                    style={{ justifyContent: 'space-around', flexDirection: 'row' }}
                >
                    <Button
                        success
                        style={{ marginTop: 16, marginHorizontal: 16, flex: 1, alignItems: 'center' }}
                        onPress={() => {
                            Alert.alert('Salvar', 'Você realmente deseja salvar a nova turma?',
                                [
                                    { text: 'Sim', style: 'default', onPress: () => this.props.navigation.navigate('NovoPlanoDeAula') },
                                    { text: 'Não', style: 'cancel', }
                                ]
                            )
                        }}
                    >
                        <Text >Salvar</Text>
                    </Button>
                    <Button
                        style={{ marginTop: 16, marginRight: 16, flex: 1, alignItems: 'center' }}
                        danger
                        onPress={() => {
                            Alert.alert('Cancelamento', 'Você realmente deseja cancelar o cadastro da turma?',
                                [
                                    { text: 'Sim', style: 'default', onPress: () => this.props.navigation.goBack() },
                                    { text: 'Não', style: 'cancel', }
                                ]
                            )
                        }}
                    >
                        <Text >Cancelar</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default NovaTurma;