import React from 'react'
import { View, StatusBar } from 'react-native'
import { Container, Content } from 'native-base';
import Header from './Header';
import { NavigationScreenProps } from 'react-navigation';

type Props = {
    children: React.ReactNode,
    hidder?: boolean,
    title: string,
} & NavigationScreenProps

export default (props: Props) =>
    <View style={{ flex: 1 }}>
        <StatusBar
            backgroundColor='#4369cc'
            hidden={props.hidder ? props.hidder : false}
        />
        <Container style={{ flex: 1 }}>
            <Header
                titulo={props.title}
                navigation={props.navigation}
            />
            <Content style={{ flex: 1, margin: 16 }}>
                {props.children}
            </Content>
        </Container>
    </View>
