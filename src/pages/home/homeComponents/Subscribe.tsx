import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import {
  Heading2
} from "../../../styles/theme/styles";

export default function Subscribe() {
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
          h="310px"
          bg="#503AE7"
          flexDir="column"
          alignItems="center"
          justifyContent="center">

          <Heading2
            color="#FFFFFF">
            Receive new episodes in your inbox.
          </Heading2>

          <InputGroup
            mt="32px"
            maxW="90%"
            w="511px">

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
                bg="#1AD993"
                borderRadius="none"
                w="100%"
                h='100%'
                fontFamily="Inter"
                fontSize="18px"
                fontWeight="700"
                lineHeight="24px"
                letterSpacing="0px"
                textAlign="left"
                color="#14142B"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </>
  )
}
