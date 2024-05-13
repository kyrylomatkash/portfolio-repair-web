import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="white" boxShadow="md" p={4}>
      <Flex justifyContent="center" alignItems="center">
        <Heading as="h1" size="lg" color="black">
          Portfolio
        </Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;
