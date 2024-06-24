import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import TopTabBar from '../../navigation/TopTabBar'

const HomeScreen = () => {
  return (
    <>
      <Header/>
      <TopTabBar/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})