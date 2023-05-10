import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { GLView } from 'expo-gl';
 import { Renderer } from 'expo';
// import * as THREE from 'three';
import { PerspectiveCamera, Scene, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export function VrAugmented({ color }) {
   const glViewRef = useRef();

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;

    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor('#ffffff');

    const scene = new THREE.Scene();

    // Comment out the camera and cube setup
    
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
    

    const render = () => {
      requestAnimationFrame(render);

      // Comment out cube rotation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    render();
  };

  return (
    <View style={styles.container}>
      <GLView style={styles.glView} ref={glViewRef} onContextCreate={onContextCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glView: {
    flex: 1,
    width: '100%',
  },
});
