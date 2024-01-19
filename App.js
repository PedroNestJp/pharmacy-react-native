import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { ProductCard } from './src/components/ProductCard';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Configurar um navegador
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View style={styles.container}>
          <StatusBar style="auto" />
        </View>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetails} />
        {/* Adicione mais telas conforme necessário */}
      </Stack.Navigator>
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
