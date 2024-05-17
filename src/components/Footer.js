import { Box, Flex, Text, Icon, Link } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="gray.800" color="white" p="4">
      <Flex
        justify="space-between"
        align="center"
        direction={['column', 'row']}
        textAlign={['center', 'left']}
      >
        <Box mb={[4, 0]}>
          <Text>© 2024 . All rights reserved.</Text>
          <Flex mt={2} justify={['center', 'start']}>
            <Link
              href="/privacy-policy"
              mr="4"
              _hover={{ textDecoration: 'underline' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              _hover={{ textDecoration: 'underline' }}
            >
              Terms of Service
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex justify={['center', 'flex-end']}>
            <Link
              href="https://facebook.com"
              isExternal
              aria-label="Facebook"
              mr="2"
            >
              <Icon
                as={FaFacebookF}
                boxSize={6}
                _hover={{ color: 'teal.300' }}
              />
            </Link>
            <Link
              href="https://twitter.com"
              isExternal
              aria-label="Twitter"
              mr="2"
            >
              <Icon as={FaTwitter} boxSize={6} _hover={{ color: 'teal.300' }} />
            </Link>
            <Link
              href="https://instagram.com"
              isExternal
              aria-label="Instagram"
            >
              <Icon
                as={FaInstagram}
                boxSize={6}
                _hover={{ color: 'teal.300' }}
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
