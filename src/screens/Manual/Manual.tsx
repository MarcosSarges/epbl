import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { Input, Icon, Card } from 'react-native-elements';

type Props = {} & NavigationScreenProps

class Manual extends Component<Props> {
    state = {
        data: [
            { titulo: 'a', key: 'a' },
            { titulo: 'b', key: 'b' },
            { titulo: 'c', key: 'c' },
            { titulo: 'd', key: 'd' },
            { titulo: 'e', key: 'e' },
            { titulo: 'f', key: 'f' },
        ],
        dataOrigem: [
            { titulo: 'a', key: 'a' },
            { titulo: 'b', key: 'b' },
            { titulo: 'c', key: 'c' },
            { titulo: 'd', key: 'd' },
            { titulo: 'e', key: 'e' },
            { titulo: 'f', key: 'f' },
        ],
    }

    componentDidMount() {
        console.log(this.context)
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

    render() {
        return (
            <Container>
                <Header titulo='Manual PBL' navigation={this.props.navigation} />
                <View style={{ paddingVertical: 8, paddingHorizontal: 10, flex: 1 }}>
                    <Input
                        placeholder='Pesquise...'
                        leftIcon={<Icon name='search' type='material' color='#000' size={20} />}
                        onChangeText={this.filter}
                    />
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={index}
                            >
                                <Card
                                    title={item.titulo}
                                >
                                </Card>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Container>
        );
    }
}

export default Manual;