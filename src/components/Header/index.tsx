import {useContext} from 'react';
import { CartContext } from '../../context/cartContext';
import * as C from './styled';
import { NavLink } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";

const Header = () => {

  const {cartAmount} = useContext(CartContext)

  return (
    <C.Container>
      <NavLink to="/" style={{cursor:'pointer'}}>
      <C.ContainersIcons style={{fontSize:35,color:'#d48dd0'}}>Loja Prototipo</C.ContainersIcons>
      </NavLink>
      <C.ContainersIcons> 
        <NavLink className='relative' to='/cart' style={{cursor:'pointer'}}>
          {cartAmount > 0 && <div>
          <span className=''> {cartAmount} </span>
          </div>}
        <BsCart2 size={40} color='#d48dd0' />   
        </NavLink>
      </C.ContainersIcons>
    </C.Container>
  )
}

export default Header