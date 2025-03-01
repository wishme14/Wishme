import React from 'react';
import Hero from './Hero';
import Wish from './Wish';
import Support from './Support';
import TrustMessage from './TrustMessage';
import Navbar from '../Navbar';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
         <Navbar/>
         <Hero/>
         <Wish/>
         <Support/>
         <TrustMessage/>
         <Footer/>
        </>
     );
}

export default HomePage;