import React from 'react';
import { HStack, Heading } from '@chakra-ui/react';

function Nav(props) {
  return (
    <HStack bgColor="blue">
      <Heading>{`${props.firstName} ${props.lastName}`}</Heading>
      <p>About</p>
      <p>Technologies</p>
    </HStack>
  );
}

export default Nav;
