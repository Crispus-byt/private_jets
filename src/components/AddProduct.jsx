import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

  const[product_name,setProductname]=useState('')

  const[product_description,setProductdescription]=useState('')

  const[product_cost,setProductcost]=useState('')

  const[product_photo,setProductphoto]=useState('')



  const[success,setSuccess]=useState('')

  const[loading,setLoading]=useState('')

  const[error,SetError]=useState('')


  const submit=async(e) =>{

    e.preventDefault()

    setLoading('Please wait...')


    try {

      const data=new FormData()
      data.append('product_name',product_name)
      data.append('product_description',product_description)
      data.append('product_cost',product_cost)
      data.append('product_photo',product_photo)



      const response=await axios.post('http://crispus.alwaysdata.net/api/addproducts',data)

      setLoading('')
      
      setSuccess(response.data.message)
      
      setProductname('')
      setProductdescription('')
      setProductcost('')
      setProductphoto('')
      
      
    } catch (error) {
      setLoading('')
      SetError(error.message)
      
    }


  }






  return (


    <section className='row justify-content-center ' id='add-product'>

      <div className='card shadow col-md-6' >

      <h1 className='text-warning'>Upload Products</h1>

      <form action="" onSubmit={submit} >

        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>



        <input type="text" placeholder='Enter product name ' className='form-control' value={product_name} onChange={(e)=>setProductname(e.target.value)} required/>

      <br />


      <textarea name="" id="" placeholder='Describe your product ' className='form-control' value={product_description} onChange={(e)=>setProductdescription(e.target.value)} required></textarea>
      <br />


      <input type="" placeholder='Enter product cost ' className='form-control' value={product_cost} onChange={(e)=>setProductcost(e.target.value)} required/>



      <br />

      <h5 className='text-warning'>Upload product photo</h5>
      <input
       type="file" 
       className='form-control' 
       accept='image/*'
       onChange={(e)=>setProductphoto(e.target.files[0])} required/>
      <br />

      <input type="submit" className='btn bg-info text-white form-control w-100' value='upload product' />
      <br />
      <br />











      </form>

      </div>




    </section>
  )
}

export default AddProduct