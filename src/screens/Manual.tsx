import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../components/Container';
import Header from '../components/Header';

const Menu = require('./../assets/img/menu.png');

type Props = {} & NavigationScreenProps

class Manual extends Component<Props> {

    state = {
        bordas: {
            borderBottomColor: '#000',
            borderBottomWidth: 1
        }
    }

    render() {
        return (
            <Container>
                <Header titulo='Manual PBL' navigation={this.props.navigation} />
                <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
                    <TextInput
                        style={{ ...this.state.bordas }}
                        onFocus={() => {
                            this.setState({
                                bordas: {
                                    borderBottomColor: 'red',
                                    borderBottomWidth: 1
                                }
                            })
                        }}
                        onBlur={() => {
                            this.setState({
                                bordas: {
                                    borderBottomColor: '#000',
                                    borderBottomWidth: 1
                                }
                            })
                        }}
                    />
                    <TextInput
                      
                    />
                </View>
            </Container>
        );
    }
}

export default Manual;