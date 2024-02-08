import { Link } from 'react-router-dom';

// ...

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function About() {
  return (
    <ChakraLink as={RouterLink} to="/about" color="white">
      <Button variant="link">About</Button>
    </ChakraLink>
  );
}