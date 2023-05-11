import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const VrAugmented = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner style={StyleSheet.absoluteFillObject} />
      <View style={styles.cube}>
        <View style={styles.triangle1} />
        <View style={styles.triangle2} />
        <View style={styles.triangle3} />
        <View style={styles.triangle4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cube: {
    width: 100,
    height: 100,
    position: 'absolute',
  },
  triangle1: {
    borderTopWidth: 50,
    borderTopColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'lime',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
  },
  triangle2: {
    borderTopWidth: 50,
    borderTopColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'lime',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    transform: [{ rotate: '90deg' }],
  },
  triangle3: {
    borderTopWidth: 50,
    borderTopColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'lime',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    transform: [{ rotate: '180deg' }],
  },
  triangle4: {
    borderTopWidth: 50,
    borderTopColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'lime',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    transform: [{ rotate: '270deg' }],
  },
});

export default VrAugmented;
