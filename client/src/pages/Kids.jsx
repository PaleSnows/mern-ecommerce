import React from 'react'
import banner from '../assets/banner_kids.png'
import { useDispatch } from 'react-redux'
import { displayBanner } from '../redux/clothes/clothSlice'
import all_product from '../assets/all_product.js'

const Kids = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <img src={banner} alt="" />
      <div className="">
        
      </div>
    </div>
  )
}

export default Kids