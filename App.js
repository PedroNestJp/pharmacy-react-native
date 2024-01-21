import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { ProductDetailsScreen } from './src/screens/ProductDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './src/screens/CartScreen';
import { CartProvider } from './CartContext';
import LoginScreen from './src/screens/LoginScreen';

// Configurar um navegador
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <CartProvider>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
          <Stack.Screen name='CartScreen' component={CartScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          {/* Adicione mais telas conforme necessário */}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
