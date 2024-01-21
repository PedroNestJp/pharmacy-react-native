import React from 'react';
import { View, FlatList, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { useCart } from '../../CartContext';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'Paracetamol',
    price: '$5.99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: 'Paracetamol 750mg Genérico EMS 20 Comprimidos',
    longDescription: 'O Paracetamol reduz a febre atuando no centro regulador da temperatura no Sistema Nervoso Central (SNC) e diminui a sensibilidade para a dor. É indicado para a redução da febre e para o alívio temporário de dores leves a moderadas.'
  },
  {
    id: '2',
    name: 'Ibuprofeno',
    price: '$7.99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: 'Ibuprofeno 600mg Genérico Prati Donaduzzi 20 Comprimidos',
    longDescription: 'Indicado para alívio e tratamento dos sintomas de doenças nos ossos, o Ibuprofeno atualmente é o melhor medicamento analgésico e anti-inflamatório existente no mercado.A propriedade analgésica e antiinflamatória do ibuprofeno reduz e auxilia no tratamento dos sintomas da osteoartrite, artrite reumatoide e espondilite, dores pós-operatórias de cirurgia ortopédica.Este medicamento para dor também ajuda a reduzir dores e inflamações causadas pelas reações naturais do corpo humano, além de auxiliar no tratamento da febre. O ibuprofeno 600mg genérico Prati Donaduzzi 20 comprimidos é contraindicado para indivíduos que possuam hipersensibilidade a qualquer um dos seus componentes.'
  },
  {
    id: '3',
    name: 'Nimesulida',
    price: '$9.99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: 'Nimesulida 100mg Genérico Eurofarma 12 Comprimidos',
    longDescription: 'Nimesulida 100mg Genérico Eurofarma 12 Comprimidos é um anti-inflamatório que apresenta propriedades que combatem a dor de dente, dor de garganta, e a febre, e sua atividade anti-inflamatória envolve vários mecanismos. A Nimesulida inibe uma enzima chamada cicloxigenase, a qual está relacionada a produção de uma substância chamada prostaglandina, tal inibição faz com que a dor e a inflamação diminuam. O tempo médio estimado para início da ação depois que você tomar nimesulida é de 15 minutos para alívio da dor. A resposta inicial para a febre acontece cerca de 1 a 2 horas após o uso do medicamento e dura aproximadamente 6 horas.'
  },
  {
    id: '4',
    name: 'Dipirona',
    price: '$9,99',
    image: 'assets/generic-photo.png',
    quantity: 0,
    shortDescription: "Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos",
    longDescription: 'Dipirona 1g Genérico Prati-Dunaduzzi 10 Comprimidos é um medicamento utilizado no tratamento da dor e febre. Os efeitos analgésico e antitérmico podem ser esperados em 30 a 60 minutos após a administração e geralmente persistem por aproximadamente 4 horas. Este medicamento é contraindicado para menores de 3 meses de idade ou pesando menos de 5 kg. Este medicamento não deve ser utilizado por mulheres grávidas sem orientação médica ou do cirurgião-dentista. Informe imediatamente seu médico em caso de suspeita de gravidez.'
  },
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
      <Header title='Pharmacy App' />
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
      {/* Ícone fixo na parte inferior esquerda */}
      <TouchableOpacity
        style={styles.cartIcon}
        onPress={() => navigation.navigate('CartScreen', { cartItems })}
      >
        <FontAwesome name="shopping-cart" size={24} color="#fff" />
        <Text style={styles.cartItemCount}>{cartItems.length}</Text>
      </TouchableOpacity>
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
  cartIcon: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemCount: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default HomeScreen;
