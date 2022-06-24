import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  SimpleGrid
} from "@chakra-ui/react";

import {
  BodyText,
  Heading2,
  Heading3,
  Heading5
} from "../../../styles/theme/styles";

export default function AllEpisodes() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1280px"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center">

          <Flex
            w="100%"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              lg: "flex-start",
              xl: "flex-start"
            }}
            justifyContent="space-between">

            <Box
              maxW="100%"
              w="195px"
              h="38px">

              <Heading2>
                All Podcasts
              </Heading2>
            </Box>

            <SimpleGrid
              mt="32px"
              maxW="100%"
              w="614px"
              columns={{
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4
              }}
              spacing='16px'
              placeItems={"center"}>

              <Box
                maxW="100%"
                w="162px"
                h='48px'>

                <Button
                  fontWeight="700"
                  w="100%"
                  h="100%"
                  bg="#503AE7"
                  color="#F4F2FF"
                  borderRadius="28.5px">

                  <Heading5>
                    All Podcasts
                  </Heading5>
                </Button>
              </Box>

              <Box
                maxW="100%"
                w="124px"
                h='48px'>

                <Button
                  fontWeight="700"
                  w="100%"
                  h="100%"
                  bg="#fff"
                  color="#AFB0B9"
                  borderRadius="28.5px"
                  border="1px solid #AFB0B9">

                  <Heading5>
                    Startup
                  </Heading5>
                </Button>
              </Box>

              <Box
                maxW="100%"
                w="144px"
                h='48px'>

                <Button
                  fontWeight="700"
                  w="100%"
                  h="100%"
                  bg="#fff"
                  color="#AFB0B9"
                  borderRadius="28.5px"
                  border="1px solid #AFB0B9">

                  <Heading5>
                    Marketing
                  </Heading5>
                </Button>
              </Box>

              <Box
                maxW="100%"
                w="136px"
                h='48px'>

                <Button
                  fontWeight="700"
                  w="100%"
                  h="100%"
                  bg="#fff"
                  color="#AFB0B9"
                  borderRadius="28.5px"
                  border="1px solid #AFB0B9">

                  <Heading5>
                    Business
                  </Heading5>
                </Button>
              </Box>
            </SimpleGrid>
          </Flex>

          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(3, 1fr)'
            }}
            gap={{
              base: "16",
              sm: "16",
              md: "8",
              lg: "8",
              xl: "16"
            }}
            placeItems="center"
            w="100%"
            mt="64px">

            <GridItem
              w='100%'
              h='460px'
              display={{
                base: "grid",
                sm: "flex",
                md: "grid",
                lg: "grid",
                xl: "grid"
              }}
              gap={2}
              alignItems="center"
              justifyItems="space-between" >

              <Box
                w="100%"
                h="256px"
                bgSize="100%"
                bgPosition="left"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?cs=srgb&dl=pexels-fauxels-3182755.jpg&fm=jpg">

              </Box>

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Ep 1: How to build a world-class
                  business brand
                </Heading3>

                <BodyText
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </BodyText>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between">

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <rect width="32" height="32" fill="#503AE7" rx="16" />
                    <path fill="#fff" d="m21.333 16-8.888 5.645v-11.29L21.332 16Z" />
                  </svg>

                  <BodyText
                    fontWeight="600"
                    color="#503AE7">
                    Listen Now
                  </BodyText>
                </Flex>
              </Flex>

            </GridItem>

            <GridItem
              w='100%'
              h='460px'
              display={{
                base: "grid",
                sm: "flex",
                md: "grid",
                lg: "grid",
                xl: "grid"
              }}
              gap={2}
              alignItems="center"
              justifyItems="space-between" >

              <Box
                w="100%"
                h="256px"
                bgSize="100%"
                bgPosition="left"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?cs=srgb&dl=pexels-mentatdgt-1220757.jpg&fm=jpg" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Ep 1: How to build a world-class
                  business brand
                </Heading3>

                <BodyText
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </BodyText>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between">

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <rect width="32" height="32" fill="#503AE7" rx="16" />
                    <path fill="#fff" d="m21.333 16-8.888 5.645v-11.29L21.332 16Z" />
                  </svg>

                  <BodyText
                    fontWeight="600"
                    color="#503AE7">
                    Listen Now
                  </BodyText>
                </Flex>
              </Flex>

            </GridItem>

            <GridItem
              w='100%'
              h='460px'
              display={{
                base: "grid",
                sm: "flex",
                md: "grid",
                lg: "grid",
                xl: "grid"
              }}
              gap={2}
              alignItems="center"
              justifyItems="space-between" >

              <Box
                w="100%"
                h="256px"
                bgSize="100%"
                bgPosition="left"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?cs=srgb&dl=pexels-canva-studio-3194524.jpg&fm=jpg" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Ep 1: How to build a world-class
                  business brand
                </Heading3>

                <BodyText
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </BodyText>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between">

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <rect width="32" height="32" fill="#503AE7" rx="16" />
                    <path fill="#fff" d="m21.333 16-8.888 5.645v-11.29L21.332 16Z" />
                  </svg>

                  <BodyText
                    fontWeight="600"
                    color="#503AE7">
                    Listen Now
                  </BodyText>
                </Flex>
              </Flex>

            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  )
}
