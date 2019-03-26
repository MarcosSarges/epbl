import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { Card, CardItem, Text, Body } from 'native-base';
import { Input, Icon } from 'react-native-elements'
import Conteudo from './Conteudo';

type Props = {} & NavigationScreenProps

class Manual extends Component<Props> {

    state = {
        data: Conteudo,
        dataOrigem: Conteudo
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

    renderItem = (item: { titulo: string, conteudo: string, key: string }) =>
        <Card key={item.key}>
            <CardItem
                header
                bordered
                button
                onPress={() => this.props.navigation.navigate('DetalhesManual', item)}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.titulo}</Text>
            </CardItem>
        </Card >

    render() {
        return (
            <Container title='Manual do PBL' navigation={this.props.navigation}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </Container>
        );
    }
}

export default Manual;