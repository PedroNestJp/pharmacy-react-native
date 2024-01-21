// src/components/ProductCard.js
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProductCard = ({ product, onPress, onAddToCartPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{product.name}</Text>
      <Image source={require('../../assets/generic-photo.png')} style={styles.image} />
      <Text>{product.shortDescription}</Text>
      <Text>{product.price}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => onAddToCartPress(product)}>
        <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'center',
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;
