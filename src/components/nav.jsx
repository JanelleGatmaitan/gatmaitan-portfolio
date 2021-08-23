import React from 'react';
import {
  HStack,
  Heading,
  UnorderedList,
  ListItem,
  Spacer
}
  from '@chakra-ui/react';

function Nav(props) {
  return (
    <HStack
    bg="blue"
    height="115px"
    >
      <Heading ml="30px">{`${props.firstName} ${props.lastName}`}</Heading>
      <Spacer />
      <UnorderedList display="flex" styleType="none" width="45%" justifyContent="space-evenly">
          <ListItem _hover={{
            fontWeight: "bold",
            textDecoration: "underline"
          }}>
            <a href="#about">About</a>
        </ListItem>
        <ListItem _hover={{
          fontWeight: "bold",
          textDecoration: "underline"
        }}>
          <a href="#skills">Skills</a>
        </ListItem>
        <ListItem _hover={{
          fontWeight: "bold",
          textDecoration: "underline"
        }}>
          <a href="#projects">Projects</a>
        </ListItem>
        <ListItem _hover={{
          fontWeight: "bold",
          textDecoration: "underline"
        }}>
          <a href="#contact">Contact</a>
          </ListItem>
        <ListItem _hover={{
          fontWeight: "bold",
          textDecoration: "underline"
        }}>Resume
        </ListItem>
      </UnorderedList>
    </HStack>
  );
}

export default Nav;
