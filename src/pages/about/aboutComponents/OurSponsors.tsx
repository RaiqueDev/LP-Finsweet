import {
  Box,
  Flex,
  SimpleGrid
} from "@chakra-ui/react";

import {
  Body,
  Heading1,
  Heading3
} from "../../../styles/theme/styles";

import LogoIpsumOne from '../../../styles/images/LogoIpsumOne.svg';
import LogoIpsumTwo from '../../../styles/images/LogoIpsumTwo.svg';
import LogoIpsumThree from '../../../styles/images/LogoIpsumThree.svg';
import LogoIpsumFour from '../../../styles/images/LogoIpsumFour.svg';
import LogoIpsumFive from '../../../styles/images/LogoIpsumFive.svg';


export default function OurSponsors() {
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
          flexDir="column">

          <Heading1
            maxW="100%"
            w="324px"
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "left",
              xl: "left"
            }}>
            Our Sponsors
          </Heading1>

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
            mt="48px">

            <Flex
              bg='#F4F2FF'
              w="100%"
              h='224px'
              alignItems="center"
              justifyContent="center">

              <img src={LogoIpsumOne} alt="Logo Ipsum One" />
            </Flex>

            <Flex
              bg='#F4F2FF'
              w="100%"
              h='224px'
              alignItems="center"
              justifyContent="center">

              <img src={LogoIpsumTwo} alt="Logo Ipsum Two" />
            </Flex>

            <Flex
              bg='#F4F2FF'
              w="100%"
              h='224px'
              alignItems="center"
              justifyContent="center">

              <img src={LogoIpsumThree} alt="Logo Ipsum Three" />
            </Flex>

            <Flex
              bg='#F4F2FF'
              w="100%"
              h='224px'
              alignItems="center"
              justifyContent="center">

              <img src={LogoIpsumFour} alt="Logo Ipsum Four" />
            </Flex>

            <Flex
              bg='#F4F2FF'
              w="100%"
              h='224px'
              alignItems="center"
              justifyContent="center">

              <img src={LogoIpsumFive} alt="Logo Ipsum Five" />
            </Flex>

            <Box
              bg='#503AE7'
              w="100%"
              h='224px'>

              <Box
                m="32px">

                <Heading3
                  color="offWhite">
                  Become a Sponsor
                </Heading3>

                <Body
                  color="offWhite"
                  mt="64px">
                  Contact Now
                </Body>

                <Box
                  mt="8px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="4" fill="none" viewBox="0 0 39 4">
                    <path fill="#1AD993" d="M0 0h39v4H0z" />
                  </svg>
                </Box>

              </Box>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}
