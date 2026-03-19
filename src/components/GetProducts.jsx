import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {useNavigate}  from 'react-router-dom'

const GetProducts = () => {

  // initializing hooks
  const[loading,setLoading]=useState("")
  const[error,SetError]=useState('')
  const[products,setProducts]=useState([])
  const navigate=useNavigate()


  // images store
  const img_url=("http://crispus.alwaysdata.net/static/images/")


  // fetching
const fetch_products=async()=>{
  setLoading('please wait...')

  try {

    // calling api
    const response=await axios.get("http://crispus.alwaysdata.net/api/getproductdetails")

    setProducts(response.data)
    console.log('response is',response)
    setLoading('')
    
    
  } catch (error) {
    setLoading('')
    SetError(error.message)
    
  }
    
    
    
  }
  // end of fetch function

  useEffect (()=>{
    fetch_products()
    },[])

  // DEPENDENCY ARRAY- ALLOWS FETCHING  ONCE---PRODUCTS

  
  return (
    <section className='row ' >

      <h1>Available products</h1>
      <p  className='text-danger'>{error}</p>
      <p className='text-warning'>{loading}</p>

      {/* // .map-allows iteration over each item  */}

      {products.map((product=>

      <div className='col-md-3 justify-content-center m-5'>

        <div className='card shadow' id='maincard'>

          <img src={img_url+product.product_photo } alt="" className='product_img' />

          <div className='card-body' id='cardbody'>

          <h4 className='text-success'>{product.product_name}</h4>
          <p  className='text-secondary'>{product.product_description}</p>
          <b  className='text-info'>ksh {product.product_cost}</b>
          <br />
          <input id='buybtn' type="submit" className='btn  form-control w-100 ' value='Buy' onClick={()=>navigate('/mpesa' ,{state:{product}})}/>

          </div>

          


        </div>









      </div>

      ))}







   </section>
  )
}



export default GetProducts