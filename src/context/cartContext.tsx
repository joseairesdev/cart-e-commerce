import {createContext,ReactNode,useState} from 'react';
import { Products } from '../types/Products';

interface CartContextData {
    cart: CartProsps[],
    cartAmount:number,
    addItemCart:(newItem:Products)=>void,
    removeItemCart:(newItem:Products)=>void,
    removeCart:(product:Products)=>void

}

interface CartProsps {
    id:number,
    title:string,
    description:string,
    price:number,
    cover:string,
    amount:number,
    total:number
}


interface CartProviderProps {
    children:ReactNode
}

export const CartContext = createContext({} as CartContextData);



function CartProvider({children}:CartProviderProps){
    
    const [cart,setCart]=useState<CartProsps[]>([])

    function addItemCart(newItem:Products){
        const indexItem = cart.findIndex(item => item.id === newItem.id);
        if(indexItem !== -1){
          const cartList = cart;
          cartList[indexItem].amount = cartList[indexItem].amount + 1;
          cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
          setCart(cartList);
          totalResult(cartList)
          return;
        }

        const data = {
            ...newItem,
            amount:1,
            total:newItem.price
        }
        setCart(item => [...item,data])
        totalResult([...cart,data])
    }
    function removeItemCart(itemToRemove: Products) {
        const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
        setCart(updatedCart);
    }
    
    function removeCart(product:Products){
        const indexItem = cart.findIndex(item => item.id === product.id);

        if(cart[indexItem]?.amount > 1){
          const cartList = cart;
          cartList[indexItem].amount = cartList[indexItem].amount -1;
          cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
        }
        const remove = cart.filter(item => item.id !== product.id)
        setCart(remove)
        totalResult(remove)
    }

    function totalResult(item:Products[]){
        const myCart = item;
        const result = myCart.reduce((acc,obj)=>{return acc + obj.total},0)
        return result;
    }
    

    return(
        <CartContext.Provider value={{cart,cartAmount:cart.length,addItemCart,removeItemCart,removeCart}}>
           {children}
        </CartContext.Provider>
    )
}

export default CartProvider;