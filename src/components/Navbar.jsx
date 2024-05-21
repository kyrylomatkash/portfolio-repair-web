import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      bg="linear-gradient(to right, #23a6d5, #23d5ab)"
      p={4}
      borderRadius="3xl"
      boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)"
      backdropFilter="blur(10px)"
      webkitBackdropFilter="blur(10px)"
    >
      <Flex alignItems="center">
        <Heading
          as="h1"
          size="lg"
          color="white"
          fontWeight="bold"
          letterSpacing="wide"
          mr={4}
          _hover={{ opacity: 0.8 }}
          transition="opacity 0.3s ease"
        >
          Portfolio
        </Heading>
        <Spacer />
        <Flex>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      style={{
        color: 'white',
        fontWeight: 'normal',
        fontSize: 'sm',
        textDecoration: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
      }}
      _hover={{ bg: 'rgba(255,255,255,0.1)', borderRadius: '0.5rem' }}
    >
      {children}
    </a>
  );
};

export default Navbar;
