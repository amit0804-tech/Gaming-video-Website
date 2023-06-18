import { Avatar } from '@chakra-ui/react';
import React from 'react';
import {
    Button,
    Container,
    Heading,
    Input,
    VStack,
    Text,
  } from '@chakra-ui/react';

  import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m="auto"
          my={'16'}
        >
          <Heading textColor={'orange'} textAlign={'center'}>
            Gaming Video Hub
          </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}/>
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="orange"
          />
           <Input
            placeholder="Email"
            type="Email"
            required
            focusBorderColor="orange"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="orange"
          />

          

          <Button colorScheme="orange" type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up ?
            <Button variant={'link'} colorScheme="orange">
              <Link to={'/Login'}>Login</Link>
              
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
