import { useState } from 'react';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from './Store/cart-context';

const Header = (props) => {
    const cartctx = useContext(CartContext);
    let quantity = 0;
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    cartctx.items.forEach((item) => {
      quantity = quantity + item.quantity
    })
  return (
    <>
      <div className="nav justify-content-center bg-dark text-white">
        <NavLink to="/Homepage" className='navbar-toggler p-3 fw-bold' >HOME</NavLink>
        <NavLink to="/Store" className='navbar-toggler p-3 fw-bold' >STORE</NavLink>
        <NavLink to="/About" className='navbar-toggler p-3 fw-bold' >ABOUT</NavLink>
        <NavLink to="/login" className='navbar-toggler p-3 fw-bold' >Login</NavLink>
        <NavLink to="/ContactUs" className='navbar-toggler p-3 fw-bold' >Contact Us</NavLink>
        <div className='position-absolute end-0 d-flex justify-content-around'><button className='btn btn-outline-primary' onClick={handleShow}>cart</button><p>{quantity}</p></div>
      </div>
      <Cart button={show} email={props.email} func={handleHide} />
    </>
  )
}

export default Header