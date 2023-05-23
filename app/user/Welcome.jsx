import { View, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const Welcome = () => {
    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      };
    
      const currentDate = new Date(); 
    
  return (
    <>
        <View className="px-2 mt-2">
          <Text className="text-3xl font-bold">Hello Josh</Text>
          <Text className="text-gray-600 mt-1">{formatDate(currentDate)}</Text>
        </View>

        <View className="mx-4 mt-5 flex flex-row items-center bg-gray-100 rounded-full h-10 px-2">
            <TextInput className="flex-1 h-full" />
            <AntDesign name="search1" size={24} color="black" />
        </View>

    </>
  )
}

export default Welcome