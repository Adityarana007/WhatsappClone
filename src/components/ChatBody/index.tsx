import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {Colors} from '../../theme/colors';
import VectorIcon from '../../utils/VectorIcon';
import {DataMessage, IconsType, MessagesData} from '../../utils/constants';

const ChatBody = () => {
  const userId = '1jdfnvchjkd';
  const scrollRef = useRef();
  const UserMessageView = ({data}) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{data.message}</Text>
          <Text style={styles.time}>{data.time}</Text>
          <VectorIcon
            name="check-double"
            type={IconsType.FontAwesome6}
            size={12}
            color={Colors.blue}
            style={styles.doubleCheckStyle}
          />
        </View>
      </View>
    );
  };

  const OtherMessageView = ({data}) => {
    return (
      <View style={styles.OtherUserContainer}>
        <View style={styles.OtherUserInnerContainer}>
          <Text style={styles.message}>{data.message}</Text>
          <Text style={styles.time}>{data.time}</Text>
        </View>
      </View>
    );
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollToEnd({animated: true});
  };
  return (
    <>
      <ScrollView ref={scrollRef} onContentSizeChange={scrollToBottom}>
        {MessagesData.map(item => (
          <>
            {item.id == userId ? (
              <UserMessageView data={item} />
            ) : (
              <OtherMessageView data={item} />
            )}
          </>
        ))}
      </ScrollView>

        <View style={styles.scrollIcon}>
          <View style={styles.scrollDownArrow}>
            <VectorIcon
              name="angle-dobule-down"
              type={IconsType.Fontisto}
              size={12}
              color={Colors.textColor}
              onPress={scrollToBottom}
            />
          </View>
        </View>
    </>
  );
};

export default ChatBody;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  OtherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 13,
    color: Colors.white,
  },
  time: {
    fontSize: 9,
    color: Colors.textColor,
    marginLeft: 8,
  },
  doubleCheckStyle: {
    marginLeft: 5,
  },
  OtherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  spacer: {
    marginTop: 10,
  },
  scrollDownArrow: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollIcon:{
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
