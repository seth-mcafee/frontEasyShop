import Link from 'next/link'
import React from 'react'

export function Product(props) {
  const { product } = props;
  const {id, name, image_url, price} = product;
  
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className='product_cart'>
            <img src={image_url} alt={name} width={250} height={250} />
            <p className='product_cart-title'>{name}</p>
            <p className='product_cart-price'>{price}€</p>

        </div>
      </Link>
    </div>
  )
}