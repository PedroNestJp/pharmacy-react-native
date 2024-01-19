// src/screens/HomeScreen.js
import React from 'react';
import { View, FlatList } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', name: 'Paracetamol', price: '$5.99', image: 'assets/generic-photo.png' },
  { id: '2', name: 'Ibuprofeno', price: '$7.99', image: 'assets/generic-photo.png' },
  { id: '3', name: 'Nimesulida', price: '$9.99', image: 'assets/generic-photo.png' },
  { id: '4', name: 'Dorflex', price: '$3.99', image: 'assets/generic-photo.png' },
  // Adicione mais produtos conforme necessário
];

const HomeScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = React.useState([])

  const addToCart = (product) => { setCartItems([...setCartItems, product]) }

  return (
    <View>
      <Header title={`Pharmacy App (${cartItems.length} ${cartItems.length === 1 ? 'item' : 'itens'})`} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
            onAddToCartPress={() => addToCart(item)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
