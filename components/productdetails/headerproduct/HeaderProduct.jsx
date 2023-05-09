import React from "react";
import moment from 'moment';
import 'moment/locale/fr';
import { View, Text, Image } from "react-native";

import styles from "./headerproduct";

const HeaderProduct = ({ logo, prodTitle, dateCreated }) => {

  const currentDate = moment();
  const createdAt = moment(dateCreated);

  const daysDiff = currentDate.diff(createdAt, 'days');
  const monthsDiff = currentDate.diff(createdAt, 'months');
  const yearsDiff = currentDate.diff(createdAt, 'years');
 

  let message = '';
  if (daysDiff === 0) {
    message = 'Aujourd\'hui';
  } else if (daysDiff === 1) {
    message = 'Hier';
  } else if (daysDiff < 7) {
    message = `Il y a ${daysDiff} jours`;
  } else if (monthsDiff === 1) {
    message = 'Le mois dernier';
  } else if (monthsDiff > 1 && monthsDiff < 12) {
    message = `Il y a ${monthsDiff} mois`;
  } else if (yearsDiff === 1 && monthsDiff > 12) {
    message = 'L\'année dernière';
  } else {
    message = `Il y a ${yearsDiff} ans`;
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Image
          source={{uri: logo}}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.productSection}>
        <Text style={styles.productName}>{prodTitle}</Text>
      </View>

      <View style={styles.dateSection}>
        <Text style={styles.dateMsg}>{message} / </Text>
        <View style={styles.iconPosted}>
          <Image
            source={{uri :'https://img.icons8.com/ios-glyphs/30/null/upload-to-cloud.png'}}
            resizeMode='contain'
            style={styles.icon}
          />
         
        </View>
      </View>
    </View>
  );
};

export default HeaderProduct;
