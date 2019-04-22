import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  NavigationDrawerScreenOptions
} from "react-navigation";
import React from "react";
import Turmas from "../Screens/Turmas/Turmas";
import { colors, fonts, metrics } from "../Styles";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "./../Components/Header";
import Problemas from "../Screens/Problemas/Problemas";
import Referencias from "../Screens/Referencias/Referencias";
import Objetivos from "../Screens/Objetivos/Objetivos";
import Manual from "../Screens/Manual/Manual";
import DetalhesManual from "../Screens/Manual/DetalhesManual";
import Sobre from "../Screens/Sobre/Sobre";
import CadastrarProblemas from "../Screens/Problemas/CadastrarProblema";

const Router = createDrawerNavigator(
  {
    Turmas: {
      screen: createStackNavigator(
        {
          Turmas: Turmas
        },
        {
          defaultNavigationOptions: { header: null }
        }
      ),
      navigationOptions: {
        drawerIcon: (props: any) => (
          <Icon name="chalkboard-teacher" size={16} color={props.tintColor} />
        )
      }
    },
    Problemas: {
      screen: createStackNavigator(
        {
          Problemas: Problemas,
          'Cadastrar problema': CadastrarProblemas
        },
        {
          defaultNavigationOptions: { header: null }
        }
      ),
      navigationOptions: {
        drawerIcon: (props: any) => (
          <Icon name="puzzle-piece" size={16} color={props.tintColor} />
        )
      }
    },
    Referencias: {
      screen: createStackNavigator(
        {
          Referencias: Referencias
        },
        {
          defaultNavigationOptions: { header: null }
        }
      ),
      navigationOptions: {
        drawerIcon: (props: any) => (
          <Icon name="link" size={16} color={props.tintColor} />
        )
      }
    },
    Objetivos: {
      screen: createStackNavigator(
        {
          Objetivos: Objetivos
        },
        {
          defaultNavigationOptions: { header: null }
        }
      ),
      navigationOptions: {
        drawerIcon: (props: any) => (
          <Icon name="bullseye" size={16} color={props.tintColor} />
        )
      }
    },
    Manual: {
      screen: createStackNavigator(
        {
          Manual: Manual,

          "Manual - Detalhes": DetalhesManual
        },
        {
          defaultNavigationOptions: { header: null }
        }
      ),
      navigationOptions: {
        drawerIcon: (props: any) => (
          <Icon name="book-reader" size={16} color={props.tintColor} />
        )
      }
    },
    "Sobre o E-PBL": {
      screen: createStackNavigator(
        {
          Sobre: Sobre
        },
        {
          defaultNavigationOptions: { header: null }
        }
      ),
      navigationOptions: {
        drawerIcon: (props: any) => (
          <Icon name="question" size={16} color={props.tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "Turmas",
    backBehavior: "initialRoute",
    drawerPosition: "right",
    drawerBackgroundColor: colors.backgroundColor,
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(Router);