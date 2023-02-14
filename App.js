import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
import DetailsScreen from './src/components/Detailsscreen';
import HomeScreen from './src/components/HomeScreen';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack=createStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
  <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
    </Stack.Navigator>

</NavigationContainer>

   

  );
}
// console.log(StatusBar.currentHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea:{
    flex: 1,
    justifyContent: 'center',
    marginTop: Platform.OS==="android" ? StatusBar.currentHeight :0,

  }
});
