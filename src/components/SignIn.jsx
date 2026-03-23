import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SignIn = () => {

    

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');


  // after input

  const[loading,setLoading]=useState('');
  const[success,setSuccess]=useState('');
  const[error,SetError]=useState('');


  const navigate = useNavigate();


 
  
  const submit=async(e)=>{

    e.preventDefault();

    setLoading("please wait...");

    try {

      const data=new FormData();
      data.append("email",email);
      data.append("password",password);

      // calling api
      const response=await axios.post('http://crispus.alwaysdata.net/api/signin',data);

      setLoading('');

      if (response.data.user) {
        // if user is found store user details in local storage
        localStorage.setItem('user',JSON.stringify(response.data.user));
        setSuccess(response.data.message)

        setEmail('');
        setPassword('');
        // redirect to /getproducts component
        
        setTimeout(()=>{

          navigate('/');
        },2000)



      }
      else{
        SetError(response.data.message);
      }
      // reset form

      
    } catch (error) {
      setLoading('');
      SetError(error.message);
      
    }


    



    
  }


  return (
     <section className='row justify-content-center ' id='add-product'>

    

      <div className='card shadow col-md-6' >

        <h1 className='text-dark
        '>SignIn</h1>

        <form action="" onSubmit={submit}>

           <p className='text-success'>{success}</p>
            <p className='text-warning'>{loading}</p>
           <p className='text-danger'>{error}</p>

          <input type="email" placeholder='Email' required class='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <br />

           <input type="password" placeholder='password' required class='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <br />
           <br />
           <br /><br /><br /><br /><br />

         <button  type="submit" value='Signin' placeholder='Signin' 
        className=' btn bg-success form-control text-white w-100 '  disabled={loading} >{loading ? 'signing up...':'sign up'}</button>

            <br />

                                    
          <p className='text-dark'>Don't have an account? <Link to='/signup'>Signin</Link></p>



           






        </form>





      </div>












    </section>
    
  )
}


export default SignIn