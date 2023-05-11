import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Index() { 
        const [isLoading, setIsLoading] = useState(true);
         const [isValidToken, setIsValidToken] = useState(false); 
         useEffect(() => { 
            const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) { 
            try { 
                const response = await axios.get('https://apiepsierp.herokuapp.com/validate-token', { headers: { Authorization: `Bearer ${token}`, }, });
                    if (response.status === 200) {
                        setIsValidToken(true); 
                    } 
                } catch (error) {
                        console.error('Error validating token:', error); 
                    } 
                } 
                setIsLoading(false);
                }; 
                checkToken(); 
            }, []); 
            if (isLoading) { 
                return null;
            }
            if (isValidToken) {
                return <Redirect href="/home" />;
                }
                    return <Redirect href="/vr" />;
}