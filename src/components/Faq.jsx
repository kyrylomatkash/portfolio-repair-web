import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const FAQs = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={4}>
        Frequently Asked Questions
      </Heading>
      <Box>
        <Box mb={4}>
          <Heading as="h4" size="md">
            Question 1?
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
        <Box mb={4}>
          <Heading as="h4" size="md">
            Question 2?
          </Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQs;
