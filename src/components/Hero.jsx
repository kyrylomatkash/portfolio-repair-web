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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FeatureCard from './FeaturesCard';

const Hero = () => {
  const [helloText, setHelloText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const languages = useMemo(
    () => ['HELLO', 'ВІТАЄМО', 'CZEŚĆ', 'HALLO', 'SALUT'],
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';

    const typeText = () => {
      if (currentIndex < languages.length) {
        currentText += languages[currentIndex].charAt(currentText.length);
        setHelloText(currentText);
        if (currentText === languages[currentIndex]) {
          setShowCursor(false);
          setTimeout(() => {
            setShowCursor(true);
            setTimeout(() => {
              currentIndex++;
              currentText = '';
              typeText();
            }, 1000);
          }, 1000);
        } else {
          setTimeout(typeText, 150);
        }
      }
    };

    typeText();

    return () => {
      clearTimeout();
    };
  }, [languages]);

  const handleSubscribe = () => {
    setTimeout(() => {
      setSubscribed(true);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        py={20}
        textAlign="center"
        bgGradient="linear(to-b, teal.500, purple.500)"
        color="white"
        borderRadius="xl"
        mx="auto"
        maxW="container.lg"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Our Awesome App
        </Heading>
        <Heading as="h2" size="lg" mb={8}>
          Turn Your Ideas into Reality
        </Heading>
        <Box display="inline-block" mb={8}>
          <Heading as="h3" size="md" mb={2} color="yellow.400">
            {helloText}
            {showCursor && <span className="cursor">|</span>}
          </Heading>
        </Box>
        <Text fontSize="xl" mb={8}>
          We specialize in creating innovative and user-friendly web
          applications tailored to your needs. Let's bring your vision to life!
        </Text>
        <Button colorScheme="blue" size="lg" mb={12}>
          Get Started Now
        </Button>
        <Stack
          spacing={8}
          direction={{ base: 'column', md: 'row' }}
          mb={12}
          justify="center"
        >
          <FeatureCard
            title="Custom Solutions"
            description="We offer bespoke solutions to address your unique business requirements."
          />
          <FeatureCard
            title="Scalability"
            description="Our applications are designed to grow with your business, ensuring long-term success."
          />
          <FeatureCard
            title="User-Friendly Design"
            description="We prioritize intuitive design to provide the best possible user experience."
          />
        </Stack>
        <Flex justify="center" mb={12}>
          <Box w={{ base: '80%', md: '50%' }}>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Flex align="center">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button
                  colorScheme="blue"
                  ml={4}
                  onClick={handleSubscribe}
                  disabled={subscribed}
                >
                  {subscribed ? 'Subscribed' : 'Subscribe'}
                </Button>
              </Flex>
              <FormHelperText mt={2}>
                Sign up for our newsletter to receive updates and special
                offers.
              </FormHelperText>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Hero;
