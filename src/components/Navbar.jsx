import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="white" boxShadow="md" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" color="black">
          Portfolio
        </Heading>
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
        color: 'black',
        fontWeight: 'bold',
        marginRight: '20px',
        textDecoration: 'none',
      }}
    >
      {children}
    </a>
  );
};

export default Navbar;
