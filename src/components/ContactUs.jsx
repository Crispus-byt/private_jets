import React from 'react'

const Contactus = () => {
  return (
    <div className='contact p-2'>

         <h2 className='text-center '>Contact Us</h2>

  <p>
    At <strong>Private Jet Airways</strong>, we are always ready to assist you with bookings,
    inquiries, partnerships, or any support you may need. Our team is committed to providing
    quick and reliable responses to ensure your experience is seamless from the first contact
    to your final destination.
  </p>

  <h4 className='text-center'>Get in Touch</h4>
  <p>
    Whether you are looking to book a private jet, request a custom travel plan, or inquire
    about our services, feel free to reach out using the contact details below or by filling
    out the form.
  </p>

  <div className="contact-details">
    <p><strong>📍 Address:</strong> Nairobi, Kenya</p>
    <p><strong>📞 Phone:</strong> +254 700 000 000</p>
    <p><strong>📧 Email:</strong> support@privatejetairways.com</p>
    <p><strong>🕒 Working Hours:</strong> 24/7 Customer Support</p>
  </div>

  <h4>Send Us a Message</h4>

  <form className="contact-form">
    <input 
      type="text" 
      placeholder="Your Name" 
      className="form-control" 
      required 
    />

    <br />

    <input 
      type="email" 
      placeholder="Your Email" 
      className="form-control" 
      required 
    />

    <br />

    <input 
      type="text" 
      placeholder="Subject" 
      className="form-control" 
      required 
    />

    <br />

    <textarea 
      placeholder="Your Message" 
      className="form-control" 
      rows="5"
      required
    ></textarea>

    <br />

    <button type="submit" className="btn btn-warning w-100">
      Send Message
    </button>
  </form>

  <h4 >Why Contact Us?</h4>
  <ul>
    <li>Private jet booking inquiries</li>
    <li>Flight scheduling and availability</li>
    <li>Customer support and assistance</li>
    <li>Corporate and group travel arrangements</li>
    <li>Feedback and suggestions</li>
  </ul>

  <p>
    Our support team is dedicated to ensuring that every client receives personalized attention.
    We value your time and strive to respond to all inquiries as quickly as possible.
  </p>


            <footer class="bg-dark w-100">
            <p class="text-white text-center p-3">Developed by Crispus &copy; All Rights Reserved</p>
        </footer>





    </div>
  )
}

export default Contactus