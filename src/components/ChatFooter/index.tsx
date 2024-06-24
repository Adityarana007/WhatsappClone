import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import {IconsType} from '../../utils/constants';
import VectorIcon from '../../utils/VectorIcon';
import {Colors} from '../../theme/colors';

const ChatFooter = () => {
    const [message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false);

    const onMessageChange = (value) => {
        setMessage(value);
        if(value?.length > 0){
            setSendEnable(true)
        }else{
            setSendEnable(false)
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.row}>
          <VectorIcon
            name="emoji-emotions"
            type={IconsType.MaterialIcons}
            size={20}
            color={Colors.white}
          />
          <TextInput
            placeholder="Message"
            placeholderTextColor={Colors.textGrey}
            style={styles.textInput}
            onChangeText={onMessageChange}
            value={message}
          />
        </View>
        <View style={styles.row}>
            {
                sendEnable ? (
                    <VectorIcon
                    name="attachment"
                    type={IconsType.Entypo}
                    size={20}
                    color={Colors.white}
                  />
                ) : (
                    <>
                    <VectorIcon
                    name="attachment"
                    type={IconsType.Entypo}
                    size={20}
                    color={Colors.white}
                  />
        
                  <VectorIcon
                    name="rupee"
                    type={IconsType.FontAwesome}
                    size={20}
                    color={Colors.white}
                    style={styles.iconStyle}
                  />
                  <VectorIcon
                    name="camera"
                    type={IconsType.FontAwesome}
                    size={20}
                    color={Colors.white}
                  />
                    </>

                )
            }
         
        </View>
      </View>
      <View style={styles.rightContainer}>
        
        {
            sendEnable ?(
<VectorIcon
          name="send"
          type={IconsType.MaterialCommunityIcons}
          size={25}
          color={Colors.white}
        />
            ) : (
                <VectorIcon
          name="microphone"
          type={IconsType.MaterialCommunityIcons}
          size={25}
          color={Colors.white}
        />
            )
        }
        
      </View>
    </View>
  );
};

export default ChatFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12
  },
  leftContainer: {
    width: '85%',
    flexDirection: 'row',
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    backgroundColor: Colors.teal,
    padding: 10,
    borderRadius: 50
  },
  textInput: {
    // borderWidth: 1,
    color: Colors.textColor
  },
  iconStyle: {
    marginHorizontal: 25,
  },
});
