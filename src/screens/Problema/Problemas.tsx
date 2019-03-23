import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { Card, Button, Icon, Input } from 'react-native-elements';

type Props = {} & NavigationScreenProps

class Problemas extends Component<Props> {

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

    filter = (input: string) => {
        const { data, dataOrigem } = this.state;

        if (input.length == 0) {
            this.setState({ data: dataOrigem });
        } else {
            this.setState({
                data: data.filter((el) => el.titulo.toLowerCase().includes(input.toLowerCase()) && true)
            })
        }
    }

    renderItemList = ({ item, index }: any) =>
        <TouchableOpacity
            key={index}
        >
            <Card
                title={`Título: ${item.titulo}`}
                containerStyle={{ marginTop: 8 }}
            >
                <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', }}>
                    <Button
                        type='outline'
                        containerStyle={{ width: 50 }}
                        icon={<Icon name='edit' color='#43CB87' />}
                    />
                    <Button
                        type='outline'
                        containerStyle={{ width: 50 }}
                        icon={<Icon name='delete' color='#CB4343' />}
                    />
                </View>
            </Card>
        </TouchableOpacity>

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header titulo='Problemas' navigation={this.props.navigation} />
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Filtre as diciplinas'
                        leftIcon={<Icon name='search' type='material' color='#000' size={20} />}
                        onChangeText={this.filter}
                    />
                    <FlatList
                        style={{ flex: 1, marginBottom: 5 }}
                        data={this.state.data}
                        renderItem={this.renderItemList}
                    />

                    {/* {navigation.getParam('novoplano') ? */}
                    <Button
                        containerStyle={{ marginVertical: 8 }}
                        buttonStyle={{ backgroundColor: '#3FB543' }}
                        title='Criar Plano de Aula'
                        icon={<Icon name='add' color='#fff' />}
                        onPress={() => this.props.navigation.navigate('Novo Plano')}
                    />
                    {/* : false
                     } */}
                    <Button
                        title='Novo problema'
                        icon={<Icon name='add' color='#fff' />}
                        onPress={() => this.props.navigation.navigate('Novo Problema')}
                    />
                </View>
            </Container>
        );
    }
}

export default Problemas;