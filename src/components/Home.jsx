import { Box, Container, Heading, Image,Text, Stack} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3.jpg'
import img4 from '../assests/4.jpg'
import img5 from '../assests/5.png'



const headingOptions = { 
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform :"upperCase",
  p:"4",
  size:'4xl'
}
const Home = () => {
  return <Box>
    <MyCarousel />
    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
<Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} margin={'auto'}>
Services
</Heading>

<Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
  <Image src={img5}h={['40','400']} filter={'hue-rotate(-130deg)'}/>

<Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</Text>

</Stack>
    </Container>
  </Box>
}

const MyCarousel =()=>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumb={false} showArrows={false}>
<Box w={'full'} h={'100vh'} >
<Image src={img1} alt="1" />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
Watch the future
</Heading>
</Box>

<Box w={'full'} h={'100vh'} >
<Image src={img2} alt="1" />
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
Future is Gaming
</Heading>
</Box>
<Box w={'full'} h={'100vh'} >
<Image src={img3} alt="1" />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Gaming on Console
</Heading>
</Box>
<Box w={'full'} h={'100vh'} >
<Image src={img4} alt="1" />
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
Nght Life is cool
</Heading>
</Box>

  </Carousel>
)
export default Home