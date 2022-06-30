import {
  Box,
  Flex,
  SimpleGrid,
  Text
} from "@chakra-ui/react";

import {
  Body,
  Heading2,
  Heading3,
  SeeMore
} from "../../../styles/theme/styles";

import MaskGroup from '../../../styles/images/MaskGroup.svg'

export default function ArticlesAndNews() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3
          }}
          spacing='16px'
          placeItems={"center"}
          maxW="90%"
          w="1280px">

          <Flex
            bg='#F4F2FF'
            w="100%"
            h='516px'
            flexDir="column"
            alignItems="center"
            justifyContent="space-between">

            <Box
              mt="40px"
              w="90%">

              <Heading2>
                Read our<br />
                articles & news
              </Heading2>

              <SeeMore
                mt="16px"
                color="#503AE7">
                See More
              </SeeMore>
            </Box>

            <Flex
              w="100%"
              h="320px">

              <Flex
                w="100%"
                h="320px">

                <img src={MaskGroup} />
              </Flex>

            </Flex>
          </Flex>

          <Flex
            w="100%"
            flexDir="column"
            justifyContent="space-between">

            <Box
              w="100%"
              h="320px"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="left"
              bgImg="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?cs=srgb&dl=pexels-david-mcbee-730547.jpg&fm=jpg" />

            <Flex
              w="100%"
              flexDir="column"
              justifyContent="space-between">

              <Heading3
                mt="32px">
                Getting the first 100 customers for
                your business
              </Heading3>

              <Body
                mt="16px"
                textAlign="left">
                Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
              </Body>

              <SeeMore
                mt="16px"
                color="#503AE7">
                Read Now
              </SeeMore>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            flexDir="column"
            justifyContent="space-between">

            <Box
              w="100%"
              h="320px"
              bg="green.400"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="left"
              bgImg="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?cs=srgb&dl=pexels-drew-williams-3568520.jpg&fm=jpg" />

            <Flex
              w="100%"
              h="164px"
              flexDir="column"
              justifyContent="space-between">

              <Heading3
                mt="32px">
                Apparently we had reached a great height in the atmosphere, ...
              </Heading3>

              <Body
                mt="16px"
                textAlign="left">
                Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
              </Body>

              <SeeMore
                mt="16px"
                color="#503AE7">
                Read Now
              </SeeMore>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Flex>
    </>
  )
}
