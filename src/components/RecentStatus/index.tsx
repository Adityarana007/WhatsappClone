import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../theme/colors';
import Status from '../../assets/images/status1.jpeg';
import {RecentStatusData} from '../../utils/constants';
import FullModal from '../../utils/FullModal';

const RecentStatus = () => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const onStatusPress = (itemId) => {
    setShowStatusModal(prev => ({...prev, [itemId]: true}));

  };

  const setTimeUp = itemId => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };
  return (
    <>
      <Text style={styles.recentText}>Recent updates</Text>
      {RecentStatusData.map(item => (
        <>
          <TouchableOpacity onPress={() => onStatusPress(item.id)}>
            <View style={styles.statusView}>
              <View style={styles.imageStory}>
                <Image source={item.storyImg} style={styles.statusStyle} />
              </View>
              <View style={styles.usernameTimeView}>
                <Text style={styles.recentStatusText}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <FullModal
            item={item}
            setTimeUp={() => setTimeUp(item.id)}
            showStatusModal={showStatusModal[item.id]}
            setShowStatusModal={(value) => setShowStatusModal(prev => ({...prev, [item.id]: value})) } 
          />
        </>
      ))}
    </>
  );
};

export default RecentStatus;

const styles = StyleSheet.create({
  recentText: {
    color: Colors.textGrey,
    fontSize: 14,
    paddingTop: 20,
    paddingBottom: 10,
  },
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  statusView: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  imageStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentStatusText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  time: {
    color: Colors.textGrey,
    fontSize: 13,
  },
  usernameTimeView: {
    marginLeft: 15,
  },
});
