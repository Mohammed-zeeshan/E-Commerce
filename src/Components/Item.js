import React, { useContext } from 'react'
import CartContext from './Store/cart-context';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const Item = (props) => {
    const cartCtx = useContext(CartContext)
    const data = {
        id: Math.random().toString(),
        title: props.title,
        image: props.image,
        price: props.price,
        quantity: 1,
    }
    const AddHandler = async(event) => {
        event.preventDefault();
        cartCtx.addItem(data)
        try {
            await axios.post(`https://crudcrud.com/api/782dae6c35f94ff1a830e1add8579727/itemslist${props.email}`,data)
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div>
        <div className='col'>
            <div className='card border-0' style={{width: 270}}>
                <NavLink to={`/ProductPage/${props.id}`}>
                    <label className='text-center card-title'>{props.title}</label>
                    <img src={props.image} alt='Products' className='p-3 img-fluid' />
                    <div className='d-flex justify-content-around mb-3'>
                        <label>$ {props.price}</label><button className='btn btn-primary' onClick={AddHandler}>ADD TO CART</button>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Item