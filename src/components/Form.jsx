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
  Switch,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
} from '@chakra-ui/react';
import successSound from './short-success-sound-glockenspiel-treasure-video-game-6346.mp3';
import { CheckCircleIcon } from '@chakra-ui/icons';

const ContactForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showForm, setShowForm] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [playSuccessSound, setPlaySuccessSound] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      await submitForm(formData);

      if (playSuccessSound) {
        const audio = new Audio(successSound);
        audio.play();
      }

      setShowSuccessMessage(true);
      onOpen();

      setTimeout(() => {
        setShowForm(false);
        onClose();
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
        resolve();
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
              isInvalid={!!error}
              errorBorderColor="red.300"
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
            <Text mt={2} color="gray.500" fontSize="sm">
              {formData.message.length} / 500
            </Text>
          </FormControl>
          <Button type="submit" colorScheme="blue" disabled={isLoading}>
            {isLoading ? <Spinner size="sm" color="white" /> : 'Send Message'}
          </Button>
          <Button ml={4} onClick={handleClear} variant="outline">
            Clear
          </Button>
          {error && (
            <Alert status="error" mt={4} aria-live="assertive">
              <AlertIcon />
              {error}
            </Alert>
          )}
        </form>
      )}
      <Flex mt={4} align="center">
        <Text mr={2}>Play success sound</Text>
        <Switch
          isChecked={playSuccessSound}
          onChange={() => setPlaySuccessSound(!playSuccessSound)}
        />
      </Flex>
      {showSuccessMessage && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Success</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex align="center">
                <CheckCircleIcon color="green.500" mr={2} />
                <Text>Your message has been sent successfully!</Text>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default ContactForm;
