import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Product = () => {
    const params = useLocalSearchParams()
    console.log(params);
    
  return (
    <View>
      <Text>Product</Text>
    </View>
  )
}

export default Product