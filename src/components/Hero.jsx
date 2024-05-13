import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Icon,
} from '@chakra-ui/react';
import { FaRegEnvelope } from 'react-icons/fa';
import FeatureCard from './FeaturesCard';

const Hero = () => {
  const [helloText, setHelloText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const languages = useMemo(
    () => ['HELLO', 'ВІТАЄМО', 'CZEŚĆ', 'HALLO', 'SALUT'],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHelloText(prevText => {
        const currentIndex = languages.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % languages.length;
        return languages[nextIndex];
      });
      setShowCursor(false);
      setTimeout(() => {
        setShowCursor(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [languages]);

  return (
    <Box
      py={20}
      textAlign="center"
      position="relative"
      bgGradient="linear(to-b, teal.500, purple.500)"
      color="white"
      boxShadow="lg"
      borderRadius="lg"
      mx="auto"
      maxW="container.lg"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Your Next Project Starts Here
      </Heading>
      <Heading as="h2" size="lg" mb={4}>
        Create something amazing with us.
      </Heading>
      <Box display="inline-block" mb={8}>
        <Heading as="h3" size="md" mb={2} color="yellow.400">
          {helloText}
          {showCursor && <span className="cursor">|</span>}
        </Heading>
      </Box>
      <Text fontSize="xl" mb={6}>
        We specialize in designing and developing web applications that are
        innovative, user-friendly, and scalable. Let's turn your ideas into
        reality.
      </Text>
      <Button colorScheme="blue" size="lg" mb={6}>
        Get Started
      </Button>
      <Stack
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        mb={8}
        justify="center"
      >
        <FeatureCard
          title="Feature 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <FeatureCard
          title="Feature 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <FeatureCard
          title="Feature 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Stack>
      <Flex justify="center" mb={8}>
        <Box w="60%">
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Flex>
              <Input type="email" placeholder="Your email address" />
              <Button colorScheme="blue" ml={2}>
                <Icon as={FaRegEnvelope} />
              </Button>
            </Flex>
            <FormHelperText>
              Sign up for our newsletter to receive updates.
            </FormHelperText>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
