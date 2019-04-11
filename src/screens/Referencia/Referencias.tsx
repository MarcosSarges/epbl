import React, { Component } from "react";
import { FlatList, View } from "react-native";
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

type Props = {} & NavigationScreenProps;

class Referencias extends Component<Props> {
  state = {
    data: [
      { titulo: "ab", key: "a" },
      { titulo: "bcd", key: "b" },
      { titulo: "c", key: "c" },
      { titulo: "d", key: "d" },
      { titulo: "e", key: "e" },
      { titulo: "f", key: "f" },
      { titulo: "g", key: "g" },
      { titulo: "h", key: "h" },
      { titulo: "i", key: "i" },
      { titulo: "j", key: "j" },
      { titulo: "k", key: "k" },
      { titulo: "l", key: "l" },
      { titulo: "m", key: "m" }
    ],
    dataOrigem: [
      { titulo: "ab", key: "a" },
      { titulo: "bcd", key: "b" },
      { titulo: "c", key: "c" },
      { titulo: "d", key: "d" },
      { titulo: "e", key: "e" },
      { titulo: "f", key: "f" },
      { titulo: "g", key: "g" },
      { titulo: "h", key: "h" },
      { titulo: "i", key: "i" },
      { titulo: "j", key: "j" },
      { titulo: "k", key: "k" },
      { titulo: "l", key: "l" },
      { titulo: "m", key: "m" }
    ]
  };

  filter = (input: string) => {
    const { data, dataOrigem } = this.state;

    if (input.length == 0) {
      this.setState({ data: dataOrigem });
    } else {
      this.setState({
        data: data.filter(
          el => el.titulo.toLowerCase().includes(input.toLowerCase()) && true
        )
      });
    }
  };

  renderItemList = ({ item, index }: any) => (
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

  render() {
    return (
      <Container title="Referencias" navigation={this.props.navigation}>
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
          onPress={() => this.props.navigation.navigate("NovaReferencias")}
        >
          <Icon name="add" type="MaterialIcons" fontSize={40} />
          <Text>Nova Referencia</Text>
        </Button>
      </Container>
    );
  }
}

export default Referencias;
