
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import Mpesapay from './components/Mpesapay';
import AddProduct from './components/AddProduct';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';


function App() {
  return (
   <Router>

    <div className="App">

      <header className="App-header">

        <h1>AirExpress</h1>

      
        <nav className='nav'>
        <h5 className='text-warning mr-3 '>

          
      


          
        <Link id='l1' className='  m-3' to='/'>Get Products</Link>
        <Link id='l1' className='m-3' to='/addproducts'>Add products</Link>
         <Link id='l1' className='m-3' to='/aboutus'>About us</Link>
         <Link id='l1' className='m-3' to='/contactus'>Contact us</Link>

          <input id='search' type="search" placeholder='search'  />
        <Link id='l2' className='btn text-white m-3' to='/SignIn'>SignIn</Link>
        <Link id='l2' className='btn text-white m-3' class to='/signup'>Register</Link>



        </h5>
        </nav>
      </header>

        


      <Routes>
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/mpesa' element={<Mpesapay/>} />
        <Route path='/addproducts' element={<AddProduct/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/' element={<GetProducts/>} />
        


      </Routes>







      
    </div>
    </Router>
  );
}

export default App;
