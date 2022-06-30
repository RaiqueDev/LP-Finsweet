import {
  Box
} from "@chakra-ui/react";

import {
  Heading2,
  Heading4
} from "../../../styles/theme/styles";

export default function Header() {
  return (
    <>
      <Box
        w="100%">

        <Heading2
          textAlign="left">
          Contact Us
        </Heading2>

        <Heading4
          textAlign="left"
          mt="16px"
          color="#503AE7">
          Interested in collaborating? Please fill the form below.
        </Heading4>
      </Box>
    </>
  )
}
