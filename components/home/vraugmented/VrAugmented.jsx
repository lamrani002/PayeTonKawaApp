import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const VrAugmented = ({ color = 'gray', size = { width: 100, height: 50 } }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [rotationZ, setRotationZ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationZ((prevRotationZ) => prevRotationZ + 1);
    }, 1000); // Change rotation every second (1000 ms)

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} />
      <View style={styles.cube}>
        <View
        style={[
          styles.face,
          {
            width: size.width,
            height: size.height,
            borderColor: color,
            transform: [
              { perspective: 800 },
              { rotateX: '45deg' },
              { rotateY: '45deg' },
              { rotateZ: `${rotationZ}deg` },
            ],
          },
        ]}
      />
        <View
          style={[
            styles.face,
            {
              backgroundColor: color,
              width: size.width,
              height: size.height,
              transform: [
                { translateX: size.width / 2 },
                { rotateY: '90deg' },
              ],
            },
          ]}
        />
        <View
          style={[
            styles.face,
            {
              backgroundColor: color,
              borderColor: color,
              width: size.width,
              height: size.height,
              transform: [
                { translateY: size.height / 2 },
                { rotateX: '90deg' },
              ],
            },
          ]}
        />
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
    camera: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
    },
    cube: {
      width: 400,
      height: 400,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',

      transform: [
        { perspective: 500 },
        { rotateX: '45deg' },
        { rotateY: '45deg' },
        { rotateZ: '20deg' },
      ],
    },
    face: {
      position: 'absolute',
     
      borderWidth: 100,
    },
  });

export default VrAugmented;
