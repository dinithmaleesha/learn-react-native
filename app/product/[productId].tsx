import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const SingleProduct = () => {
    const params = useLocalSearchParams()
    console.log(params)
  return (
    <View>
      <Text>SingleProduct</Text>
      <Text>{params.name}</Text>
    </View>
  )
}

export default SingleProduct