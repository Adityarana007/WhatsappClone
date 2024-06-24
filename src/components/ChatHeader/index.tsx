import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Profile from '../../assets/images/user1.jpg';
import VectorIcon from '../../utils/VectorIcon';
import {IconsType} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <VectorIcon
          name="arrow-back"
          type={IconsType.Ionicons}
          size={24}
          color={Colors.white}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image source={Profile} style={styles.profilephoto} />
        <Text style={styles.username}>username</Text>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <VectorIcon
          name="videocam"
          type={IconsType.Ionicons}
          size={24}
          color={Colors.white}
        />
        <VectorIcon
          name="phone-alt"
          type={IconsType.FontAwesome5}
          size={16}
          color={Colors.white}
          style={{marginHorizontal: 20}}
        />
        <VectorIcon
          name={'dots-three-vertical'}
          type={IconsType.Entypo}
          size={16}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  profilephoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  username: {
    color: Colors.white,
    fontSize: 17,
    marginLeft: 10,
  },
});
