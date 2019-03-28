import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, StatusBar } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';

type Props = {} & NavigationScreenProps

class Inicial extends Component<Props> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <TouchableOpacity style={{ ...styles.buttonView, backgroundColor: '#3F51B5' }}
                    onPress={() => this.props.navigation.navigate('Turmas')}
                >
                    <Text style={styles.textButton}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.buttonView, backgroundColor: '#D0022D' }}
                    onPress={() => this.props.navigation.navigate('Manual')}
                >
                    <Text style={styles.textButton}>Manual PBL</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
});

export default Inicial;