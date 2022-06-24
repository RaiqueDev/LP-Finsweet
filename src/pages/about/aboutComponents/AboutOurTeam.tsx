import { Box, Flex, Text } from "@chakra-ui/react";

export default function AboutOurTeam() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="100%"
          w="1206px"
          alignItems="center"
          justifyContent="center">

          <Flex
            maxW="90%"
            w="1024px"
            flexDir="column">

            <Text
              maxW="100%"
              w="351px"
              h="76px"
              bg="pink">

            </Text>

            <Box
              mt="48px"
              maxW="100%"
              w="1024px"
              h="320px"
              bg="pink">

            </Box>

            <Flex
              mt="48px"
              maxW="100%"
              w="1024px"
              gap="8"
              flexDir={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row"
              }}
              alignItems={{
                base: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start"
              }}
              justifyContent="space-between">

              <Box
                maxW="100%"
                w="496px"
                h="120px"
                bg="pink">

              </Box>

              <Box
                maxW="100%"
                w="496px"
                h="74px"
                bg="pink">

              </Box>
            </Flex>
          </Flex>


        </Flex>
      </Flex>
    </>
  )
}
