import React from 'react'
import { createAppContainer, createDrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Inicial from './screens/Inicial/Inicial';
import Turmas from './screens/Turma/Turmas';
import NovaTurma from './screens/Turma/NovaTurma';
import TabNavigation from './components/TabNavigation';

import Manual from './screens/Manual/Manual';
import DetalhesManual from './screens/Manual/DetalhesManual';
import NovoPlanoDeAula from './screens/PlanoDeAula/NovoPlanoDeAula';

const Drawer = createDrawerNavigator(
    {
        Inicial: {
            screen: Inicial
        },
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
                    initialRouteName: 'Manual',
                    defaultNavigationOptions: {
                        header: null,
                    }
                }
            ),
        },
        Turmas: {
            screen: createStackNavigator(
                {
                    Turmas: {
                        screen: Turmas
                    },
                    NovaTurma: {
                        screen: NovaTurma
                    },
                    NovoPlanoDeAula: {
                        screen: NovoPlanoDeAula
                    }
                },
                {
                    initialRouteName: 'Turmas',
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            )
        },
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
        initialRouteName: 'Inicial',
    }
);

export default createAppContainer(Drawer);