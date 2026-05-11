import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Cadastro</Text>
      
      <Button 
        title="Ir para o App" 
        color="#B829EA"
        onPress={() => navigation.replace('MainApp')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#FFFFFF', 
    fontSize: 20,
    marginBottom: 20,
  }
});