import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full' , '96']}
          m="auto"
          my={'16'}
        >
          <Heading textColor={'orange'} textAlign={'center'}>
            Welcome Back
          </Heading>
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="orange"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="orange"
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetPassword'}>Forget Password</Link>
          </Button>

          <Button colorScheme="orange" type="submit">
            Log In
          </Button>

          <Text textAlign={'right'}>New User ? 
          <Button variant={'link'} colorScheme='orange' >
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
          </Text>
          
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
