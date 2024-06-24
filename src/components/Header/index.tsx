import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WhatsAppLogo from '../../assets/images/whatsapp-logo.png';
import {styles} from './styles';
import VectorIcon from '../../utils/VectorIcon';
import {Colors} from '../../theme/colors';
import {IconsType} from '../../utils/constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={WhatsAppLogo} style={styles.logoStyle} />
      <View style={styles.headerIconView}>
        <VectorIcon
          name={'camera'}
          type={IconsType.Feather}
          color={Colors.secondaryColor}
          size={20}
        />
        <VectorIcon
          name={'search'}
          type={IconsType.Ionicons}
          color={Colors.secondaryColor}
          size={20}
          style={styles.iconStyle}
        />
        <VectorIcon
          name={'dots-three-vertical'}
          type={IconsType.Entypo}
          color={Colors.secondaryColor}
          size={20}
        />
      </View>
    </View>
  );
};

export default Header;
