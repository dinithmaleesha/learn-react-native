import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';
import { DrawerContentComponentProps, DrawerNavigationProp } from '@react-navigation/drawer';
import { View } from 'react-native';
import Nav from '@/layout/navbar';

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={()=><Nav/>}
        screenOptions={{
          headerShown: false,
          drawerStyle:{
            backgroundColor: 'green',
            width: "70%"
          }}}>
        {/* <Drawer.Screen name='index' options={{
          title:'Home',
          headerTitleAlign: 'center',
          headerShown: true,
          headerLeft: () => <DrawerHeaderIcon/>,
        }}/>
        <Drawer.Screen name='stack'/> */}
      </Drawer>
    </GestureHandlerRootView>);
}

export default RootLayout

const DrawerHeaderIcon = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  
  return (
    <TouchableOpacity
      onPress={()=>navigation.openDrawer()}
      className='ml-4'>
      <Ionicons name="menu" size={27} color="black" />
    </TouchableOpacity>
  );
}

const DrawerContent = (p:DrawerContentComponentProps) => {
  // console.log(p);
  
  return (
    <View className={'w-full flex-1'}>
      <Link className='mt-12 text-gray-50' href={'/Category'}>Category</Link>
    </View>
  );
}