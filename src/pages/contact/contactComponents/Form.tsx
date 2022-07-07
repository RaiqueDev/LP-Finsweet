import {
  Box,
  Input,
  Stack,
  Textarea
} from "@chakra-ui/react";

import { PrimaryButton } from "../../../styles/theme/styles";

export default function Form() {
  return (
    <>
      <Box
        mt="48px"
        maxW="100%"
        w="624px">

        <Stack
          spacing="16px">

          <Input
            placeholder='Your full Name'
            h="48px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="offWhite"
            color="gray"
            px="16px" />

          <Input
            placeholder='Your Email Id'
            h="48px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="offWhite"
            color="gray"
            px="16px" />

          <Input
            placeholder='Query Related'
            h="48px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="offWhite"
            color="gray"
            px="16px" />

          <Textarea
            placeholder='Message'
            h="128px"
            borderRadius="none"
            border="1 solid #AFB0B9"
            bg="offWhite"
            color="gray"
            py="12px"
            px="16px" />

          <PrimaryButton
            w="162px">
            Contact now
          </PrimaryButton>
        </Stack>
      </Box>
    </>
  )
}
