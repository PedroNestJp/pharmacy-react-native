// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', name: 'Paracetamol', price: '$5.99' },
  { id: '2', name: 'Ibuprofeno', price: '$7.99' },
  // Adicione mais produtos conforme necessário
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header title="Pharmacy App" />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
