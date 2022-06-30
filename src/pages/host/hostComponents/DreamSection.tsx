import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading2
} from "../../../styles/theme/styles";

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

          <Flex
            maxW="100%"
            w="522px"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start"
            }}>

            <Heading2
              maxW="90%"
              w="322px"
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}>
              A small story about
              a big dream  —
            </Heading2>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon
            </Body>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px"
              fontWeight="600">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and
            </Body>
          </Flex>

          <Flex
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
            alignItems="flex-end">

            <Flex
              w="100%"
              justifyContent="flex-end">

              <Box
                maxW={{
                  base: "100%",
                  sm: "100%",
                  md: "90%",
                  lg: "90%",
                  xl: "90%"
                }}
                w="630px"
                h="615px"
                bg="green"
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgImg="https://images.pexels.com/photos/6878718/pexels-photo-6878718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Flex>

            <Flex
              maxW="90%"
              w="384px"
              h="124px"
              bg="#503AE7"
              pos="absolute"
              alignItems="center"
              justifyContent="center">

              <svg xmlns="http://www.w3.org/2000/svg" width="320" height="92" fill="none" viewBox="0 0 320 92">
                <path fill="#1AD993" d="M7.048 25.464H0v40.25h7.048v-40.25Zm26.372-5.75h-7.928v52.572h7.929V19.714Z" />
                <path fill="#F4F2FF" d="M58.913 18.893h-7.048v53.393h7.047V18.893Z" />
                <path fill="#1AD993" d="M85.286 16.429h-7.929V75.57h7.929V16.43ZM111.659 0h-7.929v92h7.929V0Z" />
                <path fill="#F4F2FF" d="M137.151 16.429h-7.048V75.57h7.048V16.43Z" />
                <path fill="#1AD993" d="M189.897 25.464h-7.929v40.25h7.929v-40.25Zm-26.373 0h-7.929v40.25h7.929v-40.25Zm51.865-5.75h-7.048v52.572h7.048V19.714Z" />
                <path fill="#F4F2FF" d="M241.762 16.429h-7.929V75.57h7.929V16.43Z" />
                <path fill="#1AD993" d="M268.135 25.464h-7.928v40.25h7.928v-40.25Zm25.492-5.75h-7.047v52.572h7.047V19.714ZM320 33.678h-7.929v24.643H320V33.68Z" />
              </svg>

            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
