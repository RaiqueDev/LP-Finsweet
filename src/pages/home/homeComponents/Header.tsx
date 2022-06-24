import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import {
  BodyText,
  Heading1
} from "../../../styles/theme/styles";

export default function Header() {

  return (
    <>
      <Flex
        mt="192px"
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
            maxW="90%"
            w="486px"
            h="302px"
            flexDir="column"
            justifyContent="space-between">

            <Heading1>
              Become The Hero<br />
              Of Your Own Story
            </Heading1>

            <BodyText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat.
            </BodyText>

            <InputGroup
              size='md'>

              <Input
                bg="#F4F2FF"
                pr='4.5rem'
                placeholder='Enter Your Email Id'
                border="none"
                borderRadius="none"
              />

              <InputRightElement
                maxW="90%"
                w='154px'>

                <Button
                  bg="#503AE7"
                  borderRadius="none"
                  w="100%"
                  h='100%'
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="24px"
                  letterSpacing="0px"
                  textAlign="left"
                  color="#F4F2FF"
                >
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Flex
            maxW="90%"
            w="432px"
            h="256px"
            mt={{
              base: "108px",
              sm: "108px",
              md: "108px",
              lg: "0px",
              xl: "0px"
            }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="432" height="256" fill="none" viewBox="0 0 432 256">
              <path fill="#1AD993" d="M400 40h32v178h-32z" />
              <path fill="#503AE7" d="M320 0h32v256h-32z" />
              <path fill="#1AD993" d="M240 79h32v99h-32z" />
              <path fill="#503AE7" d="M160 40h32v178h-32z" />
              <path fill="#1AD993" d="M80 0h32v256H80z" />
              <path fill="#503AE7" d="M0 79h32v99H0z" />
            </svg>

          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
