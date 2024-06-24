import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Community from '../../assets/images/community-img.png';
import { styles } from './styles';
import { String } from '../../assets/strings';
import Button from '../../components/Button/Button';

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.communtiyImage} source={Community}/>
      <Text style={styles.communityTextStyle}>{String.IntroducingCommunities}</Text>
      <Text style={styles.subText}>{String.EasilyOrganiseSubText}</Text>
        <Button title='Start your Community' btnStyle={styles.btnStyle}/>
    </View>
  )
}

export default CommunityScreen
