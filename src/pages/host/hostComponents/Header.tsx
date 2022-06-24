import {
  Box,
  Flex
} from "@chakra-ui/react";

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

          <Box
            maxW="100%"
            w="397px"
            h="361px"
            bg="pink">

          </Box>
        </Flex>
      </Flex>
    </>
  )
}
