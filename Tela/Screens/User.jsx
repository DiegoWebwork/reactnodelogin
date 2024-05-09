import {View, Button, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from '../static/styles';
import {useState} from 'react';

function User() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Tela.jpeg')} />
      <Text style = {styles.text_header}>Insira suas informações</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>
      <View style={{ height: 20 }} />
      <Button title="atualizar informações" onPress={() => {}} />
    </View>
  );
}

export default User;