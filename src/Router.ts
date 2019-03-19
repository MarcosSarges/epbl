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
            screen: Manual,
        },
        Disciplinas: {
            screen: Disciplinas
        },
        'Nova Disciplina': {
            screen: NovaDisciplina
        },
        Problemas: {
            screen: Problemas
        },
        'Novo Problema': {
            screen: NovoProblema
        }
    },
    {
        initialRouteName: 'Inicial'
    }
);

export default createAppContainer(Drawer);