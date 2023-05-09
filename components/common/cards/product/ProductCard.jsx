import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./productcard.style";

const ProductCard = ({ product, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/arcade/64/null/product.png"
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {product?.name}
        </Text>

        <Text style={styles.jobType}>{product?.stock}</Text>
        <Text style={styles.jobType}>{product?.id}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
