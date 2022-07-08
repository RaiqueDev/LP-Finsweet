import {
  Box,
  Flex,
  SimpleGrid
} from "@chakra-ui/react";

import {
  Body,
  Heading2,
  Heading3,
  SeeMore
} from "../../../styles/theme/styles";

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
          maxW="90%"
          w="1280px">

          <Flex
            bg='#F4F2FF'
            w="100%"
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
              w="100%">

              <svg xmlns="http://www.w3.org/2000/svg" width="416" height="320" fill="none" viewBox="0 0 416 320">
                <mask id="a" width="416" height="320" x="0" y="0" maskUnits="userSpaceOnUse" >
                  <path fill="#F4F2FF" d="M0 0h416v320H0z" />
                </mask>
                <g mask="url(#a)">
                  <path fill="#1AD993" d="m.442 485.66-52.819-52.437L383.993 0l52.819 52.438z" />
                  <path fill="#503AE7" d="m7.493 251.207-52.82-52.439L119.634 35l52.819 52.439zm177.278 269.306-52.819-52.439L430.18 172l52.819 52.438z" />
                </g>
              </svg>

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
              bgPosition="center"
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
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
              bgImg="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?cs=srgb&dl=pexels-drew-williams-3568520.jpg&fm=jpg" />

            <Flex
              w="100%"
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
