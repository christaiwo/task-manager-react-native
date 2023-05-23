import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

const _layout = () => {
  return (
    <>
    <Tabs screenOptions={{  
        headerShown:true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#81A3ED',
        tabBarAllowFontScaling: true,
    }}
    > 
        <Tabs.Screen name='dashboard/index'  options={{  
          tabBarIcon: ({color}) => <MaterialIcons name="dashboard" size={30} color={color} />
        }}  />
        
        <Tabs.Screen name='create-task'  options={{  
          tabBarIconStyle: {marginBottom: 20, position: 'absolute', top:-50, height: 100, width: 100},
          tabBarIcon: ({color}) => <AntDesign name="pluscircle" size={40} color={color} />,
          tabBarActiveTintColor: '#3669cf',
        }}  />

        <Tabs.Screen name='task'  options={{  
          tabBarIcon: ({color}) => <Entypo name="list" size={30} color={color} />
        }}  />
    </Tabs>
    </>
  )
}

export default _layout

