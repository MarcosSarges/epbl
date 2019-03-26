import React from 'react'
import { FlatList } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import { Card, CardItem, Text } from 'native-base';
import Container from '../../components/Container';
import Conteudo from './Conteudo';

type Props = {} & NavigationScreenProps

interface Item {
    titulo: string, conteudo: string, key: string
}

const Manual = (props: Props) => {
    const renderItem = (item: Item) =>
        <Card key={item.key}>
            <CardItem header bordered button
                onPress={() => props.navigation.navigate('DetalhesManual', item)}
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>{item.titulo}</Text>
            </CardItem>
        </Card >

    return (
        <Container title='Manual do PBL' navigation={props.navigation}>
            <FlatList data={Conteudo} renderItem={({ item }) => renderItem(item)} />
        </Container>
    );

}

export default Manual;