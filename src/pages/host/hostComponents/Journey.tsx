import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading2
} from "../../../styles/theme/styles";

export default function Journey() {
  return (
    <>
      <Flex
        mt="128px"
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
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xl: "flex-start"
          }}
          justifyContent="space-between"
          gap="5">

          <Box
            maxW="100%"
            w="480px">

            <Heading2
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}>
              My origins on YouTube<br />
              in 2008
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies amet odio fringilla. Ut
              nibh morbi augue porta aliquet commodo. Fermentum auctor
              lacus eget in ut integer viverra sed. Penatibus tortor
              consequat, habitasse non nisl
            </Body>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              cras lacus tellus morbi viverra suspendisse ornare. Sit
              volutpat, volutpat ut netus malesuada enim penatibus non
              aliquet.
            </Body>
          </Box>

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

            <Heading2
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}>
              From tech journalist,<br />
              to Vlogger and YouTuber
            </Heading2>

            <Body
              mt="32px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              cras lacus tellus morbi viverra suspendisse ornare. Sit
              volutpat, volutpat ut netus malesuada enim penatibus non
              aliquet.
            </Body>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies amet odio fringilla. Ut
              nibh morbi augue porta aliquet commodo. Fermentum auctor
              lacus eget in ut integer viverra sed. Penatibus tortor
              consequat, habitasse non nisl
            </Body>

            <Body
              textAlign={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left"
              }}
              mt="32px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              eget condimentum enim libero ultricies ame\
            </Body>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
