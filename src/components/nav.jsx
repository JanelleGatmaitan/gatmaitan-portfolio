import React from 'react';
import {
  HStack,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Spacer
}
  from '@chakra-ui/react';

function Nav(props) {
  return (
    <HStack bgColor="blue">
      <Heading>{`${props.firstName} ${props.lastName}`}</Heading>
      <Spacer />
      <UnorderedList styleType="none">
        <HStack mr="50px">
          <ListItem _hover={{
            background: "white",
            color: "teal.500",
          }}>About</ListItem>
          <ListItem>Skills</ListItem>
          <ListItem>Projects</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Resume</ListItem>
        </HStack>
      </UnorderedList>
    </HStack>
  );
}

export default Nav;
