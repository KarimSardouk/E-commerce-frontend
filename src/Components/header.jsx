import React from 'react'
import cartimage from '../images/cartimage.png'
import profileimage from '../images/profileimage.png'
import dellimage from '../images/dell-inspiron.png'
import cart123 from '../images/cart123.png'

const header = () => {
  return (
    <div>
        <div className='header'>
        <ul className='header-ul'>
           <a href=""> <li>Home</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>Category</li></a>
            <a href=""><li>AllProducts</li></a>
            <div className='images12'>
                <a href=""><img src={cartimage} alt="" /></a>
            <a href=""> <img className='image-profile' src={profileimage} alt="" /></a>
           
            </div>

            </ul>
           
            </div>
            <div className='box-container'>
            <div>
                <div className='box-1'>
                    <img className='box-1-image' src={dellimage} alt="" />
                    <h2 className='box-1-name'>Dell Inspiron 15.6 Inch Ryzen 5</h2>
                    <h3 className='box-1-price'>600$</h3>
                    <div className='boxing123'>
                   <button className='box-1-product'> View Product</button> 
                   <div className='box-1-cart'>
                   <img  src={cart123} alt="" />
                   </div>
                   </div>

                </div>

            </div>
            <div>
                <div className='box-1'>
                    <img className='box-1-image' src={dellimage} alt="" />
                    <h2 className='box-1-name'>Dell Inspiron 15.6 Inch Ryzen 5</h2>
                    <h3 className='box-1-price'>600$</h3>
                    <div className='boxing123'>
                   <button className='box-1-product'> View Product</button> 
                   <div className='box-1-cart'>
                   <img  src={cart123} alt="" />
                   </div>
                   </div>

                </div>

            </div>
            <div>
                <div className='box-1'>
                    <img className='box-1-image' src={dellimage} alt="" />
                    <h2 className='box-1-name'>Dell Inspiron 15.6 Inch Ryzen 5</h2>
                    <h3 className='box-1-price'>600$</h3>
                    <div className='boxing123'>
                   <button className='box-1-product'> View Product</button> 
                   <div className='box-1-cart'>
                   <img  src={cart123} alt="" />
                   </div>
                   </div>

                </div>

            </div>
        




    </div>
    </div>
  )
}

export default header