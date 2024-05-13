import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>
        About Us
      </Heading>
      <Text mb={6}>
        We are a team of passionate developers committed to creating innovative
        solutions. Our mission is to leverage technology to make a positive
        impact on people's lives.
      </Text>
      <Flex
        align="center"
        justify="center"
        w="100%"
        h="200px"
        bg="gray.100"
        borderRadius="lg"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="animated-svg"
        >
          <circle cx="50" cy="50" r="40" fill="blue" />
          <rect x="15" y="30" width="70" height="40" rx="8" fill="white" />
        </svg>
      </Flex>
    </Box>
  );
};

export default About;
