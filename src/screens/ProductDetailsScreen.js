// ProductDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>Price: {product.price}</Text>
      {/* Adicione mais informações conforme necessário */}
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
});

export default ProductDetailsScreen;
