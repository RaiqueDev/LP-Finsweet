import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function OurSponsors() {
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
          flexDir="column">

          <Text
            maxW="100%"
            w="324px"
            h="62px"
            bg="pink">

          </Text>

          <SimpleGrid
            columns={{
              sm: 1,
              md: 2,
              lg: 3,
              xl: 3
            }}
            spacing='16px'
            placeItems={"center"}
            w="100%"
            mt="48px">

            <Box
              bg='pink'
              w="100%"
              h='224px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='224px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='224px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='224px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='224px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='224px'>

            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}