import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Homepage = () => {
    const elements =[
        {
            id: 1,
            month: 'JUL16',
            place: 'DETROIT, MI',
            title: 'DTE ENERGY MUSIC THEATRE',
        },
        {
            id: 2,
            month: 'JUL19',
            place: 'TORONTO,ON',
            title: 'BUDWEISER STAGE',
        },
        {
            id: 3,
            month: 'JUL 22',
            place: 'BRISTOW, VA',
            title: 'JIGGY LUBE LIVE',
        },
        {
            id: 4,
            month: 'JUL 29',
            place: 'PHOENIX, AZ',
            title: 'AK-CHIN PAVILION',
        },
        {
            id: 5,
            month: 'AUG 2',
            place: 'LAS VEGAS, NV',
            title: 'T-MOBILE ARENA',
        },
        {
            id: 6,
            month: 'AUG 7',
            place: 'CONCORD, CA',
            title: 'CONCORD PAVILION',
        },
    ]
  return (
    <div>
        <div className="nav justify-content-center bg-dark text-white">
            <NavLink to="/Homepage" className='navbar-toggler p-3 fw-bold' >HOME</NavLink>
            <NavLink to="/Store" className='navbar-toggler p-3 fw-bold' >STORE</NavLink>
            <NavLink to="/About" className='navbar-toggler p-3 fw-bold' >ABOUT</NavLink>
            <NavLink to="/login" className='navbar-toggler p-3 fw-bold' >Login</NavLink>
            <NavLink to="/ContactUs" className='navbar-toggler p-3 fw-bold' >Contact Us</NavLink>
        </div>
        <div className="p-5 mb-3 bg-secondary text-white">
            <h1 className='text-center'>The Generics</h1>
            <div className='pt-5 d-flex justify-content-center'><h3 className='text-center border border-primary p-3 w-50'>Get our Latest Album</h3></div>
        </div>
        <div className='py-5'>
            <h3 className='text-center'>TOURS</h3>
            {elements.map(item => (
                <div className='p-1 d-flex justify-content-center' key={item.id}>
                    <label className='px-4'>{item.month}</label>
                    <label className='px-4'>{item.place}</label>
                    <label className='px-4'>{item.title}</label>
                    <button className='btn btn-info'>BUY TICKETS</button>
                </div>
            ))}
        </div>
        <Footer />
    </div>
  )
}

export default Homepage