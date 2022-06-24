import ContentRight from "./ContentRight";
import Form from "./Form";
import Header from "./Header";
import Lines from "./Lines";

import {
  Flex
} from "@chakra-ui/react";

export default function ContactComponents() {
  return (
    <>
      <Flex
        mt="64px"
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
            lg: "column",
            xl: "row"
          }}
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "flex-start"
          }}
          justifyContent="space-between"
          gap="5">

          <Flex
            maxW="100%"
            w="624px"
            flexDir="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "flex-start"
            }}
            justifyContent="space-between">

            <Header />
            <Form />
          </Flex>

          <Flex
            mt={{
              base: "64px",
              sm: "64px",
              md: "64px",
              lg: "64px",
              xl: "0px"
            }}
            maxW="100%"
            w="468px"
            flexDir="column"
            alignItems="flex-end"
            justifyContent="space-between">

            <ContentRight />
            <Lines />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
