import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <>
      <Stack.Screen options={{  
        headerTitle:'Create Task',
        headerShown:false
      }}/>
      <SafeAreaView>
      <View>
        <Text>index</Text>
      </View>
    </SafeAreaView>
    </>
  )
}

export default index