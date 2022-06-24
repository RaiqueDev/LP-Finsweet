import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  BodyText,
  Heading2
} from "../../../styles/theme/styles";

export default function HowItBegan() {
  return (
    <>
      <Flex
        w="100%"
        justifyContent="flex-start"
        mt="128px">

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
            h={{
              base: "396px",
              sm: "396px",
              lg: "396px",
              xl: "496px"
            }}
            alignItems="center"
            justifyContent="flex-start">

            <Flex
              maxW="100%"
              w="710px"
              h="100%"
              alignItems="self-end"
              justifyContent="flex-end">

              <Box
                w="100%"
                h="100%">

                <Box
                  maxW="90%"
                  w="710px"
                  h="100%"
                  display="flex"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPos="center"
                  bgImg={"https://images.pexels.com/photos/6878173/pexels-photo-6878173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
              </Box>

              <Box
                maxW="90%"
                w="318px"
                h="112px"
                bg="#503AE7"
                pos="absolute"
                mb="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="16px">

                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="30" fill="none" viewBox="0 0 48 30">
                  <path fill="#1AD993" fill-rule="evenodd" d="M1.553 3.53C0 5.716 0 8.81 0 15s0 9.285 1.553 11.47a8.395 8.395 0 0 0 1.978 1.977C5.715 30 8.81 30 15 30h18c6.19 0 9.285 0 11.47-1.553a8.395 8.395 0 0 0 1.977-1.978C48 24.285 48 21.19 48 15c0-6.19 0-9.285-1.553-11.47a8.395 8.395 0 0 0-1.978-1.977C42.285 0 39.19 0 33 0H15C8.81 0 5.715 0 3.53 1.553A8.395 8.395 0 0 0 1.554 3.53ZM20.95 20.286l9.45-5.384-9.45-5.384v10.768Z" clip-rule="evenodd" />
                </svg>

                <Heading2
                  lineHeight="600"
                  color="#FFFFFF">
                  350+ Videos
                </Heading2>
              </Box>
            </Flex>
          </Flex>

          <Flex
            w="100%"
            h="204px"
            alignItems="center"
            justifyContent="center"
            mt={{
              base: "64px",
              sm: "64px",
              md: "64px",
              lg: "64px",
              xl: "0px"
            }}>

            <Flex
              maxW="90%"
              w="411px"
              h="100%"
              flexDir="column"
              justifyContent="space-between">

              <Heading2>
                My origins on<br />
                <span color="#503AE7">Youtube</span> in 2008
              </Heading2>

              <BodyText>
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
              </BodyText>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
