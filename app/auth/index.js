import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import Login from './Login';
import Register from './Register';
import { KeyboardAvoidingView } from 'react-native';

const index = () => {
  const [currentRoute, setCurrentRoute] = useState('login');

  return (
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex:1 }}>
      <Stack.Screen options={{  
          headerShown: false,
      }} />

      <SafeAreaView >
        <ScrollView>

          <View className={`${Platform.OS == 'android' && 'mt-10'} "flex flex-col items-center px-2"`}>

            <View className="flex flex-row gap-3 mt-10 w-full px-3 items-center justify-center">
              <TouchableOpacity className={`${currentRoute === 'login' ?  'bg-blue-500 border-2 border-blue-500 ' : "border-2 border-blue-500 "} py-3 px-3 w-1/2 rounded-lg`} onPress={() => setCurrentRoute('login')}>
                  <Text className={`mx-auto font-bold text-xl ${currentRoute === 'login' ? 'text-white' : 'text-black'}`}>LOG IN</Text>
              </TouchableOpacity>
              <TouchableOpacity className={`${currentRoute === 'register' ?  'bg-blue-500 border-2 border-blue-500 ' : "border-2 border-blue-500 "} py-3 px-3 w-1/2 rounded-lg`} onPress={() => setCurrentRoute('register')}>
                  <Text className={`mx-auto font-bold text-xl ${currentRoute === 'register' ? 'text-white' : 'text-black'}`}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-10 mb-5">
              <Text className="font-bold text-3xl text-center">{currentRoute == 'login' ? 'Welcome Back' : 'Register an account'}</Text>
              <Text className="text-sm text-light text-center">{currentRoute == 'login' ? 'Login To your account': 'Register an account'}</Text>
            </View>

            <TouchableOpacity>
              <Image source={require('../../assets/images/icons/google.png')} />
            </TouchableOpacity>
            
            <View className="flex flex-row items-center gap-5 mt-10">
              <View className="h-[2px] w-16 bg-neutral-400"></View>
              <Text className="text-lg text-neutral-400">{currentRoute == 'login' ? 'Or login with' : 'Or register with'}</Text>
              <View className="h-[2px]  w-16 bg-neutral-400"></View>
            </View>
            
            <View className="mt-10 w-full">
              {currentRoute === 'login' ? (<Login/>) : (<Register/>)}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default index