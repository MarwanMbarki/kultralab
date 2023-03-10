import "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home/Home';
import CarouselScreen from './src/Screens/CarouselScreen/CarouselScreen';
import { useLoadedAssets } from './src/utils/use-loaded-resources';

const Tab = createBottomTabNavigator();

export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{ tabBarStyle: { display: 'none' } }} />
          <Tab.Screen
            name="CarouselScreen"
            component={CarouselScreen}
            options={{ tabBarStyle: { display: 'none' } }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}