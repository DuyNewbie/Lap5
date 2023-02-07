import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Page1 from './Page1';
import Page2 from './Page2';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Page1'>
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
