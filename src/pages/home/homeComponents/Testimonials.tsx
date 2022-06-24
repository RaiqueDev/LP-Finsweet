import {
  Box,
  Flex,
  SimpleGrid
} from "@chakra-ui/react";

import {
  BodyText,
  Heading2
} from "../../../styles/theme/styles";

export default function Testimonials() {
  return (
    <>
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="center"
        mt="128px">

        <Flex
          maxW="90%"
          w="1280px"
          h="100%"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center">

          <Flex
            w="100%"
            flexDir={{
              base: "column",
              sm: "column",
              lg: "row",
              xl: "row"
            }}
            alignItems={{
              base: "center",
              sm: "center",
              lg: "flex-end",
              xl: "flex-end"
            }}
            justifyContent="space-between">

            <Flex
              maxW="100%"
              w="372px"
              flexDir="column">

              <Heading2>
                What our listeners say
              </Heading2>

              <BodyText
                mt="16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
              </BodyText>
            </Flex>

            <Flex
              mt="40px"
              maxW="90%"
              w="195px"
              h="48px"
              justifyContent="space-between"
              alignItems="center">

              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#503AE7" />
                <path fill="#1AD993" fill-rule="evenodd" d="m18.561 29.761-5.316-5.185a.8.8 0 0 1 0-1.152l5.316-5.185a.85.85 0 0 1 1.182 0 .8.8 0 0 1 0 1.152l-3.89 3.794H35v1.63H15.852l3.89 3.794a.8.8 0 0 1 0 1.152.85.85 0 0 1-1.18 0Z" clip-rule="evenodd" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="24" fill="#503AE7" />
                <path fill="#1AD993" fill-rule="evenodd" d="m29.439 18.239 5.316 5.185a.8.8 0 0 1 0 1.152l-5.316 5.185a.85.85 0 0 1-1.182 0 .8.8 0 0 1 0-1.152l3.89-3.794H13v-1.63h19.148l-3.89-3.794a.8.8 0 0 1 0-1.152.85.85 0 0 1 1.18 0Z" clip-rule="evenodd" />
              </svg>

            </Flex>
          </Flex>

          <SimpleGrid
            columns={{
              sm: 1,
              md: 2,
              lg: 3,
              xl: 3
            }}
            spacing='16px'
            placeItems={"center"}
            w="100%"
            mt="64px">

            <Box
              w="100%"
              h='295px'
              borderBottom="12px solid #503AE7">

              <Flex
                maxW="100%"
                w="212px"
                h="80px"
                alignItems="center"
                justifyContent="space-between"
              >

                <Box
                  w="80px"
                  h="80px"
                  borderRadius="999px"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="left"
                  bgImg="https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?cs=srgb&dl=pexels-ike-louie-natividad-3310695.jpg&fm=jpg" />

                <Box
                  w="116px">

                  <BodyText
                    pb="8px">
                    Eve Madien
                  </BodyText>

                  <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" fill="none" viewBox="0 0 116 20">
                    <path fill="#FF7602" d="m10 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.49 6.91h7.266L10 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L34 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L34 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L58 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L58 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L82 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L82 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L106 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L106 0Z" />
                  </svg>

                </Box>
              </Flex>

              <BodyText
                mt="16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.
              </BodyText>
            </Box>

            <Box
              w="100%"
              h='295px'
              borderBottom="12px solid #503AE7">

              <Flex
                maxW="100%"
                w="212px"
                h="80px"
                alignItems="center"
                justifyContent="space-between"
              >

                <Box
                  w="80px"
                  h="80px"
                  borderRadius="999px"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="left"
                  bgImg="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?cs=srgb&dl=pexels-yogendra-singh-3748221.jpg&fm=jpg" />

                <Box
                  w="116px">

                  <BodyText
                    pb="8px">
                    Ash Benfred
                  </BodyText>

                  <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" fill="none" viewBox="0 0 116 20">
                    <path fill="#FF7602" d="m10 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.49 6.91h7.266L10 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L34 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L34 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L58 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L58 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L82 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L82 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L106 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L106 0Z" />
                  </svg>

                </Box>
              </Flex>

              <BodyText
                mt="16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.
              </BodyText>
            </Box>

            <Box
              w="100%"
              h='295px'
              borderBottom="12px solid #503AE7">

              <Flex
                maxW="100%"
                w="212px"
                h="80px"
                alignItems="center"
                justifyContent="space-between"
              >

                <Box
                  w="80px"
                  h="80px"
                  borderRadius="999px"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPosition="left"
                  bgImg="https://images.pexels.com/photos/5273717/pexels-photo-5273717.jpeg?cs=srgb&dl=pexels-monstera-5273717.jpg&fm=jpg" />

                <Box
                  w="116px">

                  <BodyText
                    pb="8px">
                    Ryan Smith
                  </BodyText>

                  <svg xmlns="http://www.w3.org/2000/svg" width="116" height="20" fill="none" viewBox="0 0 116 20">
                    <path fill="#FF7602" d="m10 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.49 6.91h7.266L10 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L34 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L34 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L58 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L58 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L82 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L82 0Zm24 0 2.245 6.91h7.266l-5.878 4.27 2.245 6.91L106 13.82l-5.878 4.27 2.245-6.91-5.878-4.27h7.266L106 0Z" />
                  </svg>

                </Box>
              </Flex>

              <BodyText
                mt="16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.
              </BodyText>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}
