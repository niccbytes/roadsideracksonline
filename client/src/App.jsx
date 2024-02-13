import * as React from 'react';
import { ChakraProvider, Box, Flex, Button, Input, InputGroup, InputRightElement, Stack, Link } from '@chakra-ui/react';
import About from './components/About.jsx'; // Adjust the path to where your About.jsx file is located
import Shop from './components/Shop.jsx'; // Adjust the path to where your HomePage component is located
import Events from './components/Events.jsx'; // Adjust the path to where your HomePage component is located
import logo from './assets/images/DOUBLE R LOGO.png';
import taz from './assets/images/taz.jpg';
import btnsf from './assets/images/BTNF.jpg'
import van from './assets/images/van.jpg';
import Checkout from './components/Checkout.jsx';
import StripeButton from './components/StripeButton.jsx';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "/graphql"
})
const authLink = setContext((_,{headers})=> {
  // set up token to work in local storage
  const token = localStorage.getItem('id_token')
return {
  headers: {
    ...headers,
    authorization: token?`token holder ${token}`:"",
  }
}
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache:  InMemoryCache
})

function App() {
  return (
    <ApolloProvider client={client}>

    <ChakraProvider>
      <Box minH="100vh" bg="gray.100">
        <Flex direction="column" minH="100%">
          <Box bg="orange.200" p={4} color="white">
            <Flex maxW="container.xl" mx="auto" alignItems="center">

              <Box className= "navlogo" ml={4}>Roadside Racks</Box>
              <Flex ml="auto" alignItems="center">
                <Stack direction="row" spacing={4}>
                {/* <Link as={RouterLink} to="/" color="white">
                <Button variant="link">Home</Button>
              </Link> */}
              <Link href="#about-section" color="white" p={2} _hover={{ textDecoration: 'none' }}>
                <Button variant="link">About</Button>
              </Link>
              {/* <Link as={RouterLink} to="/contact" color="white">
                <Button variant="link">Contact</Button> 
              </Link> */}
              <Link href="#shop-section" color="white" p={2} _hover={{ textDecoration: 'none' }}>
                <Button variant="link">Shop</Button>
              </Link>
                <Link href="#events-section" color="white" p={2} _hover={{ textDecoration: 'none' }}>
                  <Button variant="link">Events</Button>
                </Link>
                </Stack>
                <InputGroup size="sm" ml={4}>
                  <Input placeholder="Search" />
                  <InputRightElement>
                    <Button className="search" colorScheme="gray" size="sm"></Button>
                  </InputRightElement>
                </InputGroup>
              </Flex>
            </Flex>
          </Box>
          <Shop />
          <Flex flexWrap="wrap" justifyContent="center" p={4} mt={4} flex="1" id="shop-section">
            
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={4}>
              <img src={btnsf} alt="The North Face Fleece" />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                    $20

                  </Box>
                  <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    The North Face Fleece
                  </Box>
                  <StripeButton /> {/* Add the StripeButton component here */}
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
                  <StripeButton /> {/* Add the StripeButton component here */}
                </Box>
              </Box>


            </Box>
            </Flex>
            
            <box className="about" p={4} mt={4} id="about-section">
              
              <About />
              <img className="logo" src={logo} alt="Roadside Racks Logo" />
              <p className="abttxt"> We are a vintage clothing business Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque doloribus, fuga sunt itaque iure reiciendis est consequuntur culpa odit dolore voluptatum odio iusto ratione nobis maiores sequi id! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque doloribus, fuga sunt itaque iure reiciendis est consequuntur culpa odit dolore voluptatum odio iusto ratione nobis maiores sequi id! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque doloribus, fuga sunt itaque iure reiciendis est consequuntur culpa odit dolore voluptatum odio iusto ratione nobis maiores sequi id! Molestiae!</p>
            </box>

            <box className="events" p={4} mt={4} id="events-section">
              <Events />
              <img className="eventimg" src={van} ></img>
              <ul className="eventtxt">
                Our future events are: 
                <li> - 10/10/2024: Vintage Clothing Pop-Up Shop</li>
                <li> - 10/15/2024: Vintage Clothing Fashion Show </li>
                <li> - 10/20/2024: Vintage Clothing Auction </li>
              </ul>
            </box>
        </Flex>
      </Box>
    </ChakraProvider>

    </ApolloProvider>
  );
}

export default App;
