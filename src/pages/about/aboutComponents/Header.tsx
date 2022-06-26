import {
  Box,
  Button,
  Flex
} from "@chakra-ui/react";

import {
  BodyText,
  Heading1
} from "../../../styles/theme/styles";

export default function Header() {
  return (
    <>
      <Flex
        mt="64px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1024px"
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
            w="480px"
            h="290px"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start"
            }}>

            <Heading1>
              About Finsweet
              Podcast
            </Heading1>

            <BodyText
              mt="32px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </BodyText>

            <Button
              mt="32px"
              w="185px"
              h="48px"
              bg="#503AE7"
              borderRadius="none"

              fontFamily='Inter'
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              lineHeight="24px"
              color="#FFFFFF">
              Subscribe Now!
            </Button>
          </Flex>

          <Box
            mt={{
              base: "64px",
              sm: "64px",
              md: "64px",
              lg: "0px",
              xl: "0px"
            }}
            maxW="100%"
            w="480px"
            h={{
              base: "340px",
              sm: "340px",
              md: "340px",
              lg: "480px",
              xl: "480px"
            }}
            bg="pink">

          </Box>
        </Flex>
      </Flex>
    </>
  )
}
