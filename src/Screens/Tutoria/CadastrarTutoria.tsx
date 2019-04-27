import React, { Component } from "react";

import { View, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { colors, metrics } from "../../Styles";
import Header from "../../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../../Components/Input";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

// import { Container } from './styles';

type Props = {} & NavigationScreenProps;

export default class CadastrarTutoria extends Component<Props> {
  state = {
    addTutoria: ""
  };
  componentDidMount() {
    console.log(this.props.navigation.state.params);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header navigation={this.props.navigation} back />
        <ScrollView style={styles.container} />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: metrics.basePadding
            //justifyContent: "space-around"
          }}
        >
          <Input
            custom={{
              borderWidth: 1,
              borderRadius: 30,
              paddingLeft: metrics.basePadding
            }}
            onSubmitEditing={e => {
              console.log(this.state.addTutoria);
              this.setState({ addTutoria: "" });
            }}
            value={this.state.addTutoria}
            placeholder="Adicionar tutoria rapidamente"
            onChangeText={text => this.setState({ addTutoria: text })}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor
    //flex: 1
  }
});
