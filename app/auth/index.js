import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <>
      <Stack.Screen options={{  
        headerShown: false,
      }} />

      <SafeAreaView className="flex flex-col items-center">
        <View className="mt-10 mb-5">
          <Text className="font-bold text-3xl text-center">Welcome Back</Text>
          <Text className="text-sm text-light text-center">Login To your account</Text>
        </View>

        <TouchableOpacity>
          <Image source={require('../../assets/images/icons/google.png')} />
        </TouchableOpacity>
        
        <View className="flex flex-row items-center gap-5 mt-10">
          <View className="h-[2px] w-16 bg-neutral-400"></View>
          <Text className="text-lg text-neutral-400">Or login with</Text>
          <View className="h-[2px]  w-16 bg-neutral-400"></View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default index