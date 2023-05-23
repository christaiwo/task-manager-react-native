import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const TaskDetail = () => {
  const { id } = useSearchParams();
  const router = useRouter();

  
  return (
    <SafeAreaView>
      <Text>TaskDetail {id}</Text>
    </SafeAreaView>
  )
}

export default TaskDetail