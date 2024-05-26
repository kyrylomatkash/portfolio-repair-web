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
  Progress,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import successSound from './short-success-sound-glockenspiel-treasure-video-game-6346.mp3';

const ContactForm = ({ onClose }) => {
  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [playSuccessSound, setPlaySuccessSound] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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
    setProgress(30);

    try {
      await submitForm(formData);
      setProgress(70);

      if (playSuccessSound) {
        const audio = new Audio(successSound);
        audio.play();
      }

      setProgress(100);
      setShowSuccessMessage(true);
      onOpen();

      setTimeout(() => {
        setShowSuccessMessage(false);
        closeModal();
        onClose();
      }, 3000);

      setFormData({ name: '', email: '', message: '' });
      setProgress(0);
    } catch (error) {
      console.error('Form submission failed:', error);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = formData => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
    setError(null);
    setProgress(0);
  };

  return (
    <Box p={6}>
      <Heading as="h2" size="xl" mb={4}>
        Contact Us
      </Heading>
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
      <Flex mt={4} align="center">
        <Text mr={2}>Play success sound</Text>
        <Switch
          isChecked={playSuccessSound}
          onChange={() => setPlaySuccessSound(!playSuccessSound)}
        />
      </Flex>
      {isLoading && (
        <Progress value={progress} size="xs" colorScheme="blue" mt={4} />
      )}
      {showSuccessMessage && (
        <Modal isOpen={isOpen} onClose={closeModal}>
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
