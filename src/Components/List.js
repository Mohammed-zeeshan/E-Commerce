import React from 'react'
import Item from './Item'

const List = (props) => {
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
        
  return (
    <div>
        <div className='container pt-5'>
            <h3 className='text-center'>MUSIC</h3>
                <div className='row row-cols-1 row-cols-md-2 g-4 py-5 ps-5'>
                    {productsArr.map((item) => (
                        <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.imageUrl}
                        price={item.price}
                        email={props.email}
                        />
                    ))}
                </div>
        </div>
        <div>
            <h3 className='text-center'>MERCH</h3>
        </div>
    </div>
  )
}

export default List