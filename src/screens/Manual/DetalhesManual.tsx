import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import { Card, Body, Text, Title, CardItem } from 'native-base';

type Props = {

} & NavigationScreenProps

type State = {
  titulo: string,
  conteudo: string
}

class DetalhesManual extends Component<Props, State> {

  state = {
    titulo: this.props.navigation.getParam('titulo'),
    conteudo: this.props.navigation.getParam('conteudo'),
  }

  render() {
    return (
      <Container
        title={this.state.titulo}
        navigation={this.props.navigation}
      >
        <Text style={{ fontSize: 20, fontFamily: 'arial', fontWeight: 'bold', textAlign: 'center' }}>
          {this.state.titulo}
        </Text>
        <Card >
          <CardItem>
            <Body>
              <Text>
                {this.state.conteudo}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }

}

export default DetalhesManual;
