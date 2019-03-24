import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Inicial from './screens/Inicial/Inicial';
import Manual from './screens/Manual/Manual';
import Disciplinas from './screens/Disciplina/Disciplinas';
import NovaDisciplina from './screens/Disciplina/NovaDisciplina';
import Problemas from './screens/Problema/Problemas';
import NovoProblema from './screens/Problema/NovoProblema';
import Objetivos from './screens/Objetivo/Objetivo';
import Execucao from './screens/Passos/Execucao';
import Monitoramento from './screens/Passos/Monitoramento';
import TabNavigation from './components/TabNavigation';
import React from 'react'

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
                    }
                },
                {
                    initialRouteName: 'Manual',
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            ),
        },
        Disciplinas: {
            screen: createStackNavigator(
                {
                    Disciplinas: {
                        screen: Disciplinas
                    },
                    'Nova Disciplina': {
                        screen: NovaDisciplina
                    },
                },
                {
                    initialRouteName: 'Disciplinas',
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            )
        },
        Problemas: {
            screen: createStackNavigator(
                {
                    Problemas: {
                        screen: Problemas
                    },
                    'Novo Problema': {
                        screen: NovoProblema
                    },
                    FluxoPassos: {
                        screen: createBottomTabNavigator(
                            {
                                Execucao: {
                                    screen: Execucao,
                                },
                                Monitoramento: {
                                    screen: Monitoramento,
                                }
                            },
                            {
                                initialRouteName: 'Execucao',
                                tabBarComponent: ({ navigation }) => <TabNavigation navigation={navigation} />
                            }
                        )
                    }
                },
                {
                    initialRouteName: 'FluxoPassos',
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            )
        },
        Objetivos: {
            screen: createStackNavigator(
                {
                    Objetivos: {
                        screen: Objetivos
                    },

                },
                {
                    initialRouteName: 'Objetivos',
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            )
        }
    },
    {
        initialRouteName: 'Inicial'
    }
);

export default createAppContainer(Drawer);