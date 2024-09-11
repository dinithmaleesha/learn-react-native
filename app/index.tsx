import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const Index = () => {
  return (
   <View>
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