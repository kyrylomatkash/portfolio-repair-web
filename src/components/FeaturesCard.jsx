import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const FeatureCard = ({ title, description }) => {
  return (
    <Box bg="white" p={6} boxShadow="md" borderRadius="md" maxW="300px">
      <Heading as="h3" size="md" mb={4}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default FeatureCard;
