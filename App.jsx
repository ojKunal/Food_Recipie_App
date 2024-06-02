import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown : false}}>
      <stack.Screen name='welcome' component={WelcomeScreen}/>
      <stack.Screen name='home' component={HomeScreen}/>
      <stack.Screen name='details' component={DetailsScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

