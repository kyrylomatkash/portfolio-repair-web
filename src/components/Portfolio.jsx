import React from 'react';
import { Box, Heading, SimpleGrid, Flex, Icon, Text } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = ({ id }) => {
  return (
    <Box id={id} p={8}>
      <Heading as="h2" size="xl" mb={8} textAlign="center" fontWeight="bold">
        Portfolio
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <ProjectCard
          title="Phonebook"
          description="Application for saving contacts with authorization,editing, and deleting functionality,which delivers a fast interface and experience"
          imageSrc="https://via.placeholder.com/300"
          githubLink="https://github.com/kyrylomatkash/goit-react-hw-08-phonebook"
          liveDemoLink="https://kyrylomatkash.github.io/goit-react-hw-08-phonebook/"
        />
        <ProjectCard
          title="Camp Renting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageSrc="https://via.placeholder.com/300"
          githubLink="https://github.com/kyrylomatkash/camp-renting"
          liveDemoLink="https://kyrylomatkash.github.io/camp-renting/"
        />
        <ProjectCard
          title="Water Tracker"
          description="Water consumption tracker. Record daily water intake and track."
          imageSrc="https://via.placeholder.com/300"
          githubLink="https://github.com/BendelVolodymyr/Smart-Foxes-WaterTracker"
          liveDemoLink="https://bendelvolodymyr.github.io/Smart-Foxes-WaterTracker/welcome"
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
