import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/TelaInicial';
import ListaDados from './src/ListaDados';
import AdicionarDados from './src/AdicionarDados';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Inicial">
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Lista Dados" component={ListaDados} />
        <Stack.Screen name="Adicionar Dados" component={AdicionarDados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
