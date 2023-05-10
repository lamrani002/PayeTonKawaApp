import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  HeaderProduct,
  AboutProduct,
  JobTabs,
  ScreenHeaderBtn,
  Tabs,
  VrAugmented,
 
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import AsyncStorage from '@react-native-async-storage/async-storage';


const tabs = ["A propos", "Voir en 3D"];

const ProductDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
 
  const [token, setToken] = useState(null);

   useEffect(() => {
     const getToken = async () => {
     const storedToken = await AsyncStorage.getItem('token');
     setToken(storedToken);
     console.log("Token récupéré:", storedToken);
     };
    getToken();
   }, []);
   const { data, isLoading, error, refetch } = useFetch(`https://apiepsierp.herokuapp.com/products/${params.id}`,token);
  
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);


  const displayTabContent = () => {
    switch (activeTab) {
      case "A propos":
        return (
          <AboutProduct price={data[0].details.price ?? "Pas d'information"}
          description={data.details.description} 
          stock={data.stock} 
          color={data.details.color}/>
        );

      case "Voir en 3D":
        return (
        <VrAugmented />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />
       
      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              {/* About */}
              <HeaderProduct
                logo={'https://img.icons8.com/stickers/100/null/product.png'}
                prodTitle={data.name}
                dateCreated={data.createdAt}
              />

              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

      </>
    </SafeAreaView>
  );
};

export default ProductDetails;
