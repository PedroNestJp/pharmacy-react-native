// src/components/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
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
})

export default ProductCard;
