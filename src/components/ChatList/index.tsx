import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import VectorIcon from '../../utils/VectorIcon';
import {ChatListData, IconsType} from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
const ChatList = () => {
    const navigation = useNavigation();
    const onNavigateChat = () => {
        navigation.navigate('ChatScreen');
    }
  return (
    <>
    {
        ChatListData.map(item => (
            <ScrollView key={item.id}>

            <TouchableOpacity style={styles.container} onPress={onNavigateChat}>
            <View style={styles.leftContainer}>
              <Image source={item.profile} style={styles.profileImg} />
              <View>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
            </View>
            <View  style={styles.rightContainer}>
              <Text style={styles.timeStamp}>{item.time}</Text>
              {
                item.mute && (
                    <VectorIcon
                    type={IconsType.MaterialCommunityIcons}
                    name="volume-variant-off"
                    size={22}
                    color={Colors.textGrey}
                />
                )
              }
             
            </View>
            
          </TouchableOpacity>
          </ScrollView>

        ))
    }
    </>
   
  );
};

export default ChatList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginRight: 15,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  username: {
    color: Colors.textColor,
    fontSize: 16,
  },
  message: {
    color: Colors.textGrey,
    fontSize: 14,
    marginTop: 5,
  },
  timeStamp: {
    color: Colors.textGrey,
    fontSize: 12,
  },
  rightContainer:{
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
