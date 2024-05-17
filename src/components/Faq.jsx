import React from 'react';
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQs = () => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={6}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" size="md">
                  Question 1?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading as="h4" size="md">
                  Question 2?
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQs;
