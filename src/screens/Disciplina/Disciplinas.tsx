import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import { Button, Icon, Input, Card } from 'react-native-elements'
import Header from '../../components/Header';


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
        return (
            <Container>
                <Header titulo='Disciplinas' navigation={this.props.navigation} />
                <View style={{ flex: 1 }}>
                    <Input
                        placeholder='Filtre as diciplinas'
                        leftIcon={<Icon name='search' type='material' color='#000' size={20} />}
                        onChangeText={this.filter}
                    />
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.data}
                        renderItem={this.renderItemList}
                    />
                    <Button
                        title='Nova disciplina'
                        icon={<Icon name='add' color='#fff' />}
                        onPress={() => this.props.navigation.navigate('Nova Disciplina')}
                    />
                </View>
            </Container>
        );
    }
}

export default Disciplinas;