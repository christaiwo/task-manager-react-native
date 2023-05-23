import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderLeft, HeaderRight } from './Header'

const index = () => {
  return (
    <>
      <Stack.Screen options={{  
            headerStyle: { backgroundColor: '#E5E5E5'},
            headerShadowVisible: false,
            headerLeft: () => (<HeaderLeft/>),
            headerRight: () => (<HeaderRight/>),
            headerTitle: '',
        }} />
        <SafeAreaView className="bg-[#E5E5E5] h-full w-full">
          <Text>Hello</Text>
        </SafeAreaView>
    </>
  )
}

export default index