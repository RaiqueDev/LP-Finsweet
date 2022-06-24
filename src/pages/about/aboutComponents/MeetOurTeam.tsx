import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function MeetOurTeam() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1280px"
          flexDir="column">

          <Text
            maxW="100%"
            w="239px"
            h="38px"
            bg="pink">

          </Text>

          <SimpleGrid
            mt="48px"
            columns={{
              sm: 1,
              md: 2,
              lg: 3,
              xl: 3
            }}
            spacing='16px'
            placeItems={"center"}
            w="100%">

            <Box
              bg='pink'
              w="100%"
              h='449px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='449px'>

            </Box>

            <Box
              bg='pink'
              w="100%"
              h='449px'>

            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}
