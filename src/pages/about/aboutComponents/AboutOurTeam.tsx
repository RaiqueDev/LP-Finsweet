import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  BodyText,
  Heading2
} from "../../../styles/theme/styles";

import ImageAboutOurTeam from '../../../styles/images/ImageAboutOurTeam.svg';

export default function AboutOurTeam() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="100%"
          w="1206px"
          alignItems="center"
          justifyContent="center">

          <Flex
            maxW="90%"
            w="1024px"
            flexDir="column">

            <Heading2
              maxW="100%"
              w="351px"
              h="76px">
              A few words about our team
            </Heading2>

            <Box
              mt="48px"
              maxW="100%"
              w="1024px"
              h="320px"
              bgSize="cover"
              bgPos="center"
              bgImage={ImageAboutOurTeam} />

            <Flex
              mt="48px"
              maxW="100%"
              w="1024px"
              gap="8"
              flexDir={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row"
              }}
              alignItems={{
                base: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start"
              }}
              justifyContent="space-between">

              <Box
                maxW="100%"
                w="496px"
                h="120px">

                <BodyText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  eget condimentum enim libero ultricies amet odio fringilla. Ut nibh
                  morbi augue porta aliquet commodo. Fermentum auctor lacus
                  eget in ut integer viverra sed. Penatibus tortor consequat,
                  habitasse non nisl.
                </BodyText>
              </Box>

              <Box
                maxW="100%"
                w="496px"
                h="74px">

                <BodyText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                  cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
                  volutpat ut netus malesuada enim penatibus non aliquet.
                </BodyText>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
