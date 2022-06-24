import { Box, Flex } from "@chakra-ui/react";

export default function DreamSection() {
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
            w="522px"
            h="268px"
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
            w="694px"
            h="635px"
            bg="pink">

          </Box>
        </Flex>
      </Flex>
    </>
  )
}
