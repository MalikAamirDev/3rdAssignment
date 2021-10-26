import React from 'react'

function Menu({menuItem}) {
    
    return (
        <>                            
            {
                menuItem.map((item)=>
                <div className="card" key={item.id}>
                    <div className="card_img">
                    <img src={item.thumb} />
                    </div>
                    <div className="card_body">
                        <h2 className="card_heading">{item.product_name}</h2>
                        <p className="description">{item.description}</p>
                        <p className='price'>{item.price} <span>{item.currency}</span></p>
                        <a className='buybutton' href="/">Buy Now</a>
                    </div>
                </div>    
            ) 
            }
        </>
    )
}

export default Menu
