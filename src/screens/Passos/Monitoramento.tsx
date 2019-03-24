import React, { Component } from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { NavigationScreenProps } from 'react-navigation';
import { Text } from 'react-native';
import TabNavigation from '../../components/TabNavigation';

type Props = {} & NavigationScreenProps;

class Monitoramento extends Component<Props> {

  render() {
    return (
      <Container>
        <Header titulo='Selecionar Passos' navigation={this.props.navigation} />
        <Text>Monitoramento</Text>
        <TabNavigation mo navigation={this.props.navigation} />
      </Container>
    )
  }
}
export default Monitoramento;