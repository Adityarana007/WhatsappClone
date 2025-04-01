import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/colors';
import Status1 from '../assets/images/status1.jpeg';
import User1 from '../assets/images/user1.jpg';
import VectorIcon from './VectorIcon';
import {IconsType} from './constants';
import ProgressBar from './ProgressBar';

const FullModal = props => {
  const {showStatusModal, setShowStatusModal, item, setTimeUp} = props;
  const updateModalStatus = () => {
    setShowStatusModal(prev => ({...prev, [item.id]: false}));
  };
  return (
    <View>
      <Modal
        visible={showStatusModal}
        animationType="fade"
        onRequestClose={updateModalStatus}>
        <View style={styles.container}>
          <ProgressBar setTimeUp={setTimeUp} />
          <View style={styles.topContainer}>
            <View style={styles.profileNameView}>
              <VectorIcon
                name="arrow-back"
                type={IconsType.Ionicons}
                size={24}
                color={Colors.white}
                onPress={() => {
                  // props.navigation.goBack();
                  // setTimeUp();
    setShowStatusModal(prev => ({...prev, [item.id]: false}));

                }}
              />
              <Image source={User1} style={styles.profileImg} />
              <Text style={styles.username}>Sameer</Text>
            </View>

            <VectorIcon
              name={'dots-three-vertical'}
              type={IconsType.Entypo}
              size={16}
              color={Colors.white}
            />
          </View>
            <Image source={Status1} style={styles.storyImg} />
            <Text style={styles.storyMsg}>My Latest Art</Text>
            <View style={styles.replySection}>
            <VectorIcon
              name={'chevron-small-up'}
              type={IconsType.Entypo}
              size={24}
              color={Colors.white}
            />
            <Text style={styles.replyText}>Reply</Text>

            </View>
        </View>
      </Modal>
    </View>
  );
};

export default FullModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    height: '100%',
    justifyContent: 'space-between',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  storyImg: {
    height: '75%',
    width: '100%',
  },
  storyMsg: {
    fontSize: 17,
    color: Colors.white,
    textAlign: 'center',
  },
  username: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  profileNameView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  replySection:{
    alignItems: 'center'
  },
  replyText:{
    fontSize: 15,
    color: Colors.white,
    marginBottom: 10,
    textAlign: 'center'
  }
});
