import { useContext } from "react";
import { BsFillCartPlusFill,BsFillCartDashFill  } from "react-icons/bs";
import { CartContext } from "../../context/cartContext";


const Cart = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className='className="w-full max-w-7x1 px-4 mx-auto"'>
       <h1 style={{color:'#131d3b'}} className='font-medium text-2x1 text-center my-4'>Meu carrinho</h1>  
       {cart.map((item)=>(
        <section key={item.id} className='flex items-center justify-between border-b-2 border-gray-300'>
        <img
          className="w-28"
        src={item.cover}/>
        <strong style={{color:'#131d3b'}}>Preço: {item.price.toLocaleString("pt-BR",{
              style:"currency",
              currency:"BRL"
             })} </strong>
        <div className="flex items-center justify-center gap-3">
         <button className="px-2">
         <BsFillCartDashFill size={25} color='#d48dd0' />
         </button>
          <strong style={{color:'#131d3b'}}> {item.amount} </strong>
          <button>    
          <BsFillCartPlusFill size={25} color='#d48dd0' />
          </button>
        </div>
        <strong style={{color:'#131d3b'}}> SubTotal: {item.total.toLocaleString("pt-BR",{
              style:"currency",
              currency:"BRL"
             })}</strong>
      </section>
       ))}
       {!cart.length && <p className="font-bold mt-4"> Total: </p>}
    </div>
  )
}

export default Cart