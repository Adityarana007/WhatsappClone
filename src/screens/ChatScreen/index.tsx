import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatHeader from '../../components/ChatHeader'
import ChatBody from '../../components/ChatBody'
import ChatFooter from '../../components/ChatFooter'
import styles from './styles'
import Wallpaper from '../../assets/images/wallpaper2.jpg'

const ChatScreen = () => {
  return (
    <>
      <ChatHeader/>
      <ImageBackground source={Wallpaper} style={styles.wallpaper}>
      <ChatBody/>
      </ImageBackground>

      <ChatFooter/>
    </>
  )
}

export default ChatScreen
