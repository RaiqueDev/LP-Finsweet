import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

export default function Achievements() {
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
            xl: 4
          }}
          spacing='16px'
          placeItems={"center"}
          maxW="90%"
          w="1280px">

          <Box
            w="100%"
            h="560px"
            bg="pink">

          </Box>

          <Box
            w="100%"
            h="560px"
            bg="pink">

          </Box>

          <Box
            w="100%"
            h="560px"
            bg="pink">

          </Box>

          <Box
            w="100%"
            h="560px"
            bg="pink">

          </Box>

        </SimpleGrid>
      </Flex>
    </>
  )
}
