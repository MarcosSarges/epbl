import React, { Component } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import Container from "../../components/Container";
import {
  Button,
  Input,
  Icon,
  Card,
  Text,
  CardItem,
  Item,
  Label
} from "native-base";
import sqlTurma from "../../services/database/TurmaHelper";
import Provider, { Consumer } from "../../services/context/ContextApi";

type Props = {} & NavigationScreenProps;

interface ctx {
  listaTurmas: [];
  listaProblemas: [];
  listaPlanoDeAula: [];
  listaPassos: [];
  listaTarefas: [];
  listaObjetivos: [];
  listaReferencias: [];
}
class Turmas extends Component<Props> {
  state = {
    data: [],
    dataOrigem: []
  };

  async componentDidMount() {
    await this.listarTurmas();
  }
  listarTurmas = () => {
    sqlTurma
      .listarTodasAsTurmas()
      .then(res => this.setState({ data: res, dataOrigem: res }));
  };

  filter = (input: string) => {
    const { data, dataOrigem } = this.state;
    if (input.length == 0) {
      this.setState({ data: dataOrigem });
    } else {
      this.setState({
        data: data.filter(
          //@ts-ignore
          el => el.titulo.toLowerCase().includes(input.toLowerCase()) && true
        )
      });
    }
  };

  renderItemList = ({ item }: any) => {
    console.log(item);
    return (
      <Card>
        <CardItem
          header
          bordered
          button
          onPress={() => this.props.navigation.navigate("")}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>{item.titulo}</Text>
        </CardItem>
      </Card>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <Container title="Turmas" navigation={this.props.navigation}>
        <View style={{ marginTop: 10, marginHorizontal: 16 }}>
          <Item floatingLabel>
            <Label>Filtrar...</Label>
            <Input onChangeText={this.filter} />
          </Item>
        </View>
        <Provider>
          <Consumer>
            {ctx => {
              if (ctx.listaTurmas.length > 0) {
                return (
                  <FlatList
                    style={{ flex: 1, margin: 16 }}
                    data={ctx.listaTurmas}
                    //@ts-ignore
                    keyExtractor={item => `${item.turma_id}`}
                    renderItem={this.renderItemList}
                  />
                );
              } else {
                return false;
              }
            }}
          </Consumer>
        </Provider>

        <Button
          full
          icon
          style={{ marginHorizontal: 16, marginBottom: 16 }}
          onPress={() => this.props.navigation.navigate("NovaTurma")}
        >
          <Icon name="add" type="MaterialIcons" fontSize={40} />
          <Text>Nova Turma</Text>
        </Button>
      </Container>
    );
  }
}

export default Turmas;
