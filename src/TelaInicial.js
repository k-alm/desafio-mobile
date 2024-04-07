import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaInicial = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginBottom: 20, fontSize: 24 }}>Tela Inicial</Text>
          <Button
            title="Ir para Lista de Dados"
            onPress={() => navigation.navigate('Lista Dados')}
          />
          <View style={{ marginVertical: 10 }} />
          <Button
            title="Adicionar Dados"
            onPress={() => navigation.navigate('Adicionar Dados')}
          />
        </View>
    );
};

export default TelaInicial;
