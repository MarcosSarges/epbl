import React from 'react'
import { View, StatusBar } from 'react-native'
import Header from './Header';

type Props = {
    children: React.ReactNode,
}

export default (props: Props) =>
    <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#303F9F' />
        {props.children}
    </View>
