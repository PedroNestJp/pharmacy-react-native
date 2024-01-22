import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                 options={{
                     tabBarIcon: ({ color, size }) => (
                         // Adicione o ícone para a tela de Carrinho aqui
                         <MaterialIcons name="shopping-cart" color={color} size={size} />
                     ),
                 }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                 options={{
                     tabBarIcon: ({ color, size }) => (
                         // Adicione o ícone para a tela de Perfil aqui
                         <MaterialIcons name="user" color={color} size={size} />
                     ),
                 }}
            />
        </Tab.Navigator>
    );
};

export default MainNavigator;
