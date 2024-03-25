import { Box, Button, Flex, Heading, Icon, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'








function Index() {
  return (
    <Box bgColor={"#111111"} h={"calc(100vh)"} px={5}>
        <Flex justifyContent={"space-between"}>
           
            <Flex justifyContent={"space-between"} width={"25%"} color={"white"} fontSize={"20px"}>
                <Box>
            <Image src='/sogelLogo.png' width={"50px"} height={"50px"} alt='Logo de sogel'/>
            </Box>
            <Flex >
                <Text mr={10}>A propos</Text>
                <Text mr={10}>Services</Text>
                <Text>Contact</Text>
                </Flex>
            </Flex>
            <Button>Prendre rendez-vous</Button>
        </Flex>


        <Flex>
        <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 5 }}>
          <Heading
          color={"white"}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Un callToAction
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
             Nous joindre
            </Text>
          </Heading>
          <Text color={'gray.300'}>
            Nostrud voluptate cupidatat nisi reprehenderit dolor veniam ea ea eu adipisicing tempor sint laborum do. Veniam excepteur fugiat elit et nisi ipsum nulla magna aliqua nostrud amet anim proident. Deserunt et nulla ipsum veniam nostrud pariatur cupidatat duis aute adipisicing. Lorem ea deserunt aute officia ullamco ut. Occaecat quis consequat quis cupidatat tempor ut aliqua magna proident ullamco esse. Irure do mollit consequat tempor reprehenderit nulla.

Qui officia consequat officia laboris ut deserunt sunt dolor cupidatat. Duis nostrud eiusmod irure et. Ut nisi reprehenderit do aute deserunt eiusmod nostrud adipisicing exercitation pariatur. Ut quis irure nostrud ad reprehenderit cupidatat irure quis.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
             Nous contacter
            </Button>
         
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
         
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'90%'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<img width="50" height="50" src="https://img.icons8.com/ios/50/000000/play-button-circled--v1.png" alt="play-button-circled--v1"/>}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
      <Heading>A</Heading>
        </Flex>
    </Box>
  )
}

export default Index