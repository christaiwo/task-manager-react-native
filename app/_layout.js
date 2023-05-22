import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <>
        <StatusBar style='auot'/>
        <Stack/>
    </>
  )
}

export default _layout