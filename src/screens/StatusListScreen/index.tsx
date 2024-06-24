import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyStatus from '../../components/MyStatus'
import RecentStatus from '../../components/RecentStatus'
import ViewedStatus from '../../components/ViewedStatus'
import { Colors } from '../../theme/colors'

const StatusListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <MyStatus/>
      <RecentStatus/>
      <ViewedStatus/>
      </ScrollView>

    </View>
  )
}

export default StatusListScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.background,
        padding: 12,
        flex: 1
    }
})