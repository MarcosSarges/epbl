import React from 'react'
import { View, StatusBar, ViewStyle, TextStyle } from 'react-native'
import { Container, Content } from 'native-base';
import Header from './Header';
import { NavigationScreenProps } from 'react-navigation';

type Props = {
    children: React.ReactNode,
    hidder?: boolean,
    title: string,
    cad?: boolean,
    destino?: string
} & NavigationScreenProps

export default (props: Props) =>
    <View style={{ flex: 1 }}>
        <StatusBar
            backgroundColor='#4369cc'
            hidden={props.hidder ? props.hidder : false}
        />
        <Container style={{ flex: 1 }}>
            <Header
                destino={props.destino}
                cad={props.cad ? true : false}
                titulo={props.title}
                navigation={props.navigation}
            />
            {props.children}
        </Container>
    </View>
