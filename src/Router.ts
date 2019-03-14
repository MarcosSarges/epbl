import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Inicial from './screens/Inicial';
import Manual from './screens/Manual';

const Router = createDrawerNavigator(
    {
        Inicial: {
            screen: Inicial
        },
        Manual: {
            screen: Manual,
            // navigationOptions: {
            //     title: "Manual"
            // }
        }
    },
    {
        initialRouteName: 'Inicial'
    }
)

export default createAppContainer(Router);