import React, { useEffect, useState } from 'react'
import {  Alert, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import {  SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn, ProductCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProductSearch = () => {
    const params = useSearchParams();
    const router = useRouter()
    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
  
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLTEwIiwiZXhwIjoxNjg0NzY4Njk5fQ.ygGMED5E7obQ-CA0RjG2iZS22Zr6OG3APyGa2gKhs5Y";
    
    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://e62c-2001-861-81-3860-296c-4376-b285-79ab.ngrok-free.app/products/search/${params.id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const response = await axios.request(options);
            setSearchResult(response.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

  

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
    options={{
      headerStyle: { backgroundColor: COLORS.lightWhite },
      headerShadowVisible: false,
      headerLeft: () => (
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      ),
      headerRight: () => (
        <ScreenHeaderBtn
          iconUrl={icons.profile}
          dimension="100%"
          handlePress={() => {
            Alert.alert(
              "Déconnexion",
              "Êtes-vous sûr de vouloir vous déconnecter ?",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "Se déconnecter",
                  onPress: async () => {
                    // Supprimer le token de AsyncStorage
                    try {
                      //const t = await AsyncStorage.removeItem("token");
                      router.push('/started');
                      // Naviguer vers l'écran de connexion ou de bienvenue
                    } catch (error) {
                      console.log(error);
                    }
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />
      ),
      headerTitle: "",
    }}
  />
         <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          {searchResult ?(
          <View style={{marginTop: 10 , height: 100}}>
             <ProductCard 
             product={searchResult[0]}
              handleNavigate={() => router.push(`/products/${searchResult[0].id}`)} 
              />
          </View>
          ): (
            <View style={{marginTop: 20}}>
                <Text>Aucun résultat de recherche trouvé.</Text>
            </View>
          )}

        </View>
        </SafeAreaView>
    )
}

export default ProductSearch