import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Inicial from './screens/Inicial';
import Manual from './screens/Manual';
import Disciplinas from './screens/Disciplinas';
import NovaDisciplina from './screens/NovaDisciplina';

const Router = createDrawerNavigator(
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
        }
    },
    {
        initialRouteName: 'Nova Disciplina'
    }
)

export default createAppContainer(Router);