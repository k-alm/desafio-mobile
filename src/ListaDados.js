// ListaDados.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ListaDados = ({ navigation }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const dadosArmazenados = await AsyncStorage.getItem('@dados');
        if (dadosArmazenados !== null) {
          setDados(JSON.parse(dadosArmazenados));
        }
      } catch (error) {
        console.log('Erro ao carregar dados:', error);
      }
    }

    carregarDados();
  }, []);

  const handleExcluir = async (index) => {
    const novosDados = [...dados];
    novosDados.splice(index, 1);
    setDados(novosDados);
    try {
      await AsyncStorage.setItem('@dados', JSON.stringify(novosDados));
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
  };

  const verificarAsyncStorage = async () => {
    try {
      const dadosArmazenados = await AsyncStorage.getItem('@dados');
      if (dadosArmazenados !== null) {
        alert('Dados armazenados: ' + dadosArmazenados);
      } else {
        alert('Nenhum dado armazenado.');
      }
    } catch (error) {
      console.log('Erro ao verificar AsyncStorage:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lista de Dados</Text>
      <FlatList
        data={dados}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Excluir" onPress={() => handleExcluir(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Verificar AsyncStorage" onPress={verificarAsyncStorage} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ListaDados;
