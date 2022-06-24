import {
  Box,
  Flex,
  Grid,
  GridItem
} from "@chakra-ui/react";

import {
  BodyText,
  Heading2,
  Heading3
} from "../styles";

export default function RecentEpisodes() {
  return (
    <>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        mt="128px">

        <Flex
          maxW="90%"
          w="1280px"
          h="100%"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center">

          <Flex
            w="100%"
            h={{
              base: "214px",
              sm: "214px",
              lg: "108px",
              xl: "108px"
            }}
            flexDir={{
              base: "column",
              sm: "column",
              lg: "row",
              xl: "row"
            }}
            alignItems={{
              base: "center",
              sm: "center",
              lg: "flex-end",
              xl: "flex-end"
            }}
            justifyContent="space-between">

            <Flex
              maxW="100%"
              w="372px"
              h="108px"
              flexDir="column"
              justifyContent="space-between">

              <Heading2>
                Recent Episodes
              </Heading2>

              <BodyText>
                Apparently we had reached a great height in the
                atmosphere, for the sky was a dead black.
              </BodyText>
            </Flex>

            <Box
              maxW="90%"
              w="195px"
              h="48px">

            </Box>
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
                bgImg="https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?cs=srgb&dl=pexels-mentatdgt-1220757.jpg&fm=jpg">

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
                bgImg="https://images.pexels.com/photos/3194524/pexels-photo-3194524.jpeg?cs=srgb&dl=pexels-canva-studio-3194524.jpg&fm=jpg">

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
                  justifyContent="space-between"
                  cursor="pointer">

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
      </Flex >
    </>
  )
}
