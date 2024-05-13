import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Quotes from './Quote';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Navbar />
      <Quotes />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
