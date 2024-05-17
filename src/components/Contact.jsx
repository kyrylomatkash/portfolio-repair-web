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
  Text,
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
      <Box mt={8}>
        <Heading as="h3" size="lg" mb={2}>
          Contact Information
        </Heading>
        <Text>Email: example@example.com</Text>
        <Text>Phone: +1234567890</Text>
        <Text>Address: 123 Main St, City, Country</Text>
      </Box>

      {/* Modal for Contact Form */}
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
