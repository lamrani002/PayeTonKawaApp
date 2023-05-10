import { useState } from "react";
import { SafeAreaView, ScrollView, View,Text, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  CustomersList,
  ProductsList,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({token}) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");
    // 
 
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          {/* <CustomersList /> */}
          <ProductsList />
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
