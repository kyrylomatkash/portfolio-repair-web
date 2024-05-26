import React, { useState } from 'react';
import { Box, Flex, Text, Icon, Link, useDisclosure } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import TermsAndPolicy from './TermsAndPolicy';

function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = type => {
    setModalType(type);
    onOpen();
  };

  return (
    <Box bg="gray.800" color="white" py="4" px="6">
      <Flex
        justify="space-between"
        align="center"
        flexDirection={['column', 'row']}
        maxW="1200px"
        mx="auto"
      >
        <Box mb={[4, 0]}>
          <Text fontSize="sm">&copy; 2024. All rights reserved.</Text>
          <Flex mt="2" justifyContent={['center', 'start']}>
            <FooterLink onClick={() => handleOpenModal('terms')}>
              Terms of Service
            </FooterLink>
            <FooterLink onClick={() => handleOpenModal('policy')}>
              Privacy Policy
            </FooterLink>
          </Flex>
        </Box>
        <Flex alignItems="center">
          <Text mr="4" fontSize="sm" display={['none', 'block']}>
            Follow us:
          </Text>
          <SocialLink
            href="https://facebook.com"
            ariaLabel="Facebook"
            icon={FaFacebookF}
          />
          <SocialLink
            href="https://twitter.com"
            ariaLabel="Twitter"
            icon={FaTwitter}
          />
          <SocialLink
            href="https://instagram.com"
            ariaLabel="Instagram"
            icon={FaInstagram}
          />
        </Flex>
      </Flex>
      <TermsAndPolicy isOpen={isOpen} onClose={onClose} type={modalType} />
    </Box>
  );
}

const FooterLink = ({ onClick, children }) => (
  <Text
    as="button"
    onClick={onClick}
    mr="4"
    _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
    fontSize="sm"
  >
    {children}
  </Text>
);

const SocialLink = ({ href, ariaLabel, icon }) => (
  <Link
    href={href}
    isExternal
    aria-label={ariaLabel}
    mr="2"
    _hover={{ color: 'teal.300' }}
  >
    <Icon as={icon} boxSize="6" />
  </Link>
);

export default Footer;
