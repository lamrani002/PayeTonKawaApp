import React, { useState } from 'react';
import { LoginCard } from '../../components';
import { COLORS } from '../../constants';
import { SafeAreaView } from 'react-native';
import { Stack } from "expo-router";


const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: '#ffedd8' },
        headerShadowVisible: false,
        headerTitle: ""}}
    />
    <LoginCard />
    </SafeAreaView>
  );
};


export default Login;
