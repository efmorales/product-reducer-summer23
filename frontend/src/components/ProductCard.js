import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
        <h2><u>{props.title}</u></h2>
       
    </div>
  )
}

export default ProductCard