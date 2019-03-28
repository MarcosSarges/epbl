import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation';
import Container from '../../components/Container';
import { Card, Button, Text, Input, CardItem, Item, Label, View, Picker, Icon, Body } from 'native-base';
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
      <Container cad title='Novo Plano de Aula' navigation={this.props.navigation} >
        <ScrollView>
          <View style={{ marginHorizontal: 16 }}>
            <Card >
              <CardItem bordered>
                <Item floatingLabel>
                  <Label>Titulo</Label>
                  <Input />
                </Item>
              </CardItem>
              <CardItem bordered>
                <Item floatingLabel>
                  <Label>Duração (Horas)</Label>
                  <Input keyboardType='numeric' />
                </Item>
              </CardItem>

              {/* Problemas */}
              <CardItem header bordered>
                <Text>Problemas</Text>
              </CardItem>
              {
                this.state.selected2 ?
                  <CardItem style={{ justifyContent: 'space-between' }}>
                    <Text>{this.state.selected2}</Text>
                    <Button danger>
                      <Text>Deletar</Text>
                    </Button>
                  </CardItem>
                  : false
              }
              <CardItem bordered>
                <Item picker >
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
                </Item>
              </CardItem>
              <CardItem style={{ justifyContent: 'space-around' }}>
                <Button >
                  <Text style={{ fontSize: 12 }}>Add+1 Problema</Text>
                </Button>
                <Button >
                  <Text style={{ fontSize: 12 }}>Criar Problema</Text>
                </Button>
              </CardItem>
              {/* Fim Problemas */}


              {/* Objetivos */}
              <CardItem header bordered>
                <Text>Objetivos</Text>
              </CardItem>
              {
                this.state.selected2 ?
                  <CardItem style={{ justifyContent: 'space-between' }}>
                    <Text>{this.state.selected2}</Text>
                    <Button danger>
                      <Text>Deletar</Text>
                    </Button>
                  </CardItem>
                  : false
              }
              <CardItem bordered>
                <Item picker >
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
                </Item>
              </CardItem>
              <CardItem style={{ justifyContent: 'space-around' }}>
                <Button >
                  <Text style={{ fontSize: 12 }}>Add+1 Objetivo</Text>
                </Button>
                <Button >
                  <Text style={{ fontSize: 12 }}>Criar Objetivo</Text>
                </Button>
              </CardItem>
              {/* Fim objetivo */}

              {/* Referencial */}

              <CardItem header bordered>
                <Text>Referencial</Text>
              </CardItem>
              {
                this.state.selected2 ?
                  <CardItem style={{ justifyContent: 'space-between' }}>
                    <Text>{this.state.selected2}</Text>
                    <Button danger>
                      <Text>Deletar</Text>
                    </Button>
                  </CardItem>
                  : false
              }
              <CardItem bordered>
                <Item picker >
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
                </Item>
              </CardItem>
              <CardItem style={{ justifyContent: 'space-around' }}>
                <Button >
                  <Text style={{ fontSize: 12 }}>Add+1 Referencial</Text>
                </Button>
                <Button >
                  <Text style={{ fontSize: 12 }}>Criar Referencial</Text>
                </Button>
              </CardItem>
              {/* Fim referencial */}
            </Card>
          </View>
          <View
            style={{ margin: 16, justifyContent: 'space-around', flexDirection: 'row' }}
          >
            <Button
              success
              onPress={() => {
                Alert.alert('Salvar', 'Você realmente deseja salvar esse plano de aula?',
                  [
                    { text: 'Sim', style: 'default', },
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