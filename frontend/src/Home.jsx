import React from 'react';
import {
    Heading,
    Text,
    Box, Flex, Image, Center, VStack, Button, Link
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


/*

Home page: A home page that describes the purpose of your interface and conveys what it is like to interact with it. 
Aim for a page that looks like one of these examples (1, 2, 3)---though 
you do not need to implement interactivity or whizzy effects.
*/



function Home(props) {

  const navigate = useNavigate();
    return (
      <>
      <Box
      backgroundImage="Skincare.png"// Replace with your desired image URL
      backgroundSize="cover" // Ensures the background image covers the entire Box area
      backgroundPosition="center" // Centers the background image
      minHeight="100vh" // Minimum height to cover the full view height
    >
        <VStack align="left" padding="20" spacing="4"> {/* Adjust alignment and spacing here */}
        <Text fontSize="6xl" mt="150px">
          Skincare Products <br/> Tailored for You
        </Text>
        <Text fontSize="3xl">
          Use our personalized skincare quiz to find products <br/>
          and quickly compare them side by side
        </Text>
        
        <Button as={Link} href='https://skinmatcher.vercel.app/' variant="solid" textColor="white" bgColor="black"
        mt="25px"
        alignSelf="left" isExternal maxWidth="200px">
          Go to our Website
        </Button>
      </VStack>
    </Box>
    <Box
      backgroundSize="cover" // Ensures the background image covers the entire Box area
      backgroundPosition="center" // Centers the background image
      minHeight="100vh" // Minimum height to cover the full view height
    >
        <VStack align="left" padding="20" spacing="4"> {/* Adjust alignment and spacing here */}
        <Text fontSize="6xl">
          How to Interact with our Website
        </Text>
        <Flex justifyContent="space-around" align="center" p={5}>
  <Box
    p="5"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image borderRadius="md" src="quiz.png"/>
    <Text mt="2" fontSize="xl" fontWeight="semibold" lineHeight="short">
      Personalized Quizzes
    </Text>
    <Text mt="2">
      [Main Feature] Fill out the personalized quizzes to get recommendations for skincare products
      <br/> based on your specific skin type and needs
    </Text>
  </Box>

  <Box
    p="5"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image borderRadius="md" src="compare.png"/>
    <Text mt="2" fontSize="xl" fontWeight="semibold" lineHeight="short">
      Compare Products
    </Text>
    <Text mt="2">
     [Secondary Feature] At the top, there will be the top 5 product recommendations for you.
     Choose from those, or find your own products you want to compare, and then
     compare them side by side for price, brand, and etc.
    </Text>
  </Box>

  <Box
    p="5"
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    boxShadow="md"
  >
    <Image borderRadius="md" src="products.png"/>
    <Text mt="2" fontSize="xl" fontWeight="semibold" lineHeight="short">
      Product/Products Search
    </Text>
    <Text mt="2">
     Get a list of products, and search for a specific product by using our search feature 
     inside our Navigation bar. Also, the products page has a list of products you may want to search for!
    </Text>
  </Box>
</Flex>
        
      </VStack>
    </Box>
    </>
    );
}

export default Home;