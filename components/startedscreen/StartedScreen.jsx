import React from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import styles from './startedscreen.style'
import { useRouter } from 'expo-router';
import {COLORS, icons,images} from '../../constants'
import Footer from '../productdetails/footer/Footer';

const StartedScreen = () => {
  const router = useRouter();
  return (
   
      <View style={styles.container}>
         <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        <Footer />
      </View>

 
  )
}

export default StartedScreen