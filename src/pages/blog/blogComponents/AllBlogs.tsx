import {
  Box,
  Flex,
  GridItem,
  SimpleGrid
} from "@chakra-ui/react";

import {
  Body,
  Heading2,
  Heading3,
  SeeMore
} from "../../../styles/theme/styles";

export default function AllBlogs() {
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
          flexDir="column">

          <Heading2
            maxW="100%"
            w="137px"
            h="38px">
            All Blogs
          </Heading2>

          <SimpleGrid
            columns={{
              sm: 1,
              md: 2,
              lg: 3,
              xl: 3
            }}
            gap={{
              base: "16",
              sm: "16",
              md: "8",
              lg: "8",
              xl: "16"
            }}
            w="100%"
            mt="48px">

            <GridItem
              w='100%'
              display={{
                base: "grid",
                sm: "flex",
                md: "grid",
                lg: "grid",
                xl: "grid"
              }}
              gap={2}
              alignItems="center"
              justifyItems="space-between">

              <Box
                w="100%"
                h="256px"
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  How to build a world-class
                  business brand
                </Heading3>

                <Body
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </Body>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer">

                  <SeeMore
                    color="blue">
                    Read Now
                  </SeeMore>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w='100%'
              display={{
                base: "grid",
                sm: "flex",
                md: "grid",
                lg: "grid",
                xl: "grid"
              }}
              gap={2}
              alignItems="center"
              justifyItems="space-between">

              <Box
                w="100%"
                h="256px"
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  How to build a world-class
                  business brand
                </Heading3>

                <Body
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </Body>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer">

                  <SeeMore
                    color="blue">
                    Read Now
                  </SeeMore>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w='100%'
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
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Getting the first 100 customers for
                  your business
                </Heading3>

                <Body
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </Body>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer">

                  <SeeMore
                    color="blue">
                    Read Now
                  </SeeMore>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w='100%'
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
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Should I raise money for my
                  startup, or not?
                </Heading3>

                <Body
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </Body>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer">

                  <SeeMore
                    color="blue">
                    Read Now
                  </SeeMore>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w='100%'
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
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/7578685/pexels-photo-7578685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Getting the first 100 customers for
                  your business
                </Heading3>

                <Body
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </Body>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer">

                  <SeeMore
                    color="blue">
                    Read Now
                  </SeeMore>
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w='100%'
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
                bgPosition="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                bgImg="https://images.pexels.com/photos/7148048/pexels-photo-7148048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

              <Flex
                w="100%"
                flexDir="column"
                justifyContent="space-between">

                <Heading3
                  mt="16px"
                  w="100%">

                  Getting the first 100 customers for
                  your business
                </Heading3>

                <Body
                  mt="16px"
                  w="100%"
                  textAlign="left">

                  Lorem ipsum at vero eos et accusam et justo duo
                  dolores et ea rebum.
                </Body>

                <Flex
                  mt="16px"
                  w="126px"
                  h="38px"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer">

                  <SeeMore
                    color="blue">
                    Read Now
                  </SeeMore>
                </Flex>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}
