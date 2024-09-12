import { Link, router, Slot, Stack, useNavigation } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import DrawerProvider from '@/context/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import useDrawer from '@/context/context-hooks/useDrawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const StackLayout = () => {
  return (
    <DrawerProvider>
        <View className='relative w-full flex-1'>
          <Stack screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: "rgb(209 213 219)"
            }
          }}>
            <Stack.Screen name='(tabs)' options={{
              title:"Home",
              headerShown: false,
              headerLeft:() => <IndexHeaderLeftIcon/>,
            }}/>
            <Stack.Screen name='product/[productId]' options={{title: 'Single Product'}}/>
            <Stack.Screen name='product/index' options={{title: 'Productsss'}}/>
            <Stack.Screen name='Category' options={{title: 'Category'}}/>
            <Stack.Screen name='profile' options={{title: 'Profile'}}/>
          </Stack>
            {/* <Slot/> */}
            {/* <Footer/> */}
        </View>
    </DrawerProvider>
  )
}

export default StackLayout

const IndexHeaderLeftIcon = () => {
  // const {drawer} = useDrawer();
//   return <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
//   <Ionicons name="menu" size={27} color="black" />
// </TouchableOpacity>;

const navigation = useNavigation<DrawerNavigationProp<{}>>();
  return (
    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
      <Ionicons name="menu" size={27} color="black" />
    </TouchableOpacity>
  );
}