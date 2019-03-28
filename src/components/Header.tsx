import React from 'react'
import { NavigationScreenProps } from 'react-navigation';
import { Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base';

type Props = {
    titulo: string,
    cad: boolean
} & NavigationScreenProps


export default (props: Props) =>
    <Header>
        <Left>
            {props.cad ?
                <Button
                    transparent
                    icon={true}
                    onPress={() => props.navigation.goBack()}
                >
                    <Icon name='arrow-left' type='FontAwesome5' color='#fff' />
                </Button> :

                <Button
                    transparent
                    icon={true}
                    onPress={() => props.navigation.openDrawer()}>
                    <Icon name='menu' color='#fff' />
                </Button>
            }
        </Left>
        <Body>
            <Title style={{ fontSize: 16 }}>
                {props.titulo}
            </Title>
        </Body>
        <Right>
            <Button icon transparent>
                <Icon name='ellipsis-v' type='FontAwesome5' color='#fff' />
            </Button>
        </Right>
    </Header>