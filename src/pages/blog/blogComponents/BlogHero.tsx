import {
  Box,
  Flex
} from "@chakra-ui/react";

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

          <Box
            maxW="100%"
            w="525px"
            h="268px"
            bg="pink">

          </Box>

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
