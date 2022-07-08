import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading1,
  PrimaryButton
} from "../../../styles/theme/styles";

import IconAbout from '../../../styles/images/IconAbout.svg'
import Image from "next/image";

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

            <svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" fill="none" viewBox="0 0 480 480">
              <path fill="#1AD993" d="M42.552 394.093 0 351.541 351.542 0l42.552 42.551z" />
              <path fill="#14142B" d="M343.472 143.916v17.914c-.036 30.129-11.042 59.238-31.005 82.002-19.963 22.764-47.549 37.66-77.71 41.965v55.175h54.357v35.829H144.16v-35.829h54.358v-55.175c-30.161-4.305-57.747-19.201-77.71-41.965-19.963-22.764-30.97-51.873-31.005-82.002v-17.914h36.238v17.914c0 23.756 9.545 46.539 26.535 63.336 16.99 16.798 40.034 26.235 64.061 26.235 24.028 0 47.072-9.437 64.062-26.235 16.99-16.797 26.535-39.58 26.535-63.336v-17.914h36.238Zm-126.835 71.657c14.417 0 28.243-5.662 38.437-15.741 10.194-10.079 15.921-23.749 15.921-38.002V72.259c0-14.254-5.727-27.923-15.921-38.002-10.194-10.079-24.02-15.741-38.437-15.741-14.416 0-28.242 5.662-38.436 15.74-10.194 10.08-15.921 23.75-15.921 38.003v89.571c0 14.253 5.727 27.923 15.921 38.002 10.194 10.079 24.02 15.741 38.436 15.741Z" />
              <path fill="#503AE7" d="M45.17 178.062 2.618 135.51 135.511 2.618l42.551 42.552zM239.746 480l-42.552-42.552 240.253-240.253L480 239.747z" />
            </svg>

          </Box>
        </Flex>
      </Flex>
    </>
  )
}
