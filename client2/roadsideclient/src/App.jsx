import * as React from 'react';
import { ChakraProvider, Box, Flex, Button, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react'; // Import Chakra UI components

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
                <img src="/client/public/assets/DOUBLE R LOGO.png" alt="Roadside Racks Logo" height="30" />
              </Box>
              <Box ml={4}>
                Roadside Racks
              </Box>
              <Flex ml="auto" alignItems="center">
                <Stack direction="row" spacing={4}>
                  <Button variant="link" color="white">Home</Button>
                  <Button variant="link" color="white">About</Button>
                  <Button variant="link" color="white">Shop</Button>
                  <Button variant="link" color="white">Events</Button>
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
              <img src="/client/public/assets/BTNF.jpg" alt="The North Face Fleece" />
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
