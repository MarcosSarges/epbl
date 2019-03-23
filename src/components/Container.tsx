import React from 'react'
import { View, StatusBar } from 'react-native'

type Props = {
    children: React.ReactNode,
}

export default (props: Props) =>
    <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#4369cc' />
        {props.children}
    </View>
