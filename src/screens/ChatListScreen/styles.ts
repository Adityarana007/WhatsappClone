import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    outerConatiner:{
        flex: 1,
        backgroundColor: Colors.background
    },
    container:{
        backgroundColor: Colors.tertiary,
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        right: 10
    },

})
