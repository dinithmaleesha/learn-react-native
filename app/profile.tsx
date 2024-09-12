import { View, Text, TouchableOpacity } from 'react-native'
import Header from '@/layout/header'
import { Link } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

const Profile = () => {
  return (
    <View className='w-full flex-1'>
      <Header Left={
        <Link href={'/'} asChild>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={27} color="black" />
          </TouchableOpacity>
        </Link>
        }
        centerText='Profile'
      />
      <Text>Profile</Text>
    </View>
  )
}

export default Profile