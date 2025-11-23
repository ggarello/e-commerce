import { createContext, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../data/db.js";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const cartLocalStorage = JSON.parse(localStorage.getItem("cart_e-commerce"));
  const [cart, setCart] = useState(cartLocalStorage || []);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart_e-commerce", JSON.stringify(cart));
  }, [cart]);

  const getProduct = async (id) => {
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);

      if (!dataDb.exists()) return null;

      return { id: dataDb.id, ...dataDb.data() };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const addProduct = async (idProduct, cantidad) => {
    const product = await getProduct(idProduct);
    if (!product) return;

    setCart((prev) => {
      if (prev.some((item) => item.idProduct === idProduct)) {
        return prev.map((item) =>
          item.idProduct === idProduct
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }

      return [
        ...prev,
        {
          idProduct: product.id,
          title: product.name,
          price: product.price,
          photo: product.photos.direction,
          cantidad,
        },
      ];
    });
  };

  const deleteProduct = (idProduct) => {
    setCart(cart.filter((item) => item.idProduct !== idProduct));
  };

  const totalItems = () =>
    cart.reduce((acc, item) => acc + item.cantidad, 0);

  const totalDifferentItems = () => cart.length;

  const totalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const deleteCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        deleteProduct,
        deleteCart,
        totalItems,
        totalDifferentItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };