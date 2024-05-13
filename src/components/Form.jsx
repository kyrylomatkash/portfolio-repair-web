import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  Spinner,
} from '@chakra-ui/react';
import successSound from './short-success-sound-glockenspiel-treasure-video-game-6346.mp3';
import { CheckCircleIcon } from '@chakra-ui/icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(null);

    setIsLoading(true);

    try {
      await submitForm(formData);

      const audio = new Audio(successSound);
      audio.play();

      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowForm(false);
      }, 3000);

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = formData => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve();
        reject(new Error('Submission failed'));
      }, 2000);
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setShowSuccessMessage(false);
    setError(null);
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Contact Us
      </Heading>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              variant="filled"
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              variant="filled"
            />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={6}
              required
              variant="filled"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" disabled={isLoading}>
            {isLoading ? <Spinner size="sm" color="white" /> : 'Send Message'}
          </Button>
          <Button ml={4} onClick={handleClear} variant="outline">
            Clear
          </Button>
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </form>
      )}
      {showSuccessMessage && (
        <Alert status="success" mt={4}>
          <AlertIcon as={CheckCircleIcon} color="green.500" />
          Your message has been sent successfully!
        </Alert>
      )}
    </Box>
  );
};

export default ContactForm;
