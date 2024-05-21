import React from 'react';
import { Box, Heading, SimpleGrid, Flex, Icon, Text } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="bold">
        Portfolio
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <ProjectCard
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc="https://via.placeholder.com/300"
          githubLink="https://github.com/example/project1"
          liveDemoLink="https://example.com/project1"
        />
        <ProjectCard
          title="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc="https://via.placeholder.com/300"
          githubLink="https://github.com/example/project2"
          liveDemoLink="https://example.com/project2"
        />
        <ProjectCard
          title="Project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc="https://via.placeholder.com/300"
          githubLink="https://github.com/example/project3"
          liveDemoLink="https://example.com/project3"
        />
      </SimpleGrid>
    </Box>
  );
};

const ProjectCard = ({
  title,
  description,
  imageSrc,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <Box
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
      transition="all 0.3s ease-out"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box mb={4} borderRadius="lg" overflow="hidden">
        <img
          src={imageSrc}
          alt={title}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Heading as="h3" size="md" mb={2} fontWeight="semibold">
        {title}
      </Heading>
      <Text mb={4} color="gray.600">
        {description}
      </Text>
      <Flex justifyContent="space-between">
        <Icon
          as={FaGithub}
          boxSize={6}
          color="gray.600"
          cursor="pointer"
          _hover={{ color: 'gray.800' }}
          onClick={() => window.open(githubLink, '_blank')}
        />
        <Icon
          as={FaExternalLinkAlt}
          boxSize={6}
          color="gray.600"
          cursor="pointer"
          _hover={{ color: 'gray.800' }}
          onClick={() => window.open(liveDemoLink, '_blank')}
        />
      </Flex>
    </Box>
  );
};

export default Portfolio;
