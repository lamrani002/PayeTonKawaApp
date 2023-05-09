import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { useRouter } from "expo-router";
import { useState } from "react";

const Footer = () => {
  const router = useRouter();
  const [scanqr, setScanqr] = useState("");
  const [login, setLogin] = useState("Login");

  // hook
  const handleButtonStarted = () => {
    router.push('/authentication/login');
  }

  const handleButtonScanQr = () => {
    router.push('/authentication/scanqrcode');

  } 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} 
        onPress={handleButtonScanQr}
      >
        <Image
          source={icons.scanQr}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={handleButtonStarted}
      >
        <Text style={styles.applyBtnText}>{login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
