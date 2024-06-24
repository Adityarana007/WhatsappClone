import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    communtiyImage:{
        height: 150,
        width: 200
    },
    communityTextStyle:{
        fontSize: 26,
        color: Colors.white,
        fontWeight: '500',
        marginTop: 40
    },
    subText:{
        color: Colors.textGrey,
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 30,
        marginTop: 5,
        lineHeight: 22,
        letterSpacing: 0.6
    },
    btnStyle:{
        width: '80%',
        marginTop: 16
    }
})
