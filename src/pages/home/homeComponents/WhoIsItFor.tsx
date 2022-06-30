import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading2
} from "../../../styles/theme/styles";

export default function WhoIsItFor() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        justifyContent="flex-end">

        <Flex
          maxW={{
            base: "100%",
            sm: "100%",
            lg: "100%",
            xl: "90%"
          }}
          w={{
            base: "100%",
            sm: "100%",
            lg: "100%",
            xl: "1303px"
          }}
          h="100%"
          flexDir={{
            base: "column",
            sm: "column",
            lg: "column",
            xl: "row"
          }}
          alignItems="center"
          justifyContent="space-between">

          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center">

            <Flex
              maxW="90%"
              w="411px"
              h="100%"
              flexDir="column"
              justifyContent="space-between">

              <Heading2
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                  xl: "left"
                }}>
                A podcast for makers and
                entrepreneurs
              </Heading2>

              <Body
                textAlign={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                  xl: "left"
                }}
                mt="28px">
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
              </Body>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            h={{
              base: "396px",
              sm: "396px",
              lg: "396px",
              xl: "496px"
            }}
            alignItems="center"
            justifyContent="flex-end"
            mt={{
              base: "64px",
              sm: "64px",
              md: "64px",
              lg: "64px",
              xl: "0px"
            }}>

            <Flex
              maxW="100%"
              w="710px"
              h="100%"
              bg="#503AE7"
              justifyContent="center"
              alignItems="center">

              <Flex
                maxW="90%"
                w="461px"
                h={{
                  base: "295px",
                  sm: "384px",
                  md: "384px",
                  lg: "384px",
                  xl: "384px"
                }}
                justifyContent="flex-end"
                alignItems="flex-end">

                <Flex
                  w="100%"
                  h="100%"
                  alignItems="flex-end">

                  <Box
                    maxW="90%"
                    w="96px"
                    h="96px"
                    pos="absolute"
                    mb="38px"
                    borderRadius="999px"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgImage="https://images.pexels.com/photos/7229039/pexels-photo-7229039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                  <Box
                    maxW="100%"
                    w={{
                      base: "295px",
                      sm: "384px",
                      md: "384px",
                      lg: "384px",
                      xl: "384px"
                    }}
                    h={{
                      base: "295px",
                      sm: "384px",
                      md: "384px",
                      lg: "384px",
                      xl: "384px"
                    }}
                    borderRadius="999px"
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgImage="https://images.pexels.com/photos/6892891/pexels-photo-6892891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">

                  </Box>
                </Flex>

                <Box
                  maxW="100%"
                  w="108px"
                  pos="absolute"
                  mb="109px">

                  <svg xmlns="http://www.w3.org/2000/svg" width="108" height="72" fill="none" viewBox="0 0 108 72">
                    <path fill="#1AD993" d="M88 72H0v-8h88zm20-32H50v-8h58zM73 8H15V0h58z" />
                  </svg>

                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
