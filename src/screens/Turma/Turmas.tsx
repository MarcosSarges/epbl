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

type Props = {} & NavigationScreenProps;

class Turmas extends Component<Props> {
  state = {
    data: [],
    dataOrigem: []
  };

  async componentDidMount() {
    // sqlTurma.salvarTurma("aaaa", "1", "2");
    await sqlTurma.listarTodasAsTurmas().then(res => {
      console.log(res);
      this.setState({ data: res, dataOrigem: res }, () =>
        console.log(this.state.data)
      );
    });
  }

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

  renderItemList = ({ item, index }: any) => {
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
    return (
      <Container title="Turmas" navigation={this.props.navigation}>
        {this.state.data.length > 0 ? (
          <View>
            <View style={{ marginTop: 10, marginHorizontal: 16 }}>
              <Item floatingLabel>
                <Label>Filtrar...</Label>
                <Input onChangeText={this.filter} />
              </Item>
            </View>
            <FlatList
              style={{ flex: 1, margin: 16 }}
              data={this.state.data}
              renderItem={this.renderItemList}
            />
            <Button
              full
              icon
              style={{ marginHorizontal: 16, marginBottom: 16 }}
              onPress={() => this.props.navigation.navigate("NovaTurma")}
            >
              <Icon name="add" type="MaterialIcons" fontSize={40} />
              <Text>Nova Turma</Text>
            </Button>
          </View>
        ) : (
          <ActivityIndicator size="large" style={{ alignSelf: "center" }} />
        )}
      </Container>
    );
  }
}

export default Turmas;
