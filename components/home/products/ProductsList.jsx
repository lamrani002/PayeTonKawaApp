import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from "react-native";

import styles from "./productslist.style";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import ProductCard from "../../common/cards/product/ProductCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductsList = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const getToken = async () => {
    const storedToken = await AsyncStorage.getItem('token');
    setToken(storedToken);
   // console.log("Token récupéré:", storedToken);
    };
   getToken();
  }, []);
  const { data, isLoading, error, refetch } = useFetch("https://apiepsierp.herokuapp.com/products",token);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>List des produits</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} onPress={refetch}>Refresh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
            Alert.alert(
              "Token Invalide ",
              "Nous vous invitons a rescanner le bon Qr code !",
              [
                {
                  text: "Annuler",
                  style: "cancel",
                },
                {
                  text: "Ok",
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
            )
        ) : (
          data?.map((product) => (
            <ProductCard
              product={product}
              key={`${product.id}`}
              handleNavigate={() => router.push(`/products/${product.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default ProductsList;
