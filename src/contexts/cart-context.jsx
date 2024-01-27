import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props){

    const [cartItems, setCartItems] = useState([]);

        function AddItemCart(item){
                setCartItems([...cartItems, item]);
        }

    return <CartContext.Provider value= {{cartItems, setCartItems, AddItemCart}}>
        {props.children}
    </CartContext.Provider>
}

export {CartContext, CartProvider};