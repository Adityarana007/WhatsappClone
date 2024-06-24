import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ViewedStatusData } from '../../utils/constants'
import { Colors } from '../../theme/colors'

const ViewedStatus = () => {
  return (
    <>
      <Text style={styles.recentText}>Viewed updates</Text>
  {
    ViewedStatusData.map(item => (
      <View>
      <View style={styles.statusView}>
        <View style={styles.imageStory}>
          <Image source={item.storyImg} style={styles.statusStyle}/>
        </View>
        <View style={styles.usernameTimeView}>
          <Text style={styles.recentStatusText}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
    ))
  }
   
    </>
  )
}

export default ViewedStatus

const styles = StyleSheet.create({
  recentText:{
    color: Colors.textGrey,
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 10

  },
  statusStyle:{
    height: 42,
    width: 42,
    borderRadius: 50
  },
  statusView:{
    flexDirection: 'row',
    marginBottom: 15
  },
  imageStory:{
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderWidth:2,
    borderRadius: 50,
    borderColor: Colors.textGrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recentStatusText:{
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500'
  },
  time:{
    color: Colors.textGrey,
    fontSize: 13,

  },
  usernameTimeView:{
    marginLeft: 15
  }
})