import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { useCart } from '../../CartContext';

export const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { dispatch } = useCart(); // Utilize o estado global do carrinho

  const addToCart = (product) => {
    // Lógica para adicionar o produto ao carrinho
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    // Feedback visual
    Alert.alert('Produto Adicionado', `${product.name} foi adicionado ao carrinho.`);
  };
  
  const comprarAgora = (product) => {
    // Lógica para comprar o produto agora
    console.log(`Produto ${product.name} comprado agora`);
    // Feedback visual ou navegação para a tela de checkout
    navigation.navigate('CheckoutScreen', { product });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/generic-photo.png')} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text>Price: {product.price}</Text>
      {/* Adicione mais informações conforme necessário */}
      <Button
        title="Adicionar ao Carrinho"
        onPress={() => addToCart(product)}
        color="#007bff"
      />
      <Button
        title="Comprar Agora"
        onPress={() => comprarAgora(product)}
        color="#4caf50"
      />
      {/* Botão de Voltar */}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color="#555"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'center',
  },
});
