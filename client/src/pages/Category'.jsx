import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


const Category = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
        <img src={props.banner} alt="" />
    </div>
  )
}

export default Category