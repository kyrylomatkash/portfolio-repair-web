import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import Form from './Form';
import FAQs from './Faq';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box p={8}>
      <Heading as="h2" size="xl">
        Contact Us
      </Heading>
      <FAQs />

      <Box mt={4}>
        <Button colorScheme="blue" onClick={toggleModal}>
          Get in Touch
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
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
