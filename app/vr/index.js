import React from 'react'
import { Stack, useRouter } from "expo-router";

import { StartedScreen } from '../../components'

import { SafeAreaView } from 'react-native'
import {COLORS} from '../../constants'
import { VrAugmented } from '../../components/home/vraugmented/VrAugmented';

const index = () => {
  const router = useRouter()

    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#ffedd8' },
          headerShadowVisible: false,
          headerTitle: ""}}
      />

      <VrAugmented color={"#FF0000"} />

        <StartedScreen />
      </SafeAreaView>
  )
}


export default index