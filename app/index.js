import React, { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    async function checkToken() {
      // Récupérer le token stocké
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // Envoyer une requête pour vérifier la validité du token
        const response = await fetch('https://e62c-2001-861-81-3860-296c-4376-b285-79ab.ngrok-free.app/validate-token', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          // Si le token est valide, rediriger vers la page d'accueil
          setRedirect('/home');
          console.log(token);
        }else{
            setRedirect('/started');
        }
      }
      // Si le token n'existe pas ou n'est pas valide, rester sur la page d'index
    }
    checkToken();
  }, []);

  if (redirect) {
    return <Redirect href={redirect} />;
  }
  
}
