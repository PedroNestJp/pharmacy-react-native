import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { useCart } from '../../CartContext';

const products = [
  { id: '1', name: 'Paracetamol', price: '$5.99', image: 'assets/generic-photo.png', quantity: 0 },
  { id: '2', name: 'Ibuprofeno', price: '$7.99', image: 'assets/generic-photo.png', quantity: 0 },
  { id: '3', name: 'Nimesulida', price: '$9.99', image: 'assets/generic-photo.png', quantity: 0 },
  { id: '4', name: 'Dorflex', price: '$3.99', image: 'assets/generic-photo.png', quantity: 0 },
  // Adicione mais produtos conforme necessário
];

const HomeScreen = ({ navigation }) => {
  const { cartItems, addToCart } = useCart();

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}
      onAddToCartPress={() => addToCart(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Header title={`Pharmacy App (${cartItems.length} ${cartItems.length === 1 ? 'item' : 'itens'})`} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
      />
      <View style={styles.cartButtonContainer}>
        <Button
          title="View Cart"
          onPress={() => navigation.navigate('CartScreen', { cartItems })}
          color="#007bff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartButtonContainer: {
    margin: 16,
  },
});

export default HomeScreen;
