import React, { useState} from 'react'
import { View,Text,TextInput, TouchableOpacity, Image, Button, Modal} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './logincard.style'
import { icons } from '../../../constants'
import SendEmail from '../sendemail/SendEmail'




export const LoginCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  

  // email correcte
  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };
  //// partie envoi email si l'utilisateur n'arrive pas a se connecter 
  const handleSendEmail = (email, setMessage) => {
    if (validateEmail(email)) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      };
      fetch('https://example.com/api/send-email', requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setMessage("E-mail envoyé avec succès !");
        })
        .catch(error => {
          console.error(error);
          setMessage("Une erreur s'est produite lors de l'envoi de l'e-mail.");
        });
    } else {
      setMessage("Veuillez saisir une adresse e-mail valide.");
    }
  };

  /// partie login /////
  const handleLogin = () => {
    // Logique de connexion à implémenter ici
  }
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
           
            onChangeText={() => {}}
            placeholder='Entrer votre email'
          />
        </View>
        </View>
        <View style={styles.emailContainer}>
        <View style={styles.emailWrapper}>
          <TextInput style={styles.emailInput}
          onChangeText={() => {}}
          secureTextEntry={true}
          placeholder='Entrer votre mot de passe' 
          />
        </View>
        </View>
       
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText} onPress={() => setModalVisible(true)}>Demander Qr Code</Text>
        </TouchableOpacity>
       
          
      <SendEmail 
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      onSendEmail={(email) => handleSendEmail(email, setMessage)}
      onCancel={() => setModalVisible(false)}
      />
     </View>
  )
}

export default LoginCard;
