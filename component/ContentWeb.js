import React from 'react'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
    MdCheckCircle,
    MdSettings,
  } from 'react-icons/md'
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    FormControl,
    Textarea,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
    WrapItem,
    HStack,
    Wrap,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
    Center,
  } from '@chakra-ui/react'


function ContentWeb() {
  return (
    <Container maxW={'5xl'} fontSize={"-apple-system"}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
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
          <Text color={'gray.500'}>
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
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={'red.400'}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
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
      <Flex id='services' >
        <Stack>
        <Text width={"250px"} fontWeight={"700"} fontSize={["15px","15px","15px","20px","20px"]}> - Formation :</Text>
        </Stack>
        <Stack>
       <SimpleGrid columns={2} spacing={10}>
              <Box id='office'>
                <Center>
                  <Image src='./365.png' alt='pack office' width={'100'} height={"100"}/>
                  

                </Center>
                <Center>
                <Heading>Pack Office</Heading>
                </Center>
                <Text textAlign={"center"}>
                  Initiation au packs Office, et developpement des compétences 
                </Text>
              </Box>
              <Box id='soutien'>
                <Center>
                <Image src='./soutien100.png' alt='Soutien scolaire'/>
                  </Center>
                  <Center>
                    <Heading>Soutien Scolaire </Heading>
                  </Center>
                  <Text textAlign={"center"}>
                    Beneficier d{"'"}un suivi scolaire tout au long de l{"'"}année avec un encadrement de qualité.
                    Ce qu{"'"}il faut pour de bons resultats scolaires et une instruction de renom.
                  </Text>

              </Box>
              <Box id='base'>
                <Center>
                <Image src='./techno96.png' alt='Technologie'/>
                  </Center>
                  <Center>
                    <Heading fontSize={"28px"}>Initiation à l{"'"}informatique</Heading>
                  </Center>
                  <Text textAlign={"center"}>
                    Venez decouvrir le vaste monde de l{"'"}informatique, en passant de la decouverte des composants aux languages de communications qui rend ce monde merveilleux et plein de vie. 
                  </Text>

              </Box>
              <Box id='maintenance'>
                <Center>
                <Image src='./maintenance100.png' alt='maintenance'/>
                  </Center>
                  <Center>
                    <Heading>Maintenance</Heading>
                  </Center>
                  <Text textAlign={"center"}>
                    Beneficer de nos services pour tout vos problemes informatiques(<b>Materiels</b> ou <b>Logiciels</b>).
                    
                    </Text>
                    <Text textAlign={"center"}>
               Intervention à <b>Domicile</b>, en <b>Entreprise</b>, ou  en <b>Ligne</b>
                    </Text>
                    <Text textAlign={"center"}>
                      Confier nous et detendez vous.             </Text>

              </Box>
       </SimpleGrid>
        </Stack>
        
      </Flex> 


      <Flex my={5} id='web' >
        <Stack>
        <Text width={"250px"} fontWeight={"700"} fontSize={["15px","15px","15px","20px","20px"]}> -Developpement Web :</Text>
        </Stack>
        <Stack>
          <Text>
              Profiter de nos experts ayants déjà réalisé des projets professionnels a moindre coût et sans avoir à vous prendre la tête  qu{"'"}en il s{"'"}agit de :</Text>
             <Box ml={10}>
                <li><b>Trouver de la main d{"'"}oeuvre de qualité</b></li>
                <li><b>Avoir un travail bien fait</b></li>
                <li><b>Etre suivi par une équipe d{"'"}expert</b></li>
                <li><b>Une gestion de projet optimale</b></li>
                <li><b>...</b></li>
                </Box>
              <Text>Nos Experts utilisent les languages de programmes assez demandés tels que : <b>Reactjs, Python, Java, Nextjs, Laravel, Symfony</b></Text>
        </Stack>
        
      </Flex> 



      <Flex  id='mobile'>
        <Stack>
        <Text width={"250px"} fontWeight={"700"} fontSize={["15px","15px","15px","20px","20px"]}> -Developpement Mobile :</Text>
        </Stack>
        <Stack>
          <Text>
              Profiter de nos experts ayants déjà réalisé des projets professionnels a moindre coût et sans avoir à vous prendre la tête  qu{"'"}en il s{"'"}agit de :</Text>
             <Box ml={10}>
                <li><b>Trouver de la main d{"'"}oeuvre de qualité</b></li>
                <li><b>Avoir un travail bien fait</b></li>
                <li><b>Etre suivi par une équipe d{"'"}expert</b></li>
                <li><b>Une gestion de projet optimale</b></li>
                <li><b>...</b></li>
                </Box>
              <Text>Nos Experts utilisent les languages de programmes assez demandés tels que : <b>Kotlin, XML, Java</b></Text>
        </Stack>
        
      </Flex> 



      <Container id='contact'  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="red.400"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Flex>
                  <Image mt={-5} src='./bgSans2.png' alt='Sogel Interrogation' height={"80px"}/>
                  <Heading color={"black"}>Contact</Heading>
                  </Flex>
                  
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.900">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#000" size="20px" />}>
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#000" size="20px" />}>
                        hello@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#000" size="20px" />}>
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    </Container>
  )
}










// const PlayIcon = createIcon({
//     displayName: 'PlayIcon',
//     viewBox: '0 0 58 58',
//     d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
//   })
  
  const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    )
  }





export default ContentWeb