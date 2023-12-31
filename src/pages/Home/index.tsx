import { useState,useEffect, useContext } from 'react';
import { api } from '../../services/api';
import * as C from './styled';
import { BsCartPlus,BsCartDash } from "react-icons/bs";
import { Products } from '../../types/Products';
import { CartContext } from '../../context/cartContext';




const Home = () => {

  const {addItemCart,removeItemCart} = useContext(CartContext)

   const [products,setProducts] = useState<Products[]>([])

   const getProducts = async () =>{
    const response = await api.get('/products');
    const data = response.data;
    setProducts(data)
   }

   useEffect(()=>{
    getProducts()
   },[])
   
   function handlerAddCartItem(item:Products){
    addItemCart(item)
   }

   function handlerRemoveCartItem(item:Products){
    removeItemCart(item)
   }

  return (
   <div>
     <main className="w-full max-w-7x1 px-4 mx-auto">
        <h1  className="font-bold text-2x1 mb-4 my-10 text-center">Produtos em Alta</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         { products.map((item)=>(
          <C.Container key={item.id} className="w-full">
          <img 
          className="w-full rounded-lg max-h-70 mb-2"
          src={item.cover}/>
          <p className="font-medium mt-1 mb-2"> {item.title} </p>
          <div className="flex gap-3 items-center">
          <button onClick={()=>handlerRemoveCartItem(item)}>
            <BsCartDash size={25} color='#d48dd0' />
           </button>
           <strong>
             {item.price.toLocaleString("pt-BR",{
              style:"currency",
              currency:"BRL"
             })}
           </strong>
           <button onClick={()=>handlerAddCartItem(item)}>
            <BsCartPlus size={25} color='#d48dd0' />
           </button>
         
          </div>
       </C.Container>
         ))}
        </div>
    </main>
   </div>
  )
}

export default Home