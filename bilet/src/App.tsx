import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductDetail from './pages/product/ProductDetail';
import Profile from './pages/setting/Profile';
import ProfileEdit from './pages/setting/ProfileEdit';
import Product from './pages/product/Product';

import ProductProvider from './context/ProductProvider/ProductProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={Product}
        options={{
          title: 'BİLET',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetail}
        options={{
          title: 'BİLET',
          headerStyle: {backgroundColor: '#2f4f4f'},
          headerTitleStyle: {color: '#fff', fontSize: 20},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Product"
            component={ProductStack}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
};

export default App;
