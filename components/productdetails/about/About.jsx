import { View, Text, processColor } from "react-native";

import styles from "./about.style";
import { COLORS, FONT } from "../../../constants";
import StockStatus from "../stock/StockStatus";
import { useState,useEffect } from "react";


const About = ({ price, description,stock, color }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Détails:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}><Text style={styles.title}>Prix :</Text> {price} €</Text>
        <Text style={styles.title}>Description :</Text>
        <Text style={styles.contextText}>{description}</Text>

        {/* eta du stock et couleur du produit  */}
        <StockStatus stock={stock} couleur={color}/>
      </View>

    </View>
  );
};

export default About;
