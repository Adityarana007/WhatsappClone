import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    logoStyle:{
        height: 25,
        width: 110
    },
    headerIconView:{
        flexDirection: 'row'
    },
    iconStyle:{
        marginHorizontal: 20
    }
})
