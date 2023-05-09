import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
        backgroundColor: "#FFF",
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
      },
    headText: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONT.bold,
    },
    contentBox: {
        marginVertical: SIZES.small,
    },
    circle: {
      width: 30,
      height: 30,
      borderRadius: 50,
      borderColor : 'gray',
      borderStyle:"solid",
      borderWidth: 1
    },
    text: {
      fontWeight: 'bold',
      textAlign: 'center',
     
    },
    red: {
      color: '#ff0000',
    },
    gray: {
      color: '#cccccc',
    },
    green: {
      color: '#008000',
    },
    title: {
        fontFamily:FONT.bold,
        color: COLORS.secondary,
        marginRight: 10,
       
    },
    color: {
        color: COLORS.gray,
        fontFamily: FONT.regular,
        marginLeft: 10,
        opacity: 0.6
    }
  });
  
  export default styles;
  