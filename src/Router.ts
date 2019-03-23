import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Inicial from './screens/Inicial';
import Manual from './screens/Manual';
import Disciplinas from './screens/Disciplinas';
import NovaDisciplina from './screens/NovaDisciplina';
import Problemas from './screens/Problemas';
import NovoProblema from './screens/NovoProblema';


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
                    }
                },
                {
                    initialRouteName:'Problemas',
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            )
        },
    },
    {
        initialRouteName: 'Problemas'
    }
);

export default createAppContainer(Drawer);