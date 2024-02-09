import React from 'react';
import { Container, Text, Heading, Box } from '@chakra-ui/react';

const About = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="2xl" my={4}>About</Heading>
      <Text fontSize="lg" my={4}>
        We are a company that specializes in [describe what your company does].
        Our mission is to [describe your company's mission].
        We were founded in [year] and have grown to become [describe growth or achievements].
        Our team consists of [describe your team], and we pride ourselves on [mention unique qualities or values].
        We offer [list of products or services], and our customers appreciate us for [mention customer appreciation or feedback].
      </Text>
      {/* Add more sections as needed, such as a team section, product gallery, etc. */}
    </Container>
  );
};

export default About;