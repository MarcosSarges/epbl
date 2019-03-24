import React, { Component } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { NavigationScreenProps } from 'react-navigation';
import { Text } from 'react-native-elements';
import TabNavigation from '../../components/TabNavigation';

type Props = {} & NavigationScreenProps;

export default class Execucao extends Component<Props> {

  render() {
    return (
      <Container>
        <Header titulo='Selecionar Passos' navigation={this.props.navigation} />
        <Text>Execucao</Text>
        <TabNavigation ex navigation={this.props.navigation} />
      </Container >
    );
  }
}