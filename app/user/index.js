import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderLeft, HeaderRight } from './Header'

const index = () => {


  return (
    <>
      <Stack.Screen options={{  
          headerStyle: { backgroundColor: '#E5E5E5'},
          headerLeft: () => (<HeaderLeft/>),
          headerRight: () => (<HeaderRight/>),
          headerTitle: '',
      }} />

      <SafeAreaView className="bg-[#E5E5E5] h-full w-full px-2">
        <View>
          <Text className="text-xl font-bold">Hello Josh</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default index