import React from 'react'
import { NavigationScreenProps } from 'react-navigation';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

type Props = {
    titulo: string
} & NavigationScreenProps


export default (props: Props) =>
    <Header>
        <Left>
            <Button
                transparent
                icon={true}
                onPress={() => props.navigation.openDrawer()}
            >
                <Icon name='menu' color='#fff' />
            </Button>
        </Left>
        <Body>
            <Title >
                {props.titulo}
            </Title>
        </Body>
        <Right />
    </Header>