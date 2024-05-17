import React from 'react';
import { Box, Heading, Text, Flex, Avatar, Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={8}>
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
            name="John Doe"
            role="Frontend Developer"
            description="Passionate about creating beautiful and intuitive user interfaces."
            avatarSrc="https://via.placeholder.com/150"
          />
          <TeamMember
            name="Jane Smith"
            role="Backend Developer"
            description="Excited about building robust and scalable server-side applications."
            avatarSrc="https://via.placeholder.com/150"
          />
        </Stack>
      </Flex>
    </Box>
  );
};

const TeamMember = ({ name, role, description, avatarSrc }) => {
  return (
    <Box textAlign="center">
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
