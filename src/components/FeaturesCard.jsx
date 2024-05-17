import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const FeatureCard = ({ title, description, onActionClick }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.800', 'white');
  const boxShadow = useColorModeValue('md', 'lg');

  return (
    <Box
      bg={bg}
      color={color}
      p={6}
      boxShadow={boxShadow}
      borderRadius="md"
      maxW={['100%', '300px']}
      _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
      transition="all 0.3s ease"
      role="region"
      aria-labelledby="feature-title"
      tabIndex={0}
      aria-live="polite"
    >
      <Heading as="h3" size="md" mb={4} id="feature-title">
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Button colorScheme="teal" onClick={onActionClick}>
        Learn More
      </Button>
    </Box>
  );
};

export default FeatureCard;
