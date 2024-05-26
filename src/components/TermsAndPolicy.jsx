import React from 'react';
import {
  Box,
  Divider,
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
  const content = type === 'terms' ? termsContent : privacyPolicyContent;

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
          <Box>
            {content.map((section, index) => (
              <Box key={index} mb="4">
                <Heading as="h3" size="md" mb="2">
                  {section.title}
                </Heading>
                <Text>{section.text}</Text>
                {index !== content.length - 1 && <Divider my="4" />}
              </Box>
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const termsContent = [
  {
    title: 'Introduction',
    text: `
      These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
    `,
  },
  {
    title: 'Use of Website',
    text: `
      You must be at least 18 years old to use our website. You agree to use our website for lawful purposes only and not to violate any laws in your jurisdiction.
    `,
  },
  {
    title: 'Intellectual Property',
    text: `
      All content on our website, including text, graphics, logos, and images, is the property of our company and is protected by copyright laws.
    `,
  },
];

const privacyPolicyContent = [
  {
    title: 'Introduction',
    text: `
      This Privacy Policy ("Policy") describes how we collect, use, and disclose your personal information when you use our website.
    `,
  },
  {
    title: 'Information We Collect',
    text: `
      We may collect personal information such as your name, email address, and IP address when you use our website.
    `,
  },
  {
    title: 'Use of Information',
    text: `
      We use your personal information to provide and improve our services, communicate with you, and comply with legal obligations.
    `,
  },
  [],
];

export default TermsAndPolicy;
