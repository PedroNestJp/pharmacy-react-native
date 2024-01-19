// src/screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  const addToCart = (product) => {
    // Lógica para adicionar o produto ao carrinho
    console.log(`Produto ${product.name} adicionado ao carrinho`);
  };
  
  const comprarAgora = (product) => {
    // Lógica para comprar o produto agora
    console.log(`Produto ${product.name} comprado agora`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/generic-photo.png')} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      {/* <Text>{product.description}</Text> */}
      <Text>Price: {product.price}</Text>
      {/* Adicione mais informações conforme necessário */}
      <Button
        title="Adicionar ao Carrinho"
        onPress={() => addToCart(product)}
      />
      <Button
        title="Comprar Agora"
        onPress={() => comprarAgora(product)}
      />
      {/* Botão de Voltar */}
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'center',
  },
});

