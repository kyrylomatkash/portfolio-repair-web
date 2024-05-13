import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="gray.800" color="white" p="4">
      <Flex justify="space-between" align="center">
        <Box>
          <Text>© 2024 . All rights reserved.</Text>
        </Box>
        <Box>
          <Flex>
            <Box mr="2">
              <Icon as={FaFacebookF} boxSize={6} />
            </Box>
            <Box mr="2">
              <Icon as={FaTwitter} boxSize={6} />
            </Box>
            <Box>
              <Icon as={FaInstagram} boxSize={6} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
