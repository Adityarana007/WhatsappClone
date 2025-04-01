import {Animated, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {Colors} from '../theme/colors';

const ProgressBar = ({setTimeUp}) => {
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const animateProgress = () => {
        Animated.timing(progressAnimation, {
            toValue: 100,
            duration: 10000,
            useNativeDriver: false
        }).start(({finished}) => {
            if(finished){
                setTimeUp();
                console.log("Animation stopped and progress bar is full.")
            }
        })
    }
    useEffect(() => {
        animateProgress();
    }, [])
  return (
    <View style={styles.container}>
        <View style={styles.progressBackground}>
        <Animated.View style={[styles.progress, {
        width: progressAnimation.interpolate({
            inputRange: [0,100],
            outputRange: ['0%', '100%']
        })
      }]} />
        </View>
     
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  progress: {
    width: '100%',
    height: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  progressBackground:{
    width: '100%',
    height: 5,
    backgroundColor: Colors.grey2,
    borderRadius: 5,

  }
});
