import React, { Component } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';
import { Input, Icon, Button, Card } from 'react-native-elements';

type Props = {} & NavigationScreenProps

class NovoProblema extends Component<Props> {
    state = {
        inputLength: 0
    }

    render() {
        return (
            <Container>
                <Header titulo='Novo Problema' navigation={this.props.navigation} />
                <ScrollView>
                    <Input
                        placeholder='Titulo do problema...'
                        leftIcon={<Icon name='sticky-note' type='font-awesome' size={20} />}
                    />
                    <View>
                        <Input
                            maxLength={500}
                            multiline
                            placeholder='Resumo da historia do problema...'
                            leftIcon={<Icon name='paragraph' type='font-awesome' size={20} />}
                            onChangeText={(input: string) => this.setState({ inputLength: input.length })}
                        />
                        <Text style={{ textAlign: 'center' }}>{this.state.inputLength}/500</Text>
                    </View>
                    <Card
                        title='Objetivos'
                    >
                        <FlatList
                            data={[{ title: 'a' }]}
                            renderItem={({ item }) => <Text key={item.title}>{item.title}</Text>}
                        />
                        <Button
                            title=' Adicionar objetivos'
                            icon={<Icon name='bullseye' type='font-awesome' size={20} color='#fff' />}
                            onPress={() => { }}
                        />
                    </Card>

                    <Card
                        title='Referencias'
                    >
                        <FlatList
                            data={[{ title: 'a' }]}
                            renderItem={({ item }) => <Text key={item.title}>{item.title}</Text>}
                        />
                        <Button
                            title='Adicionar referências'
                            icon={<Icon name='check' type='font-awesome' size={20} color='#fff' />}
                            onPress={() => { }}
                        />
                    </Card>
                    <Button
                        containerStyle={{ marginTop: 8 }}
                        title='Salvar problema'
                        icon={<Icon name='save' type='font-awesome' size={20} color='#fff' />}
                        onPress={() => { }}
                    />
                </ScrollView>
            </Container>
        );
    }
}

export default NovoProblema;