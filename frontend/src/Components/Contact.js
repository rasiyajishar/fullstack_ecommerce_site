import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


const Contact = () => {
  return (
    <div>
      <Navigation /> 
      
      <div className="contact-container">
        <h1 className="contact-heading">CONTACT US</h1>
        <p className="contact-address">New kkkd, NY 102312, Plashoe India</p>
        <p className="contact-phone">+01 232 2341</p>
        <p className="contact-email">plashoe@info.com</p>
      </div>
      
      <Footer />
    </div>
  );
}

export default Contact;
