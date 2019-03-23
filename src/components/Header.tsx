import React from 'react'
import { NavigationScreenProps } from 'react-navigation';
import { Header, Button, Icon } from 'react-native-elements';

type Props = {
    titulo: string
} & NavigationScreenProps


export default (props: Props) =>
    <Header
        leftComponent={<Button
            type='clear'
            icon={<Icon name="menu" type='material' size={30} color="white" />}
            onPress={() => props.navigation.openDrawer()}
        />}
        centerComponent={{ text: props.titulo, style: { color: '#fff', fontSize: 20 } }}
    />