import { View, Text } from 'react-native'
import React from 'react'
import TaskCard from '../TaskCard'

const Upcoming = () => {
  return (
    <View className="px-4 mt-5">
      <Text className="text-2xl font-semibold">Upcoming</Text>
      <View className="mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </View>
    </View>
  )
}

export default Upcoming