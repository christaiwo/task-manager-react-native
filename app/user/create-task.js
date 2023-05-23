import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const CreateTask = () => {
  return (
    <SafeAreaView>
        <Stack.Screen options={{  
            headerTitle: "Create Task",
            headerLeft: () => (<Ionicons name="chevron-back-outline" size={24} color="black" />),
        }} />
        <ScrollView>
            <Text>Hey</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CreateTask