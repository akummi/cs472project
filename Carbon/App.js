import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeQuiz from './Login/WelcomeQuiz.js'
import Rank from './Login/Rank.js'
import Home from './Login/Home.js'
import Budget from './DataEntry/Budget.js'
import Education from './Education/Education.js'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeQuiz">
      <Stack.Screen name="WelcomeQuiz" component={WelcomeQuiz} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Budget" component={Budget} />
      <Stack.Screen name="Rank" component={Rank} />
      <Stack.Screen name="Education" component={Education} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


