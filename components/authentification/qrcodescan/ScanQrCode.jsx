import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './scanqrcode.style';
import axios from 'axios';

const ScanQrCode = () => {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

 
  const validateToken = async (token) => {
    const options = {
      method: 'GET',
      url: 'https://e62c-2001-861-81-3860-296c-4376-b285-79ab.ngrok-free.app/validate-token',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios(options)
      const data = await response.data;
      console.log(response.data);
      return data.token;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const isValidToken = await validateToken(data);
    console.log(isValidToken);
    if (isValidToken) {
    await AsyncStorage.setItem('token', isValidToken);
     alert('Authentification réussie');
     router.push('/home');
    }else {
      alert('Token invalide', 'Veuillez scanner à nouveau le QR code');
      setScanned(false);
    }
  };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
};
export default ScanQrCode;