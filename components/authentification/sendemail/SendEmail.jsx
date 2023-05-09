import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, TouchableOpacity } from 'react-native';
import styles from './sendemail.style';
import { COLORS, FONT, SIZES, icons } from '../../../constants';

const SendEmail = ({visible, onClose, onSendEmail, onCancel, msg}) => {
  
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [emailSent, setEmailSent] = useState("");

  const handleSendEmail = () => {
    onSendEmail(email);
  };

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  return (
    <View>
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        msg={setEmailSent}
        
      >
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={{fontFamily : FONT.bold, color: '#c9a227'}}>Qr code envoyé avec succé !</Text>
                <Text style={{fontFamily: FONT.medium, fontSize: 15, marginTop: 10, color: COLORS.gray}}
                >Vérifier votre boîte mail, si vous ne l'avez pas reçu ne vous invitons à contacter notre service client.</Text>
                < View style={{ flexDirection:'row',marginTop: 30}} >
                <Button
                    title="Fermer"
                    color="gray"
                    onPress={onCancel}
                />
                </View>
            </View>
        </View>
      </Modal>
    </View>
  );
}

export default SendEmail;
