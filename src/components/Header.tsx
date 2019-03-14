import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';

const Menu = require('./../assets/img/menu.png');

type Props = {
    titulo: string
} & NavigationScreenProps

export default (props: Props) =>
    <View style={{ height: 50, backgroundColor: "#3F51B5" }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ flex: 1 }}
                onPress={() => props.navigation.openDrawer()}
            >
                <Image source={Menu} style={{ height: '80%', width: 30, marginLeft: 8 }} />
            </TouchableOpacity>
            <Text style={{ flex: 1, color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>{props.titulo}</Text>
            <View style={{ flex: 1, }}></View>
        </View>
    </View>
