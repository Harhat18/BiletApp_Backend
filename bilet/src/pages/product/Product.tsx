import {View, Text, Button} from 'react-native';
import React from 'react';
import {API_URL} from '@env';
import useFetch from '../../hooks/useFetch/useFetch';

const Product = ({navigation}: any) => {
  const {data, loading, error} = useFetch(API_URL);
  console.log(data, loading, error);
  return (
    <View>
      <Text style={{color: 'black'}}>Product</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('ProductDetailScreen')}
      />
    </View>
  );
};

export default Product;
