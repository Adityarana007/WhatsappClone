import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ChatList from '../../components/ChatList'
import VectorIcon from '../../utils/VectorIcon'
import { Colors } from '../../theme/colors'
import { IconsType } from '../../utils/constants'
import { styles } from './styles'

const ChatListScreen = () => {
  return (
    <View style={styles.outerConatiner}>
        <ScrollView>
        <ChatList/>

        </ScrollView>
        <TouchableOpacity style={styles.container}>
            <VectorIcon
                name={'message-reply-text'}
                type={IconsType.MaterialCommunityIcons}
                size={22}
                color={Colors.white}
            />
        </TouchableOpacity>
    </View>
  )
}

export default ChatListScreen
