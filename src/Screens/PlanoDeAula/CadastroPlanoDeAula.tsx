import React, { Component } from "react";

import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Picker,
  Button,
  Alert
} from "react-native";
import { colors, metrics, fonts } from "../../Styles";
import Header from "../../Components/Header";
import { NavigationScreenProps, ScrollView } from "react-navigation";
import Title from "../../Components/Title";
import { Context } from "../../Provider/GlobalState";
import { FlatList } from "react-native-gesture-handler";
import CardFlatListPlano from "../../Components/CardFlatListPlano";
import ButtonCustom from "./../../Components/Button";

type Props = {} & NavigationScreenProps;
export default class CadastroPlanoDeAula extends Component<Props> {
  state = {
    problemasSelecionados: [],
    objetivosSelecionados: [],
    referenciaisSelecionados: []
  };

  componentDidMount() {
    this.context.listarProblemas();
    this.context.listarObjetivos();
    this.context.listarReferencias();
  }

  selectProblema = (problema: any) => {
    const { problemasSelecionados } = this.state;
    //@ts-ignore
    problemasSelecionados.push(problema);
    this.setState({
      problemasSelecionados
    });
  };

  renderPickerItemProblema = () => {
    const itemsPickers = [];
    itemsPickers.push(
      <Picker.Item key={-1} label="Selecione um problema" value={0} />
    );
    this.context.listaProblema.forEach((el: any) =>
      itemsPickers.push(
        <Picker.Item key={el.problema_id} label={el.titulo} value={el} />
      )
    );
    return itemsPickers;
  };

  deletarItemProblema = (item: any, index: number) => {
    const { problemasSelecionados } = this.state;
    let novaSelecao: any = [];
    problemasSelecionados.forEach((el: any, i: number) => {
      if (index === i) {
        console.log("remove", item);
      } else {
        console.log(item);
        return novaSelecao.push(el);
      }
    });
    this.setState({ problemasSelecionados: novaSelecao });
  };

  selectReferencial = (referencial: any) => {
    const { referenciaisSelecionados } = this.state;
    //@ts-ignore
    referenciaisSelecionados.push(referencial);
    this.setState({
      referenciaisSelecionados
    });
  };

  renderPickerItemReferencial = () => {
    const itemsPickers = [];
    itemsPickers.push(
      <Picker.Item key={-1} label="Selecione uma referencia" value={0} />
    );
    this.context.listaReferencias.forEach((el: any) =>
      itemsPickers.push(
        <Picker.Item key={el.referencia_id} label={el.titulo} value={el} />
      )
    );
    return itemsPickers;
  };

  deletarItemReferencial = (item: any, index: number) => {
    const { referenciaisSelecionados } = this.state;
    let novaSelecao: any = [];
    referenciaisSelecionados.forEach((el: any, i: number) => {
      if (index === i) {
        console.log("remove", item);
      } else {
        console.log(item);
        return novaSelecao.push(el);
      }
    });
    this.setState({ referenciaisSelecionados: novaSelecao });
  };

  selectObjetivo = (objetivo: any) => {
    const { objetivosSelecionados } = this.state;
    //@ts-ignore
    objetivosSelecionados.push(objetivo);
    this.setState({
      objetivosSelecionados
    });
  };

  renderPickerItemObjetivo = () => {
    const itemsPickers = [];
    itemsPickers.push(
      <Picker.Item key={-1} label="Selecione um objetivo" value={0} />
    );
    this.context.listaObjetivos.forEach((el: any) =>
      itemsPickers.push(
        <Picker.Item key={el.objetivo_id} label={el.titulo} value={el} />
      )
    );
    return itemsPickers;
  };

  deletarItemObjetivo = (item: any, index: number) => {
    const { objetivosSelecionados } = this.state;
    let novaSelecao: any = [];
    objetivosSelecionados.forEach((el: any, i: number) => {
      if (index === i) {
        console.log("remove", item);
      } else {
        console.log(item);
        return novaSelecao.push(el);
      }
    });
    this.setState({ objetivosSelecionados: novaSelecao });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.primaryDarkColor}
        />
        <Header navigation={this.props.navigation} back />
        <ScrollView contentContainerStyle={styles.container}>
          <Title
            title="Selecione os detalhes do plano de aula"
            custom={{ fontSize: fonts.regular }}
          />
          <View style={styles.viewCard}>
            {this.state.problemasSelecionados.length > 0 ? (
              <FlatList
                keyExtractor={(item, index) => `${item.problema_id}${index}`}
                data={this.state.problemasSelecionados}
                renderItem={({ item, index }) => (
                  <CardFlatListPlano
                    item={item}
                    deletar={() => this.deletarItemProblema(item, index)}
                  />
                )}
              />
            ) : (
              false
            )}
            <View style={styles.viewPiker}>
              <Picker
                onValueChange={(value, index) => {
                  if (value != 0) {
                    this.selectProblema(value);
                  }
                }}
              >
                {this.renderPickerItemProblema()}
              </Picker>
            </View>
            <Button
              title="+  Criar problema"
              color={colors.success}
              onPress={() => {
                this.props.navigation.navigate("Plano - Cadastrar problema", {
                  editar: false
                });
              }}
            />
          </View>
          <View style={styles.viewCard}>
            {this.state.referenciaisSelecionados.length > 0 ? (
              <FlatList
                keyExtractor={(item, index) => `${item.referencia_id}${index}`}
                data={this.state.referenciaisSelecionados}
                renderItem={({ item, index }) => (
                  <CardFlatListPlano
                    item={item}
                    deletar={() => this.deletarItemReferencial(item, index)}
                  />
                )}
              />
            ) : (
              false
            )}
            <View style={styles.viewPiker}>
              <Picker
                onValueChange={(value, index) => {
                  if (value != 0) {
                    this.selectReferencial(value);
                  }
                }}
              >
                {this.renderPickerItemReferencial()}
              </Picker>
            </View>
            <Button
              title="+  Criar referencia"
              color={colors.success}
              onPress={() => {
                this.props.navigation.navigate("Plano - Cadastrar referencia", {
                  editar: false
                });
              }}
            />
          </View>
          <View style={styles.viewCard}>
            {this.state.objetivosSelecionados.length > 0 ? (
              <FlatList
                keyExtractor={(item, index) => `${item.objetivo_id}${index}`}
                data={this.state.objetivosSelecionados}
                renderItem={({ item, index }) => (
                  <CardFlatListPlano
                    item={item}
                    deletar={() => this.deletarItemObjetivo(item, index)}
                  />
                )}
              />
            ) : (
              false
            )}
            <View style={styles.viewPiker}>
              <Picker
                onValueChange={(value, index) => {
                  if (value != 0) {
                    this.selectObjetivo(value);
                  }
                }}
              >
                {this.renderPickerItemObjetivo()}
              </Picker>
            </View>
            <Button
              title="+  Criar objetivo"
              color={colors.success}
              onPress={() => {
                this.props.navigation.navigate("Plano - Cadastrar objetivo", {
                  editar: false
                });
              }}
            />
          </View>
        </ScrollView>

        <View style={styles.viewButton}>
          <ButtonCustom
            type="danger"
            typeIcon="times"
            title="Cancelar"
            onPress={() => {
              Alert.alert("Ops!", "Você quer realmente sair?", [
                {
                  text: "Sim",
                  onPress: () => {
                    this.props.navigation.pop(2);
                  }
                },
                { text: "Não" }
              ]);
            }}
          />
          <ButtonCustom
            type="success"
            typeIcon="next"
            title={"Avançar"}
            onPress={() => {
              if (
                this.state.objetivosSelecionados.length > 0 &&
                this.state.problemasSelecionados.length > 0 &&
                this.state.referenciaisSelecionados.length > 0
              ) {
                Alert.alert("Confirmação", "Deseja avançar?", [
                  {
                    text: "Sim",
                    onPress: () => {
                      this.props.navigation.navigate("Tutoria", {
                        //@ts-ignore
                        turma: this.props.navigation.state.params.turma,
                        problemas: this.state.problemasSelecionados,
                        objetivos: this.state.objetivosSelecionados,
                        referencias: this.state.referenciaisSelecionados
                      });
                    }
                  },
                  {
                    text: "Não"
                  }
                ]);
              } else {
                Alert.alert(
                  "Ops!",
                  "Você deve selecionar pelo menos um de cada"
                );
              }
            }}
          />
        </View>
      </View>
    );
  }
}

CadastroPlanoDeAula.contextType = Context;

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundColor
    //flex: 1
  },
  viewPiker: {
    marginVertical: metrics.baseMargin,
    borderColor: colors.border,
    borderWidth: 2
  },
  viewButton: {
    padding: metrics.basePadding,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewCard: {
    borderColor: colors.border,
    borderWidth: 1,
    padding: metrics.basePadding,
    maxHeight: 300,
    marginTop: metrics.baseMargin
  }
});
