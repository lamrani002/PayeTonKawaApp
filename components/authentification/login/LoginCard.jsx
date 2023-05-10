import React, { useState} from 'react'
import { View,Text,TextInput, TouchableOpacity, Image, Button, Modal, Alert} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './logincard.style'
import { icons } from '../../../constants'
import SendEmail from '../sendemail/SendEmail'
import axios from 'axios'




export const LoginCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const handleSendEmail = async() => {
    const data = { username: email, pwd: password }; 

    const config = { headers: { 'Content-Type': 'application/json' }, }; 

    axios.post('https://apiepsierp.herokuapp.com/send_qr', data, config)
      .then(response => {
        //console.log(response.data);
        console.log('Email:', email); // Affiche l'email 
        console.log('Password:', password); // Affiche le mot de pas
        Alert.alert("E-mail envoyé avec succès !");
      })
      .catch(error => {
        console.error(error);
        Alert.alert("Erreur", "Une erreur s'est produite lors de l'envoi de l'e-mail.");
      });
  };
  console.log(email);
  const handleLogin = () => {
    // Logique de connexion à implémenter ici
  };
    return (
    <View style={styles.container}>
      < Image 
        source={icons.Login}
        resizeMode='cover'
        
      />
        <View style={styles.emailContainer}>
        <View style={styles.emailWrapper}>
          <TextInput
            style={styles.emailInput}
           
            onChangeText={setEmail}
            placeholder='Entrer votre email'
          />
        </View>
        </View>
        <View style={styles.emailContainer}>
        <View style={styles.emailWrapper}>
          <TextInput style={styles.emailInput}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder='Entrer votre mot de passe' 
          />
        </View>
        </View>
       
        <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText} >Demander Qr Code</Text>
      </TouchableOpacity>

      <SendEmail visible={modalVisible} onClose={() => setModalVisible(false)} onSendEmail={() => {}} onCancel={() => setModalVisible(false)} />

          
      
     </View>
  )
}

export default LoginCard;
