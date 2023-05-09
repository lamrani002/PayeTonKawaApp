import React, { useState } from 'react'
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text,View } from 'react-native'
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES, icons } from '../../constants';
import { ScreenHeaderBtn, Tabs } from '../../components';

const tabs = ["Profile", "Societe", "Commandes", "Produits"];

const customer = () => {
    const params = useSearchParams();
    const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data, isLoading, error,refetch } = useFetch("customers", {id : params.id});
 let index = params.id 

  
      const displayTabContent = () => {
        switch (activeTab) {
          case "Profile":
            return (
              <Profile />
             
            );
          case "Societe":
            return(
              <Company />
            );
          case "Commandes":
            return (
              <Order />
            );
          case "Produits":
            return (
                <Text>Produits</Text>
            )
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
              headerTitle: "",
            }}
          />
           
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary} />
              ) : error ? (
                <Text>Something went wrong</Text>
              ) : data.length === 0 ? (
                <Text>No data available</Text>
              ) : (
                <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                  
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
}

export default customer