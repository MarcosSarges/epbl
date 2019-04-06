import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import { Card, Button, Text, Input, CardItem, Item, Label, View, Picker, Icon, Body, Form } from 'native-base';
import { Alert, FlatList, ScrollView } from 'react-native';


type Props = {} & NavigationScreenProps

class NovoPlanoDeAula extends Component<Props> {


  state = {
    selected2: undefined
  };


  onValueChange2 = (value: string) => {
    this.setState({
      selected2: value
    });
  }


  render() {
    return (
      <Container cad title='Novo Plano de Aula' navigation={this.props.navigation} destino='NovaTurma' >
        <ScrollView>
          <Form style={{ paddingHorizontal: 16 }}>
            <Item floatingLabel>
              <Label>Titulo</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Duração (Horas)</Label>
              <Input keyboardType='numeric' />
            </Item>

            {/* Problemas */}
            <Item style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginVertical: 20, fontSize: 18, color: 'blue', fontWeight: 'bold' }}>Problemas</Text>
            </Item>
            {
              this.state.selected2 ?
                <Item>
                  <Text>{this.state.selected2}</Text>
                  <Button danger>
                    <Text>Deletar</Text>
                  </Button>
                </Item>
                : false
            }

            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Selecione um problema"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2}
            >
              <Picker.Item label="Selecione um problema" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>

            <Item style={{ justifyContent: 'center' }}>
              <Button style={{ margin: 8 }}>
                <Text style={{ fontSize: 12 }}>Criar novo problema</Text>
              </Button>
            </Item>
            {/* Fim Problemas */}

            {/* Objetivos */}
            <Item style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginVertical: 20, fontSize: 18, color: 'blue', fontWeight: 'bold' }}>Objetivos</Text>
            </Item>
            {
              this.state.selected2 ?
                <Item>
                  <Text>{this.state.selected2}</Text>
                  <Button danger>
                    <Text>Deletar</Text>
                  </Button>
                </Item>
                : false
            }

            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Selecione um Objetivo"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2}
            >
              <Picker.Item label="Selecione um problema" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>

            <Item style={{ justifyContent: 'center' }}>
              <Button style={{ margin: 8 }}>
                <Text style={{ fontSize: 12 }}>Criar novo objetivo</Text>
              </Button>
            </Item>
            {/* Fim objetivo */}

            {/* Referencial */}
            <Item style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ marginVertical: 20, fontSize: 18, color: 'blue', fontWeight: 'bold' }}>Referencial</Text>
            </Item>
            {
              this.state.selected2 ?
                <Item>
                  <Text>{this.state.selected2}</Text>
                  <Button danger>
                    <Text>Deletar</Text>
                  </Button>
                </Item>
                : false
            }

            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Selecione um Objetivo"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2}
            >
              <Picker.Item label="Selecione um problema" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>

            <Item style={{ justifyContent: 'center' }}>
              <Button style={{ margin: 8 }}>
                <Text style={{ fontSize: 12 }}>Criar novo objetivo</Text>
              </Button>
            </Item>

          </Form>

          <View
            style={{ margin: 16, justifyContent: 'space-around', flexDirection: 'row' }}
          >
            <Button
              success
              onPress={() => {
                Alert.alert('Salvar', 'Você realmente deseja salvar esse plano de aula?',
                  [
                    { text: 'Sim', style: 'default', onPress: () => { this.props.navigation.navigate('Passos') } },
                    { text: 'Não', style: 'cancel', }
                  ]
                )
              }}
            >
              <Text>Salvar</Text>
            </Button>
            <Button
              danger
              onPress={() => {
                Alert.alert('Cancelamento', 'Você realmente deseja cancelar o cadastro do plano de aula?',
                  [
                    {
                      text: 'Sim', style: 'default', onPress: () => {
                        console.log(this.props.navigation)
                        this.props.navigation.dismiss()
                      }
                    },
                    { text: 'Não', style: 'cancel', }
                  ]
                )
              }}
            >
              <Text>Cancelar</Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default NovoPlanoDeAula;