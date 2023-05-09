import { View, Text } from 'react-native';
import styles from './stockstatus.style';
import tinycolor from 'tinycolor2';


const StockStatus = ({ stock, couleur }) => {

    const hexColor = tinycolor(couleur).toHexString();
    return (
        <>
       
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>Etat du stock :</Text>
            {stock === 0 && (
            <Text style={[styles.text, styles.red]}>Stock épuisé</Text>
            )}
            {stock > 0 && stock < 10 && (
            <Text style={[styles.text, styles.gray]}>
                Plus que quelques unités restantes ({stock})
            </Text>
            )}
            {stock >= 10 && (
            <Text style={[styles.text, styles.green]}>En stock</Text>
            )}

        </View>
        <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <Text style={styles.title}>Couleur :</Text>
            <View style={[styles.circle, { backgroundColor: hexColor }]}></View>
            <Text style={styles.color}>{couleur}</Text>
        </View>
        </>
    );
  };


export default StockStatus;
