import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import Header from '@/layout/header'
import Ionicons from '@expo/vector-icons/Ionicons'

const Product = () => {
    const params = useLocalSearchParams()
    console.log(params);
    
  return (
    <View className='w-full flex-1'>
      {/* <Header Left={
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={27} color="black" />
          </TouchableOpacity>
        </Link>
        }
        centerText='Product'
      /> */}
      <Text>Product</Text>
    </View>
  )
}

export default Product