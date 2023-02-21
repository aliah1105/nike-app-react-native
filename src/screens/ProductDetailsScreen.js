import {
  StyleSheet,
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable
} from "react-native";
import products from "../data/products";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct)
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSlice.actions.addItem({ product: product }))
  }

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          {/* title */}
          <Text style={styles.title}>{product.name}</Text>
          {/* price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* add to cart button */}
    <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
    </Pressable>
      {/* navigation icone */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.3,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  }
});

export default ProductDetailsScreen;
