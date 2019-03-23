import React, { Component } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';

const Menu = require('./../assets/img/menu.png');

type Props = {} & NavigationScreenProps

class Manual extends Component<Props> {
    state = {
        data: [
            { titulo: 'a', key: 'a' },
            { titulo: 'b', key: 'b' },
            { titulo: 'c', key: 'c' },
            { titulo: 'd', key: 'd' }
        ]
    }

    render() {
        return (
            <Container>
                <Header titulo='Manual PBL' navigation={this.props.navigation} />
                <View style={{ paddingVertical: 8, paddingHorizontal: 10 }}>
                    <TextInput style={{ elevation: 1, width: '100%', height: 60, paddingLeft: 15 }} placeholder='Filtrar...' />
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <View>
                                <Text>{item.titulo}</Text>
                            </View>
                        )}
                    />
                </View>
            </Container>
        );
    }
}

export default Manual;