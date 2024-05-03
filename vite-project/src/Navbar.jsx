import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Input,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import React, { useState, useEffect } from "react";

  
  function Navbar() {
    const isDesktop = useBreakpointValue({
      base: true,
      sm: false,
      md: true,
      lg: true,
    });
    const navigate = useNavigate();
  
    return (
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Flex>
          
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            ml={10}
            mt={5}
            mr={10}
            _hover={{ bg: "transparent" }}
            fontFamily="Roboto"
            fontWeight="bold"
          >
            <t>Home</t>
          </Button>
          <Button
            variant="ghost"
            onClick={() => navigate("/design")}
            ml={10}
            mt={5}
            mr={10}
            _hover={{ bg: "transparent" }}
            fontFamily="Roboto"
            fontWeight="bold"
          >
            <t>Design Learnings</t>
          </Button>
          
  
          
        </Flex>
      </Box>
    );
  }
  
  export default Navbar;