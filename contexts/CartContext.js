import { Cart } from "@/api";
import { createContext, useEffect, useState } from "react";

const cartCtrl = new Cart();

export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await cartCtrl.getCart();

    if(response) {
      setCart(response.products);
      updateTotal(response.products);
      setAmount(response.total)
    }
    
  };

  const updateTotal = (cartData) => {
    const totalQuantity = cartData
      ? cartData.reduce((sum, item) => sum + item.quantity, 0)
      : 0;
    setTotal(totalQuantity);
  };

  const addItem = async (id) => {
    await cartCtrl.addItem(id);
    getAll();
  };

  const deleteItem = async (id) => {
    await cartCtrl.deleteItem(id);
    getAll();
  };

  const clearCart = async () => {
    await cartCtrl.clearCart();
    setCart(null)
    setTotal(0)
    setAmount(0)
  };

  const refreshCart = () => {
    setCart(null)
    setTotal(0)
    setAmount(0)
  }

  const data = {
    cart,
    addItem,
    total,
    amount,
    deleteItem,
    clearCart,
    refreshCart
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
