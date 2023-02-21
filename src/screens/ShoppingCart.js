import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { selectDeliveryFee, selectSubtotal, selectTotal } from "../store/cartSlice";

const ShoppingCartTotals = () => {

  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryFee);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal: </Text>
        <Text style={styles.text}>{subtotal} US $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery: </Text>
        <Text style={styles.text}>{deliveryFee} $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total: </Text>
        <Text style={styles.textBold}>{total} $</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    padding: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: "gray",
    marginVertical: 4,
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ShoppingCart;
