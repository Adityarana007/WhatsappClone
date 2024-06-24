import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import ChatListScreen from '../screens/ChatListScreen';
import StatusListScreen from '../screens/StatusListScreen';
import CallListScreen from '../screens/CallListScreen';
import { Colors } from '../theme/colors';
import VectorIcon from '../utils/VectorIcon';
import { IconsType, TabBarData } from '../utils/constants';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
    console.log('TabBarData__', TabBarData)
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: Colors.primaryColor
        },
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {
            backgroundColor: Colors.tertiary
        }
    }}>
        <Tab.Screen name="Community" component={CommunityScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color}) => (
            <VectorIcon type={IconsType.FontAwesome} name="users" color={color} size={20} />
        )
      }} />
      {
        TabBarData.map(tab => (
            <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
        ))
      }
    </Tab.Navigator>
  )
}

export default TopTabBar

const styles = StyleSheet.create({})