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
    const [token, setToken] = useState(null);

  
    useEffect(() => {
        const getToken = async () => {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken);
        console.log("Token récupéré:", storedToken);
        };
       getToken();
      }, []);    
    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://apiepsierp.herokuapp.com/products/search/${params.id}`,
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
        <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" onPress={() => {router.back()}} />
      ),
      headerRight: () => (
        <ScreenHeaderBtn
          iconUrl={icons.logout}
          dimension="70%"
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
                       await AsyncStorage.removeItem("token");
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