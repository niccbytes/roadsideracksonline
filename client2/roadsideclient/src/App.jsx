import * as React from 'react';
import { ChakraProvider, Box, Flex, Button, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import ChakraLink from '@chakra-ui/react';
import About from './components/About.jsx'; // Adjust the path to where your About.jsx file is located
import Shop from './components/Shop.jsx'; // Adjust the path to where your HomePage component is located
import Events from './components/Events.jsx'; // Adjust the path to where your HomePage component is located
import logo from './assets/images/DOUBLE R LOGO.png';
import taz from './assets/images/taz.jpg';
import btnsf from './assets/images/BTNF.jpg'


function App() {
  return (
    <ChakraProvider>
      {/* Ensure content takes up the entire viewport */}
      <Box minH="100vh" bg="gray.100">
        <Flex direction="column" minH="100%">
          {/* Navbar */}
          <Box bg="blue.500" p={4} color="white">
            <Flex maxW="container.xl" mx="auto" alignItems="center">
              <Box>
              <img src={logo} alt="Roadside Racks Logo" height="30" />
              </Box>
              <Box ml={4}>
                Roadside Racks
              </Box>
              <Flex ml="auto" alignItems="center">
                <Stack direction="row" spacing={4}>
                <ChakraLink as={RouterLink} to="/" color="white">
                <Button variant="link">Home</Button>
              </ChakraLink>
              <ChakraLink as={ About } to="/about" color="white">
                <Button variant="link">About</Button>
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/contact" color="white">
                <Button variant="link">Contact</Button> 
              </ChakraLink>
              <ChakraLink as={ Shop } to="/shop" color="white">
                  <Button variant="link" color="white">Shop</Button>
                </ChakraLink>
                <ChakraLink  as={ Events} to="/events" color="white">
                  <Button variant="link" color="white">Events</Button>
                  </ChakraLink>
                </Stack>
                <InputGroup size="sm" ml={4}>
                  <Input placeholder="Search" />
                  <InputRightElement>
                    <Button colorScheme="blue" size="sm">Search</Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Flex>
          </Box>
          
          {/* Card Deck */}
          <Flex flexWrap="wrap" justifyContent="center" p={4} mt={4} flex="1">
            {/* Card 1 */}
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
            <img src={btnsf} alt="The North Face Fleece" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $20
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  The North Face Fleece
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            {/* Card 2 */}
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
            <img src={taz} alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>


            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src="/client/public/assets/taz.jpg" alt="VTG Western Jacket" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $100
                  </Box>
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  VTG Western Jacket
                </Box>
                <Button mt="2" colorScheme="teal" onClick={() => window.location.href = 'checkout.html'}>Buy</Button>
              </Box>
            </Box>

            {/* Repeat this pattern for other cards */}
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;