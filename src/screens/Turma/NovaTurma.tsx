import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import { Card, Button, Text, Input, CardItem, Item, Label, View } from 'native-base';
import { Alert } from 'react-native';

type Props = {} & NavigationScreenProps

class NovaTurma extends Component<Props> {

    render() {
        return (
            <Container cad title='Nova Turma' navigation={this.props.navigation} >
                <Text style={{ fontSize: 20, fontFamily: 'arial', fontWeight: 'bold', textAlign: 'center' }}>
                    Turma
                </Text>

                <View style={{ marginHorizontal: 16 }}>
                    <Card >
                        <CardItem bordered>
                            <Item floatingLabel>
                                <Label>Identificação da turma</Label>
                                <Input />
                            </Item>
                        </CardItem>
                        <CardItem bordered>
                            <Item floatingLabel>
                                <Label>Ano</Label>
                                <Input keyboardType='numeric' />
                            </Item>
                        </CardItem>
                        <CardItem bordered>
                            <Item floatingLabel>
                                <Label>Semestre</Label>
                                <Input keyboardType='numeric' />
                            </Item>
                        </CardItem>
                    </Card>
                </View>
                <View
                    style={{ margin: 16, justifyContent: 'space-around', flexDirection: 'row' }}
                >
                    <Button
                        success
                        onPress={() => {
                            Alert.alert('Salvar', 'Você realmente deseja salvar a nova turma?',
                                [
                                    { text: 'Sim', style: 'default', onPress: () => this.props.navigation.navigate('NovoPlanoDeAula') },
                                    { text: 'Não', style: 'cancel', }
                                ]
                            )
                        }}
                    >
                        <Text>Salvar</Text>
                    </Button>
                    <Button
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
                        <Text>Cancelar</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default NovaTurma;