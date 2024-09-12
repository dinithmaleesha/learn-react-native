import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { router, Tabs, useNavigation } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerLeft: () =>
        <TouchableOpacity className='ml-4' onPress={()=>router.back()}>
          <Ionicons name="arrow-back" size={27} color="black" />
        </TouchableOpacity>,
      headerStyle: {
        backgroundColor: "rgb(209 213 219)"
      },
      tabBarStyle: {
        backgroundColor: "rgb(209 213 219)"
      },
      tabBarLabelStyle:{marginBottom: 5},
      tabBarIconStyle: {marginBottom: -7},
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'black',
      headerTitleAlign: 'center',
    }}>
      <Tabs.Screen name='index' options={{
        headerLeft: () => <IndexHeaderLeftIcon/>,
        title:'Home',
        tabBarIcon:({color, size})=><FontAwesome name="home" size={size} color={color} />
      }}/>
      <Tabs.Screen name='setting1' options={{
        title:'Setting 01',
        tabBarLabel: 'Setting 01',
        tabBarIcon:({color, size})=><FontAwesome name="gear" size={size} color={color} />
      }}/>
      <Tabs.Screen name='setting2' options={{
        title:'Setting 02',
        tabBarLabel: 'Setting 02',
        tabBarIcon:({color, size})=><FontAwesome name="gears" size={size} color={color} />
      }}/>
      <Tabs.Screen name='setting3' options={{
        title:'Setting 03',
        tabBarLabel: 'Setting 03',
        tabBarIcon:({color, size})=><FontAwesome5 name="user-cog" size={size} color={color} />
      }}/>
    </Tabs>
  )
}

export default TabLayout

const IndexHeaderLeftIcon = () => {
  // const {drawer} = useDrawer();
//   return <TouchableOpacity onPress={() => drawer?.current?.openDrawer()}>
//   <Ionicons name="menu" size={27} color="black" />
// </TouchableOpacity>;

const navigation = useNavigation<DrawerNavigationProp<{}>>();
  return (
    <TouchableOpacity className='ml-4' onPress={()=>navigation.openDrawer()}>
      <Ionicons name="menu" size={27} color="black" />
    </TouchableOpacity>
  );
}