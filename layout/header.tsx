import { View, Text } from 'react-native'

interface Header {
    Left?: React.ReactNode;
    Center?: React.ReactNode;
    centerText?:string;
    Right?: React.ReactNode;
}

const Header = ({Left, Center, centerText, Right}:Header) => {
  return (
    <View style={{elevation: 5}} className='w-full h-[70px] bg-gray-300 flex-row
    items-end justify-between pb-3 px-5'>
        {Left?Left: <View/>}
        {Center?Center: centerText?<Text className='text-2xl font-semibold'>{centerText}</Text>:<View/>}
        {Right?Right: <View/>}
    
    </View>
  )
}

export default Header