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
      <Text style={styles.description}>{product.shortDescription}</Text>
      <Text style={styles.description}>{product.longDescription}</Text>
      <Text>Price: {product.price}</Text>
      {/* Adicione mais informações conforme necessário */}

      {/* Ajuste para fixar os botões na parte inferior */}
      <View style={styles.btnsContainer}>
        <View style={styles.btnsBottom} >
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
        </View>
        {/* Botão de Voltar */}
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
          color="#555"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    position: 'relative', // Para permitir o posicionamento absoluto dos botões
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
  btnsContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Alinha os botões na parte inferior
  },
  btnsBottom: {
    flexDirection: 'colunm',
    gap:8,
    justifyContent: 'space-between',
    marginVertical: 16,
  },
});
