import React from 'react'
import { Stack, useRouter } from "expo-router";

import { StartedScreen } from '../../components'

import { SafeAreaView } from 'react-native'
import {COLORS} from '../../constants'
import {ScanQrCode} from '../../components';

const index = () => {
    
    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: ""}}
      />

        <ScanQrCode />
      </SafeAreaView>
  )
}


export default index