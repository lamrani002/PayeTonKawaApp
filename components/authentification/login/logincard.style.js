import React from "react";
import { StyleSheet } from "react-native";
import { SIZES,FONT, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffedd8',
    },
    button: {
      backgroundColor: "#c9a227",
      width: '80%',
      height: 50,
      paddingVertical: 10,
      borderRadius: SIZES.medium,
      marginTop: 20,
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '900',
      fontFamily: FONT.regular,
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.medium,
    },
    emailContainer: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: SIZES.xLarge,
      height: 50,
    },
    emailWrapper: {
      flex: 1,
      backgroundColor: COLORS.lightWhite,
      margin: SIZES.xxLarge,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: SIZES.medium,
      height: "100%",
      width: '100%',
      borderWidth: 1,
      borderColor: 'gray',
    },
    emailInput: {
      fontFamily: FONT.regular,
      width: "100%",
      height: "100%",
      paddingHorizontal: SIZES.medium,
      color: COLORS.primary
    },
    title: {
      paddingTop: 10,
      fontSize: 14,
      fontFamily: FONT.regular,
      marginBottom: 0,
      color: COLORS.gray2,
      textDecorationLine:"underline"

    }
  });
export default styles;