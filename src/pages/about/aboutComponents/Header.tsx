import {
  Box,
  Button,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading1,
  PrimaryButton
} from "../../../styles/theme/styles";

import IconAbout from '../../../styles/images/IconAbout.svg'

export default function Header() {
  return (
    <>
      <Flex
        mt="64px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1024px"
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
            w="480px"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start"
            }}>

            <Heading1
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}>
              About Finsweet
              Podcast
            </Heading1>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </Body>

            <PrimaryButton
              mt="32px"
              w="185px">
              Subscribe Now!
            </PrimaryButton>
          </Flex>

          <Box
            mt={{
              base: "64px",
              sm: "64px",
              md: "64px",
              lg: "0px",
              xl: "0px"
            }}
            maxW="100%"
            w="480px">

            <img src={IconAbout} alt="Icon About" />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
