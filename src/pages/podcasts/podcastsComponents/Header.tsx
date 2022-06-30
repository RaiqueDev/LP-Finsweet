import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading2,
  Heading5
} from "../../../styles/theme/styles";

import HeaderB from '../../../styles/images/HeaderB.svg'

export default function Header() {
  return (
    <>
      <Flex
        w="100%"
        py="48px"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
          xl: "flex-start"
        }}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgImage={HeaderB}>

        <Flex
          maxW="90%"
          w="768px"
          ml={{
            base: "0px",
            sm: "0px",
            md: "0px",
            lg: "80px",
            xl: "80px"
          }}
          background="#503AE7"
          opacity="0.9"
          borderLeft="16px solid #1AD993"
          alignItems="center"
          justifyContent="center"
          py="96px"
          color="white">

          <Box
            maxW="90%"
            w="593px">

            <Heading5
              textAlign="left"
              textTransform="uppercase"
              color="offWhite">
              Featured
            </Heading5>

            <Heading2
              textAlign="left"
              mt="16px"
              color="offWhite">
              A UX Case Study on Creating a Studious Environment
            </Heading2>

            <Body
              textAlign="left"
              mt="16px"
              color="offWhite">
              Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon
            </Body>

            <Flex
              mt="16px"
              w="126px"
              h="38px"
              alignItems="center"
              justifyContent="space-between">

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect width="32" height="32" fill="#1AD993" rx="16" />
                <path fill="#fff" d="m21.333 16-8.888 5.645v-11.29L21.332 16Z" />
              </svg>

              <Body
                fontWeight="600"
                color="offWhite">
                Listen Now
              </Body>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
