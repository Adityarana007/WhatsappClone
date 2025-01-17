import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import User3 from '../../assets/images/user1.jpg';
import {Colors} from '../../theme/colors';
import VectorIcon from '../../utils/VectorIcon';
import { IconsType } from '../../utils/constants';

const MyStatus = () => {
  return (
    <View style={styles.container}>
      <Image source={User3} style={styles.profileStyle} />
      <View style={styles.iconBg}>
      <VectorIcon
                name={'pluscircle'}
                type={IconsType.AntDesign}
                size={20}
                color={Colors.tertiary}
            />
      </View>

      <VectorIcon/>

      <View style={styles.statusContainer}>
        <Text style={styles.myStatus}>MyStatus</Text>
        <Text style={styles.addStatus}>Tap to add status update</Text>
      </View>
    </View>
  );
};

export default MyStatus;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  profileStyle: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  myStatus: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  addStatus: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3
  },
  iconBg:{
    backgroundColor: Colors.white,
    height: 20,
    width: 20,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 30
  },
  statusContainer:{
    marginLeft: 15
  }
});
