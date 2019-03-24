import React from 'react';
import { View, Text } from 'react-native';
import { NavigationScreenProps, NavigationTabRouterConfig } from 'react-navigation';
import { Button } from 'react-native-elements';

type Props = {
  ex?: boolean,
  mo?: boolean
} & NavigationScreenProps

export default (props: Props) => {

  console.log(props.navigation.state)
  let action1 = {}
  let action2 = {}
  if (0 === props.navigation.state.index)
    action1 = { color: '#FFF' }
  if (1 === props.navigation.state.index)
    action2 = { color: '#FFF' }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#2089DC'
      }}>
      <Button
        title='Execução'
        type='clear'
        titleStyle={{ color: '#444', ...action1 }}
        onPress={() => props.navigation.navigate('Execucao')}
      />
      <Button
        title='Monitoramento'
        type='clear'
        titleStyle={{ color: '#444', ...action2 }}
        onPress={() => props.navigation.navigate('Monitoramento')}
      />
    </View>
  );
}