import * as React from 'react';
import { ChakraProvider, Box, Flex, Button, Input, InputGroup, InputRightElement, Stack, Link } from '@chakra-ui/react';
import About from './components/About.jsx'; // Adjust the path to where your About.jsx file is located
import Shop from './components/Shop.jsx'; // Adjust the path to where your HomePage component is located
import Events from './components/Events.jsx'; // Adjust the path to where your HomePage component is located
import logo from './assets/images/DOUBLE R LOGO.png';
import taz from './assets/images/taz.jpg';
import btnsf from './assets/images/BTNF.jpg'


function App() {
  const handleBuy = async () => {
    try {
      const response = await axios.post('/create-checkout-session');
      const sessionId = response.data.id;
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`; // Redirect to Stripe Checkout
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="gray.100">
        <Flex direction="column" minH="100%">
          <Box bg="blue.500" p={4} color="white">
            <Flex maxW="container.xl" mx="auto" alignItems="center">
              <Box>
                <img src={logo} alt="Roadside Racks Logo" height="30" />
              </Box>
              <Box ml={4}>Roadside Racks</Box>
              <Flex ml="auto" alignItems="center">
                <Stack direction="row" spacing={4}>
                {/* <Link as={RouterLink} to="/" color="white">
                <Button variant="link">Home</Button>
              </Link> */}
              <Link as={ About } to="/about" color="white">
                <Button variant="link">About</Button>
              </Link>
              {/* <Link as={RouterLink} to="/contact" color="white">
                <Button variant="link">Contact</Button> 
              </Link> */}
              <Link as={ Shop } to="/shop" color="white">
                  <Button variant="link" color="white">Shop</Button>
                </Link>
                <Link  as={ Events} to="/events" color="white">
                  <Button variant="link" color="white">Events</Button>
                  </Link>
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
          
          <Flex flexWrap="wrap" justifyContent="center" p={4} mt={4} flex="1">
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
                <Button mt="2" colorScheme="teal" onClick={handleBuy}>Buy</Button>
              </Box>
            </Box>

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
                <Button mt="2" colorScheme="teal" onClick={handleBuy}>Buy</Button>
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
