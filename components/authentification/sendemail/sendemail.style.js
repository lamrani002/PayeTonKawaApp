import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 300,
        height: 250,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    sendButton: {
        flex: 1,
        marginBottom:10,
        backgroundColor: 'black',
        color:'gray', 
        width: 20,
        backgroundColor: '#ffedd8',
        textShadowColor: 'black'
        
    },
    input: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        borderRadius: SIZES.small,
        height: 40,
        padding: 10,
        width: '100%'
    }

})

export default styles;