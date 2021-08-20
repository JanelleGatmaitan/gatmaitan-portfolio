import React from 'react';
import { HStack } from '@chakra-ui/react';

function Nav(props) {
  return (
    <HStack bgColor="blue">
      <p>{props.name}</p>
      <p>About</p>
      <p>Technologies</p>
    </HStack>
  );
}

export default Nav;
