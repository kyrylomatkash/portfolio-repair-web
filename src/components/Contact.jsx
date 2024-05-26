import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';
import Form from './Form';

const Contact = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box id={id} p={8}>
      <Heading as="h2" size="xl">
        Contact Us
      </Heading>
      <Box mt={4}>
        <Button colorScheme="blue" onClick={toggleModal}>
          Get in Touch
        </Button>
      </Box>
      <Box mt={8}>
        <Heading as="h3" size="lg" mb={2}>
          Contact Information
        </Heading>
        <Text>Email: kyrylomatkashwork@gmail.com</Text>
        <Text>Phone: +48794694293</Text>
        <Text>Warsaw, Masovia,Poland</Text>
      </Box>

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Form />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Contact;
