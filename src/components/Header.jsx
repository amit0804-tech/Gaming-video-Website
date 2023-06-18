import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
 
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import { VStack } from '@chakra-ui/react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="orange"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'25'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>
           GAMING VIDEO HUB
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button  variant={'ghost'} colorScheme='yellow'>
                <Link onClick={onClose} to={"/"} > Home
                </Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='yellow'>
                <Link to={"/videos"} > Videos
                </Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='yellow'>
                <Link to={"/videos?category"} > Free Videos
                </Link>
              </Button>
              <Button onClick={onClose}  variant={'ghost'} colorScheme='yellow'>
                <Link to={"/upload"} > Upload Video
                </Link>
              </Button>
            </VStack>


            <HStack pos={'absolute'} bottom={'10'} left={'0'}  width={'full'} justifyContent={'space-evenly'}>
              <Button colorScheme='teal'>
                <Link to="/Login">Login
                </Link>
              </Button>
              <Button colorScheme='teal' variant={'outline'}>
                <Link to="/Signup">Sign Up
                </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
