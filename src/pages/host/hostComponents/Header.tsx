import {
  Box,
  Button,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading2,
  Heading5
} from "../../../styles/theme/styles";

export default function Header() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1069px"
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row"
          }}
          alignItems="center"
          justifyContent="center"
          gap="8">

          <Box
            maxW="100%"
            w="339px"
            h="462px"
            bg="pink">

          </Box>

          <Flex
            maxW="100%"
            w="397px"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start"
            }}>

            <Heading5
              textTransform="uppercase"
              color="#503AE7"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}>
              About The Host
            </Heading5>

            <Heading2
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Hey there, I’m Andrew Jonson and welcome to my Podcast
            </Heading2>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </Body>

            <Button
              mt="43px"
              w="151px"
              h="48px"
              background="#503AE7"

              fontFamily='Inter'
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
              color="white"
              borderRadius="none">

              Know More
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
