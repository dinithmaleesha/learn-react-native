import useDrawer from '@/context/context-hooks/useDrawer';
import Header from '@/layout/header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const {drawer} = useDrawer()
  return (
      <View>
          <Header Left={
            <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
              <Ionicons name="menu" size={27} color="black" />
            </TouchableOpacity>}
            centerText='Home'
          />
          <Text className='text-5xl font-bold text-green-700'>Hello World</Text>
          <Link href={'/Category'}>Category</Link>
          <Link href={'/Products'}>Products</Link>
          <Link href={{
            pathname: '/product',
            params: {
              name: 'Maleesha'
            }
          }}>Product</Link>
          <Link href={{
            pathname:"/product/[productId]",
            params: {
              productId:'Dinith',
              name:'Maleesha'
            },
          }}>123</Link>
        </View>
  );
}

export default Index;