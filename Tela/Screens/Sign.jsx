import {View, Button, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import styles from '../static/styles';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import axios from 'axios';

function SignIn(props) {
    const [ name, setName] = useState('');
    const [nameVerify, setNameVerify] = useState(false);
    const [ email, setEmail] = useState('');
    const [emailVerify, setEmailVerify] = useState(false);
    const [ password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState(false);

    const navigation = useNavigation()
    function handleSubmit(){
        const userData = {
            name:name,
            email,
            password,
        };


        axios.post("http://10.0.0.5:3000/register", userData)
        .then(res => console.log(res.data)).catch(e => console.log(e));
        navigation.navigate('Home');

    };
    function handleName(e) {
        const nameVar = e.nativeEvent.text;
        setName(nameVar);
        setNameVerify(false);

        if (nameVar.length > 1) {
          setNameVerify(true);
        }
      };
      function handleEmail(e) {
          const emailVar = e.nativeEvent.text;
          setEmail(emailVar);
          setEmailVerify(false);
          if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
            setEmail(emailVar);
            setEmailVerify(true);
          }
        };
        function handlePassword(e) {
            const passwordVar = e.nativeEvent.text;
            setPassword(passwordVar);
            setPasswordVerify(false);
            if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
              setPassword(passwordVar);
              setPasswordVerify(true);
            }
          }


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Tela.jpeg')} />
      <Text style = {styles.text_header}>Insira suas informações</Text>
      <TextInput style={styles.input} placeholder="Nome" onChange={e => handleName(e)}/>
      <TextInput style={styles.input} placeholder="E-mail" onChange={e => handleEmail(e)}/>
      <TextInput style={styles.input} placeholder="Senha" onChange={e => handlePassword(e)} secureTextEntry={true}/>
      <View style={{ height: 20 }} />
      <Button title="Cadastrar" onPress={() => handleSubmit()} />
      <View style={{ height: 20 }} />
      <Button title="Já tem uma conta?" onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
}

export default SignIn;