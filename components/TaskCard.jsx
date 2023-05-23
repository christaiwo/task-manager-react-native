import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const TaskCard = () => {
    const router = useRouter();
  return (
    <TouchableOpacity className="bg-white w-full h-36 rounded-md shadow-lg p-2 my-3" onPress={() => router.push('/user/task/1')}>

        <View className="flex flex-col mt-3">
            <Text className="text-lg font-bold" numberOfLines={1}>Meeting with board</Text>
            <Text>Meeting with board</Text>
        </View>
        <View className="border border-gray-200 w-full my-3"></View>
        <View className="flex flex-row justify-between">
            <View className="flex flex-row items-center gap-2">
                <MaterialCommunityIcons name="clock-outline" size={24} color="#81A3ED" />
                <Text className="text-gray-400">08:00 - 12-30AM</Text>

            </View>
            <TouchableOpacity className="bg-[#3669cf] px-2 py-1 rounded-full" onPress={() => router.push('/user/task/1')}>
                <Text className="text-white font-light">Reschedule</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default TaskCard