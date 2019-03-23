import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import Container from '../../components/Container';
import { NavigationScreenProps } from 'react-navigation';

type Props = {} & NavigationScreenProps

class Inicial extends Component<Props> {
    render() {
        return (
            <Container>
                <TouchableOpacity style={{ ...styles.buttonView, backgroundColor: '#3F51B5' }}
                    onPress={() => this.props.navigation.navigate('Disciplinas')}
                >
                    <Text style={styles.textButton}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.buttonView, backgroundColor: '#D0022D' }}
                    onPress={() => this.props.navigation.navigate('Manual')}
                >
                    <Text style={styles.textButton}>Manual PBL</Text>
                </TouchableOpacity>
            </Container>
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