import {View, Text, Button} from 'react-native';
import React from 'react';

const Product = ({navigation}: any) => {
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
