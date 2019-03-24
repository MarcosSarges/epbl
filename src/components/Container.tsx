import React from 'react'
import { View, StatusBar } from 'react-native'

interface Props {
    children: React.ReactNode,
    hidder?: boolean
}

export default (props: Props) =>
    <View style={{ flex: 1 }}>
        <StatusBar
            backgroundColor='#4369cc'
            hidden={props.hidder ? props.hidder : false}
        />
        {props.children}
    </View>
