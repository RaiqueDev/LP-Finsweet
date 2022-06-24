import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

export default function Items() {
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
          spacing='32px'
          placeItems={"center"}
          maxW="90%"
          w="1280px">

          <Box
            bg='pink'
            w="100%"
            h='228px'>

          </Box>

          <Box
            bg='pink'
            w="100%"
            h='228px'>

          </Box>

          <Box
            bg='pink'
            w="100%"
            h='228px'>

          </Box>
        </SimpleGrid>
      </Flex>
    </>
  )
}
