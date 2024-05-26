import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Avatar,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const About = ({ id }) => {
  const teamMemberBg = useColorModeValue('white', 'gray.800');

  return (
    <Box id={id} p={8}>
      <Heading as="h2" size="xl" mb={4}>
        About Us
      </Heading>
      <Text mb={6}>
        We are a team of passionate developers committed to creating innovative
        solutions. Our mission is to leverage technology to make a positive
        impact on people's lives.
      </Text>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="gray.100"
        borderRadius="lg"
        p={6}
      >
        <Heading as="h3" size="lg" mb={4}>
          Meet Our Team
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
          <TeamMember
            name="Kyrylo Matkash"
            role="Frontend Developer"
            description="Passionate about creating beautiful and intuitive user interfaces."
            avatarSrc="https://via.placeholder.com/150"
            bg={teamMemberBg}
          />
        </Stack>
      </Flex>
    </Box>
  );
};

const TeamMember = ({ name, role, description, avatarSrc, bg }) => {
  return (
    <Box textAlign="center" bg={bg} borderRadius="md" p={4} boxShadow="md">
      <Avatar src={avatarSrc} alt={name} size="xl" mb={4} />
      <Heading as="h4" size="md" mb={2}>
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={2}>
        {role}
      </Text>
      <Text fontSize="sm">{description}</Text>
    </Box>
  );
};

export default About;
