import React from 'react';
import { Container, Text, Heading, Box } from '@chakra-ui/react';

const Shop = () => {
  return (
    <Container centerContent>
      <Heading as="h1" size="2xl" my={4}>Shop</Heading>
      <Text fontSize="lg" my={4}>
        Our items for sale will show here
      </Text>
      {/* Add more sections as needed, such as a team section, product gallery, etc. */}
    </Container>
  );
};

export default Shop;