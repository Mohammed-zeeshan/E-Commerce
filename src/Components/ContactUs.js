import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
  const nameHandler = (event) => {
    setName(event.target.value)
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const phoneHandler = (event) => {
    setPhone(event.target.value)
  }
  
    function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    addMovieHandler(data)
  }
  async function addMovieHandler(movie) {
    const resonpse = await fetch('https://react-http-9c92c-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-Type': 'application/json'
      }
    })
    const data = await resonpse.json();
    console.log(data)
  }
  return (
    <div>
        <div className="nav justify-content-center bg-dark text-white">
            <NavLink to="/Homepage" className='navbar-toggler p-3 fw-bold' >HOME</NavLink>
            <NavLink to="/Store" className='navbar-toggler p-3 fw-bold' >STORE</NavLink>
            <NavLink to="/About" className='navbar-toggler p-3 fw-bold' >ABOUT</NavLink>
            <NavLink to="/login" className='navbar-toggler p-3 fw-bold' >Login</NavLink>
            <NavLink to="/ContactUs" className='navbar-toggler p-3 fw-bold' >Contact Us</NavLink>
        </div>
        <form onSubmit={submitHandler} className='container'>
        <div className=' d-flex justify-content-center'>
            <div className='p-5'>
                <label className='p-2'>Name</label>
                <input type='text' className='border border-info rounded-2' value={name} onChange={nameHandler} />
            </div>
            <div className='p-5'>
                <label className='p-2'>Email</label>
                <input type='text' className='border border-info rounded-2' value={email} onChange={emailHandler} />
            </div>
            <div className='p-5'>
                <label className='p-2'>Phone</label>
                <input type='text' className='border border-info rounded-2' value={phone} onChange={phoneHandler} />
            </div>
        </div>
        <div  className=' d-flex justify-content-center'><button className='btn btn-primary'>submit</button></div>
        </form>
    </div>
  )
}

export default ContactUs