/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/screens/Homescreen';
import { Colors } from './src/theme/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primaryColor}
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen  name="ChatScreen" component={ChatScreen} options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
