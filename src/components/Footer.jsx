import { Box, HStack, Heading, Stack, VStack ,Button, Input, Text  } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend}from 'react-icons/ai'

const Footer = () => {
  return <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}> 
<Stack direction={['column','row']}>

<VStack alignItems={'stretch'} w={'full'} px={'4'}>
    <Heading size={'md'} textTransform={'uppercase'}> 
        Subscribe To get Updates
    </Heading>

    <HStack borderBottom={'2px solid white'} >
        

        <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
        <Button p={'0'} colorScheme='orange' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={'20'}/>
        </Button>
    </HStack>
</VStack>


<VStack w={'full'} borderLeft={['none', "1px solid white"]}
borderRight={['none', "1px solid white"]} >
    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
        GAming video Hub
    </Heading>
    <Text  color={'darkorange'}>
        All Rights Recieved
    </Text>

</VStack>
<VStack w={'full'}
borderRight={['none', "1px solid white"]} >
<Heading size={'md'} textTransform={'uppercase'}  >
Social Media
</Heading>
<Button variant={'link'} colorScheme='orange'>
<a target={'blank'} href="http://Instagram.com">Instagram</a>
</Button>

<Button variant={'link'} colorScheme='orange'>
<a target={'blank'} href="http://facebook.com">FaceBook</a>
</Button>
<Button variant={'link'} colorScheme='orange'>
<a target={'blank'} href="http://youtube.com" >Youtube</a>
</Button>

</VStack>
</Stack>
  </Box>
}

export default Footer