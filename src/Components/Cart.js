import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CartContext from './Store/cart-context';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = (props) => {
    const [additems, setItems] = useState([])
    const cartctx = useContext(CartContext)
    let total = 0;
    const purchaseHander = (event) => {
        event.preventDefault();
        alert('Thanks for the purchase')
    }
    cartctx.items.forEach((item) => {
        total = total + item.price;
    })
    const load = async() => {
        const response = await axios.get(`https://crudcrud.com/api/782dae6c35f94ff1a830e1add8579727/itemslist${props.email}`)
        setItems(response.data);
    }
    useEffect(() => {
        load();
    }, []);
  return (
    <Modal className='modal' show={props.button} onHide={props.func}>
        <Modal.Header>
        <h1>CART</h1>
        <CloseButton onClick={props.func}/>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-around'>
            <label>ITEM</label>
            <label>PRICE</label>
            <label>QUANTITY</label>
        </div>
        {additems.map(item => (
        <div className='pb-2' key={item.id}>
            <img src={item.image} className='img-thumbnail w-25' alt='Product' rounded />
            <div className='d-flex justify-content-around'>
                <label>{item.title}</label>
                <label>{item.price}</label>
                <input style={{width: 30}} type='text' defaultValue={1}/>
                <button className="btn btn-danger">Remove</button>
            </div>
        </div>
    ))}
    <div className='d-flex justify-content-around'>
        <h3>Total: ${total}</h3>
        <button className='btn btn-primary' onClick={purchaseHander}>PURCHASE</button>
    </div>
    </Modal.Body>
</Modal>
  )
}

export default Cart