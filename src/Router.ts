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
                }
                ,
                {
                    defaultNavigationOptions: {
                        header: null
                    }
                }
            )
        },
    },
    {
        initialRouteName: 'Inicial'
    }
);

export default createAppContainer(Drawer);