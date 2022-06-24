import { Box, Flex } from "@chakra-ui/react";

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

          <Box
            maxW="100%"
            w="480px"
            h="290px"
            bg="pink">

          </Box>

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
