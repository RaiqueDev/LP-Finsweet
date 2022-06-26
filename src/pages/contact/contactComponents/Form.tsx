import {
  Button,
  Flex,
  Input,
  Stack
} from "@chakra-ui/react";

export default function Form() {
  return (
    <>
      <Flex
        mt="48px"
        maxW="100%"
        w="624px"
        h="400px">

        <Stack
          maxW="100%"
          w="624px"
          spacing="16px">

          <Input
            placeholder='Your full Name'
            h="48px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="#F4F2FF" />

          <Input
            placeholder='Your Email Id'
            h="48px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="#F4F2FF" />

          <Input
            placeholder='Query Related'
            h="48px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="#F4F2FF" />

          <Input
            placeholder='Message'
            h="128px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="#F4F2FF" />

          <Button
            w="162px"
            h="48px"
            bg="#503AE7"
            borderRadius="none"
            color="#FFFFFF">
            Contact now
          </Button>
        </Stack>
      </Flex>
    </>
  )
}
