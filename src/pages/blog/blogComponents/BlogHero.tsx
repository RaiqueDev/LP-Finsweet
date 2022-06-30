import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Caption,
  Heading2,
  SeeMore
} from "../../../styles/theme/styles";

export default function BlogHero() {
  return (
    <>
      <Flex
        mt="64px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1280px"
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row"
          }}
          alignItems="center"
          justifyContent="space-between"
          gap="5">

          <Flex
            maxW="100%"
            w="525px"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start"
            }}>

            <Caption
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              color="blue">
              Featured
            </Caption>

            <Heading2
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="16px">
              Should I raise money for my
              startup, or not?
            </Heading2>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="16px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Body>

            <SeeMore
              mt="32px"
              display="flex"
              alignItems="center"
              gap="8px"
              color="blue">
              Read Now

              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="12" fill="none" viewBox="0 0 23 12">
                <path fill="#503AE7" fill-rule="evenodd" d="m17.466.239 5.29 5.185a.803.803 0 0 1 0 1.152l-5.29 5.185a.844.844 0 0 1-1.176 0 .803.803 0 0 1 0-1.152l3.872-3.794H0v-1.63h20.162L16.29 1.391a.803.803 0 0 1 0-1.152.843.843 0 0 1 1.176 0Z" clip-rule="evenodd" />
              </svg>
            </SeeMore>
          </Flex>

          <Box
            mt={{
              base: "139px",
              sm: "139px",
              md: "139px",
              lg: "0px",
              xl: "0px"
            }}
            maxW="100%"
            w="616px"
            h="448px"
            bg="pink">


          </Box>
        </Flex>
      </Flex>
    </>
  )
}
