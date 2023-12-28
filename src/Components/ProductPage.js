import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const ProductPage = () => {
    const params = useParams();
    console.log(params.productid);
    const [product, setProduct] = useState([]);
    const productsArr = [

      {

      id: 'e1',
      
      title: 'Colors',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      
      },
      
      {

      id: 'e2',
      
      title: 'Black and white Colors',
      
      price: 50,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      
      },
      
      {
      
      id: 'e3',

      title: 'Yellow and Black Colors',
      
      price: 70,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      
      },
      
      {

      id: 'e4',
      
      title: 'Blue Color',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      
      }
      
      ]
      const buttonHandler = () => {
        for (let key in productsArr){
          if (productsArr[key].id === params.productid){
            console.log(productsArr[key]);
            setProduct(productsArr[key]);
          }
        }
      }
      useEffect(() => {
        buttonHandler();
      }, []);
  return (
    <section>
      <div className="nav justify-content-center bg-dark text-white">
            <NavLink to="/Homepage" className='navbar-toggler p-3 fw-bold' >HOME</NavLink>
            <NavLink to="/Store" className='navbar-toggler p-3 fw-bold' >STORE</NavLink>
            <NavLink to="/About" className='navbar-toggler p-3 fw-bold' >ABOUT</NavLink>
            <NavLink to="/login" className='navbar-toggler p-3 fw-bold' >Login</NavLink>
            <NavLink to="/ContactUs" className='navbar-toggler p-3 fw-bold' >Contact Us</NavLink>
        </div>
      <div>
        <img className='h-100 w-50 p-5' src={product.imageUrl} alt='Product' />
      </div>
      <div className='p-5'>
        <h3>{product.title}</h3>
        <h6>$ {product.price}</h6>
      </div>
      <label>Comments:</label>
    </section>
  )
}

export default ProductPage