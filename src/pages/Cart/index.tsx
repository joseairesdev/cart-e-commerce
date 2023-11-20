import { BsFillCartPlusFill,BsFillCartDashFill  } from "react-icons/bs";

const Cart = () => {
  return (
    <div className='className="w-full max-w-7x1 px-4 mx-auto"'>
       <h1 style={{color:'#131d3b'}} className='font-medium text-2x1 text-center my-4'>Meu carrinho</h1>  
       <section className='flex items-center justify-between border-b-2 border-gray-300'>
         <img
           className="w-28"
         src='https://d1sfzvg6s5tf2e.cloudfront.net/Custom/Content/Products/53/86/5386_fone-jbl-wave-200-tws-black_m1_638119701452193420.jpg'/>
         <strong style={{color:'#131d3b'}}>Preço: R$1.000</strong>
         <div className="flex items-center justify-center gap-3">
          <button className="px-2">
          <BsFillCartDashFill size={25} color='#d48dd0' />
          </button>
           <strong style={{color:'#131d3b'}}>2</strong>
           <button>    
           <BsFillCartPlusFill size={25} color='#d48dd0' />
           </button>
         </div>
         <strong style={{color:'#131d3b'}}> SubTotal: 1.000 </strong>
       </section>
    </div>
  )
}

export default Cart