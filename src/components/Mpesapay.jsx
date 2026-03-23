
import React, {useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const Mpesapay = () => {

    const[loading,setLoading]=useState("")
    const[error,SetError]=useState('')
    const[success,setSuccess]=useState("")
    const[phone,setPhone]=useState('')

    // parsed data-allows navigation of an item ----
    // useLocation-receives parsed data from another component

    // receiving parsed data
    const{product}=useLocation().state || {}

     const img_url=("http://crispus.alwaysdata.net/static/images/")
    


    const submit=async(e)=>{

        e.preventDefault()

        setLoading('please wait...')




      try {

        const data=new FormData()
        data.append('phone',phone)
        data.append('amount',product.product_cost)

        
        const response=await axios.post('http://crispus.alwaysdata.net/api/mpesa_payment',data)
        
        setLoading('')
        setSuccess(response.data.message) 


        setPhone('')


        
      } catch (error) {
        setLoading('')
        SetError(error.message)
        
      }

    }
     





  return (
  <section className='row justify-content-center mt-4'>

    <div  className='card shadow col-md-8' id='mpesacard'>

    <form  action="" onSubmit={submit}>


      <h2>Make payments</h2>
      <p className='text-success'>{product.product_name}</p>
      <img id='card1' src={img_url+product.product_photo } alt="" className='product_img' />
      <p className='text-dark'>{product.product_description}</p>
      <p className='text-info'>ksh {product.product_cost}m</p>

      <p className='text-success'>{success}</p>
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      <input type="text" className='form-control' placeholder='Enter phone number' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
      <br />
      
      <input id='buybtn' type="submit"  value={'Make payment'} className='w-100 form-control' />
      <br />


    </form>

    </div>




  </section>
  )
}

export default Mpesapay