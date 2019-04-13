import React from "react";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import Turmas from "./screens/Turma/Turmas";
import NovaTurma from "./screens/Turma/NovaTurma";

import Manual from "./screens/Manual/Manual";
import DetalhesManual from "./screens/Manual/DetalhesManual";
import NovoPlanoDeAula from "./screens/PlanoDeAula/NovoPlanoDeAula";
import Passos from "./screens/Passos/Passos";
import CriarTarefa from "./screens/Passos/CriarTarefa";
import Objetivos from "./screens/Objetivo/Objetivos";
import Referencias from "./screens/Referencia/Referencias";

const Drawer = createDrawerNavigator(
  {
    // Inicial: {
    //     screen: Inicial
    // },
    Turmas: {
      screen: createSwitchNavigator(
        {
          Turmas: {
            screen: Turmas,
            navigationOptions: {
              header: null
            }
          },
          NovaTurma: {
            screen: NovaTurma,
            navigationOptions: {
              header: null
            }
          },
          NovoPlanoDeAula: {
            screen: NovoPlanoDeAula,
            navigationOptions: {
              header: null
            }
          },
          Passos: {
            screen: Passos,
            navigationOptions: {
              header: null
            }
          },
          CriarTarefa: {
            screen: CriarTarefa,
            navigationOptions: {
              header: null
            }
          }
        },
        {
          initialRouteName: "Passos",
          resetOnBlur: true,
          backBehavior: "initialRoute"
        }
      )
    },
    // Referencias: {
    //   screen: createStackNavigator(
    //     {
    //       Referncias: {
    //         screen: Referencias
    //       }
    //     },
    //     {
    //       initialRouteName: "Referencias",
    //       defaultNavigationOptions: {
    //         header: null
    //       }
    //     }
    //   )
    // },
    // Objetivos: {
    //   screen: createStackNavigator(
    //     {
    //       Objetivos: {
    //         screen: Objetivos
    //       }
    //     },
    //     {
    //       initialRouteName: "Objetivos",
    //       defaultNavigationOptions: {
    //         header: null
    //       }
    //     }
    //   )
    // },
    Manual: {
      screen: createStackNavigator(
        {
          Manual: {
            screen: Manual
          },
          DetalhesManual: {
            screen: DetalhesManual
          }
        },
        {
          initialRouteName: "Manual",
          defaultNavigationOptions: {
            header: null
          }
        }
      )
    }

    //     Problemas: {
    //         screen: createStackNavigator(
    //             {
    //                 Problemas: {
    //                     screen: Problemas
    //                 },
    //                 'NovoProblema': {
    //                     screen: NovoProblema
    //                 },
    //                 FluxoPassos: {
    //                     screen: createBottomTabNavigator(
    //                         {
    //                             Execucao: {
    //                                 screen: Execucao,
    //                             },
    //                             Monitoramento: {
    //                                 screen: Monitoramento,
    //                             }
    //                         },
    //                         {
    //                             initialRouteName: 'Execucao',
    //                             tabBarComponent: ({ navigation }) => <TabNavigation navigation={navigation} />
    //                         }
    //                     )
    //                 }
    //             },
    //             {
    //                 initialRouteName: 'FluxoPassos',
    //                 defaultNavigationOptions: {
    //                     header: null
    //                 }
    //             }
    //         )
    //     },
    //     Objetivos: {
    //         screen: createStackNavigator(
    //             {
    //                 Objetivos: {
    //                     screen: Objetivos
    //                 },

    //             },
    //             {
    //                 initialRouteName: 'Objetivos',
    //                 defaultNavigationOptions: {
    //                     header: null,

    //                 }
    //             }
    //         )
    //     }
  },
  {
    initialRouteName: "Turmas"
  }
);

export default createAppContainer(Drawer);
