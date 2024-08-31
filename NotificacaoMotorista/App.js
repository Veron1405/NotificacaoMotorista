import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Biblioteca de ícones
import backgroundImage from './assets/background.png'; // Caminho para a imagem

export default function App() {
  return (
    <ImageBackground
      source={backgroundImage} // Usando a imagem importada
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Notificações</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Icon name="user" size={50} color="#ffffff" style={styles.icon} />
          <Text style={styles.infoText}>Perfil do Usuário</Text>
        </View>
        <View style={styles.textContainer}>
          <Icon name="exclamation-circle" size={50} color="#ffffff" style={styles.icon} />
          <Text style={styles.infoText}>Aviso Importante</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 50, // Ajuste conforme necessário para a margem superior
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 40, // Espaço entre o emoji e o texto
  },
  backButtonText: {
    fontSize: 24,
    color: '#ffffff',
    marginLeft: 30,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
  },
  container: {
    position: 'absolute',
    top: 120, // Ajuste para ficar logo abaixo do cabeçalho
    left: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40, // Espaço entre os textos
  },
  icon: {
    marginRight: 30,
    marginLeft: 30,
  },
  infoText: {
    color: '#ffffff', // Cor preta para o texto
    fontSize: 22,
  },
});
