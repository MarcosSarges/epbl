import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Inicial from './screens/Inicial/Inicial';
import Manual from './screens/Manual/Manual';
import Disciplinas from './screens/Disciplina/Disciplinas';
import NovaDisciplina from './screens/Disciplina/NovaDisciplina';
import Problemas from './screens/Problema/Problemas';
import NovoProblema from './screens/Problema/NovoProblema';


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
        initialRouteName: 'Manual'
    }
);

export default createAppContainer(Drawer);