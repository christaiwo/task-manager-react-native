import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderLeft, HeaderRight } from './Header';
import { AntDesign } from '@expo/vector-icons';
import Welcome from './Welcome';


const index = () => {
  return (
    <>
      <Stack.Screen options={{  
          headerStyle: { backgroundColor: '#E5E5E5'},
          headerLeft: () => (<HeaderLeft/>),
          headerRight: () => (<HeaderRight/>),
          headerTitle: '',
      }} />

      <SafeAreaView className="bg-[#E5E5E5] h-full w-full">
        <Welcome/>

        
      </SafeAreaView>
    </>
  )
}

export default index