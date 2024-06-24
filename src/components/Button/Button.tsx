import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../theme/colors';

interface Props {
    onPress?: () => void;
    title?: string;
    btnStyle?: any;
}

const Button = ({onPress, title, btnStyle}: Props) => {
    const handleBtnPress = () => {
        if(onPress !== undefined) {
            onPress();
        }
    } 
    return(
        <Pressable onPress={handleBtnPress} style={[styles.buttonView, btnStyle]}>
            <Text style={styles.titleStyle}>{title}</Text>
        </Pressable>
    )
};

export default Button;

const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: Colors.tertiary,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        paddingHorizontal: 16
    },
    titleStyle:{
        fontSize: 18,
        color: Colors.background,
        textAlign: 'center'
    }
})