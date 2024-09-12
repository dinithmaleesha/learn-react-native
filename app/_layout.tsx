import { Link, router, Slot } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import Footer from '@/layout/footer';
import DrawerProvider from '@/context/drawer';

const RootLayout = () => {
  return (
    <DrawerProvider>
        <View className='relative w-full flex-1'>
            <Slot/>
            <Footer/>
        </View>
    </DrawerProvider>
  )
}

export default RootLayout