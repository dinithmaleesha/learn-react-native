import { DrawerContext } from "@/context/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Href, router } from "expo-router";
import { useContext } from "react";
import { Image, View, Text, TouchableOpacity, DrawerLayoutAndroid } from "react-native";

const Nav = ({drawer}:{drawer: React.RefObject<DrawerLayoutAndroid>}) => 
<View className="w-full flex-1 bg-gray-900">
    <View className="w-full items-center justify-center h-[220px]">
        <Image source={{uri:'https://www.euroschoolindia.com/wp-content/uploads/2023/06/facts-about-space.jpg'}}
        className="w-[100px] h-[100px] rounded-full"/>

    </View>
    <View>
        <MenuItem drawer={drawer} name={"home-outline"} title="Home" navigate="/"/>
        <MenuItem drawer={drawer} name={"logo-dropbox"} title="Product" navigate="/product"/>
        <MenuItem drawer={drawer} name={"grid-outline"} title="Category" navigate="/Category"/>
        <MenuItem drawer={drawer} name={"person-outline"} title="Profile" navigate="/profile"/>
    </View>
</View>

export default Nav;
interface IMenuItem {
    name:"home-outline"|"logo-dropbox"|"grid-outline"|"person-outline";
    title:string;
    navigate:Href;
    drawer: React.RefObject<DrawerLayoutAndroid>;
}
const MenuItem = ({name, title, navigate, drawer}:IMenuItem) => {
    // const  { drawer } = useDrawer();

    // const { drawer } = useContext(DrawerContext)

    return <TouchableOpacity
    onPress={() => {
        drawer?.current?.closeDrawer()
        router.navigate(navigate)}}
    className="w-full py-2 pr-2  border-b
     border-gray-50/25 flex-row items-center
      justify-between">
        <View className="flex-row items-center pl-4">
            <Ionicons name={name} size={24} color="rgb(249, 250, 251)" />
            <Text className="ml-3 text-gray-50">{title}</Text>
        </View>
        <Ionicons name="arrow-forward-outline" size={24} color="rgb(249, 250, 251)" />
    </TouchableOpacity>
}