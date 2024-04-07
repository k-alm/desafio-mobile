import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const AdicionarDados = ({ navigation }) => {
  const [novoDado, setNovoDado] = useState('');

  const handleAdicionar = async () => {
    try {
      const dadosArmazenados = await AsyncStorage.getItem('@dados');
      let novosDados = [];
      if (dadosArmazenados !== null) {
        novosDados = JSON.parse(dadosArmazenados);
      }
      novosDados.push(novoDado);
      await AsyncStorage.setItem('@dados', JSON.stringify(novosDados));
      navigation.navigate('Tela Inicial');
    } catch (error) {
      console.log('Erro ao adicionar dados:', error);
    }
    setNovoDado('');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
        placeholder="Digite o novo dado"
        value={novoDado}
        onChangeText={(text) => setNovoDado(text)}
      />
      <Button title="Adicionar" onPress={handleAdicionar} />
    </View>
  );
};

export default AdicionarDados;
