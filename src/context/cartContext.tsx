import {createContext,ReactNode,useState} from 'react';

interface CartContextData {
    cart: CartProsps[],
    cartAmount:number
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
    
    const [cart]=useState<CartProsps[]>([])

    return(
        <CartContext.Provider value={{cart,cartAmount:cart.length}}>
           {children}
        </CartContext.Provider>
    )
}

export default CartProvider;