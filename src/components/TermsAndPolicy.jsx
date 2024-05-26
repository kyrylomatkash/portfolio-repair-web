import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
  Text,
} from '@chakra-ui/react';

const TermsAndPolicy = ({ isOpen, onClose, type }) => {
  const title = type === 'terms' ? 'Terms of Service' : 'Privacy Policy';
  const content =
    type === 'terms'
      ? 'Your terms of service content goes here...'
      : 'Your privacy policy content goes here...';

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h2" size="lg">
            {title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{content}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TermsAndPolicy;
