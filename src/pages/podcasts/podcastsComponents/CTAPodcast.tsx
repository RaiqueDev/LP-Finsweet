import {
  Box,
  Flex
} from "@chakra-ui/react";

import {
  Body,
  Heading1,
  SecondaryButton
} from "../../../styles/theme/styles";

import CTABPodcast from '../../../styles/images/CTABackgroundPodcast.jpg';

export default function CTAPodcast() {
  return (
    <>
      <Flex
        mt="128px"
        bg="#14142B"
        justifyContent="center"
        alignItems="center"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        bgImg={CTABPodcast}
        py="128px">

        <Flex
          w="100%"
          alignItems="flex-end"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-end",
            xl: "flex-end"
          }}>

          <Flex
            maxW="100%"
            w="1600px"
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
              lg: "flex-end",
              xl: "flex-end"
            }}
            justifyContent="space-between"
            gap="5">

            <Flex
              w="90%"
              alignItems="center"
              justifyContent="center">

              <Box
                maxW="90%"
                w="440px"
                h="100%"
                color="offWhite">

                <Heading1
                  textAlign={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "left",
                    xl: "left"
                  }}
                  color="offWhite">
                  Become The Hero Of Your Own Story
                </Heading1>

                <Body
                  textAlign={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "left",
                    xl: "left"
                  }}
                  mt="32px"
                  color="offWhite">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                </Body>

                <SecondaryButton
                  mt="32px"
                  w="148px"
                  border="2px solid #F4F2FF">
                  Contact us
                </SecondaryButton>
              </Box>
            </Flex>

            <Flex
              mt="128px"
              w="100%"
              h="146px"
              alignItems="center"
              justifyContent="flex-end">

              <Flex
                maxW="100%"
                w="571px"
                h="100%"
                bg="#503AE7"
                alignItems="center"
                justifyContent="center">

                <svg xmlns="http://www.w3.org/2000/svg" width="507" height="115" fill="none" viewBox="0 0 507 115">
                  <path fill="#1AD993" d="M315.586 115h-.053c-1.028-.013-1.872-.404-2.004-.916L285.815 13.329l-10.626 52.466c-.106.458-.765.835-1.635.93-.897.094-1.793-.122-2.242-.513l-17.746-16.06-11.128 13.015c-.343.418-1.16.66-2.057.633-.87-.026-1.608-.35-1.846-.781l-3.849-7.195-21.439 36.5c-.29.485-1.186.795-2.162.755-.975-.04-1.767-.432-1.872-.93l-7.7-32.58L189.7 74.513c-.343.445-1.24.714-2.162.66-.923-.054-1.662-.418-1.82-.89L173.72 34.01l-29.718 65.212c-.237.5-1.134.849-2.162.822-1.002-.027-1.82-.43-1.925-.956L122.063 9.879l-16.824 49.906c-.158.445-.843.795-1.714.863-.87.067-1.74-.149-2.162-.54l-9.81-9.27-20.409 17.624c-.448.378-1.292.58-2.136.512-.844-.067-1.53-.404-1.688-.835L57.274 42.418 44.51 61.483c-.29.431-1.081.7-1.951.7-.87 0-1.661-.215-1.952-.633l-6.592-9.471H2.083C.95 52.078 0 51.58 0 51s.923-1.078 2.083-1.078H35.52c.87 0 1.662.256 1.952.673l5.089 7.344 13.316-19.928c.317-.458 1.16-.755 2.11-.714.95.027 1.714.377 1.898.849L70.38 65l19.513-16.856c.37-.323 1.082-.525 1.82-.525.738.013 1.424.215 1.793.552l8.702 8.219 18.326-54.514c.185-.526 1.082-.903 2.11-.876 1.028.014 1.899.431 2.004.957l18.116 90.596 29.349-64.404c.237-.498 1.107-.835 2.109-.822 1.002.014 1.82.405 1.978.903l12.472 41.903 11.998-15.171c.343-.445 1.266-.714 2.189-.66.949.067 1.688.444 1.793.93l7.463 31.622 20.647-35.14c.263-.444 1.081-.727 1.977-.727h.027c.923 0 1.74.296 1.977.741l4.219 7.842 10.443-12.22c.316-.364 1.002-.62 1.793-.634.791-.027 1.529.189 1.925.539l16.586 15.01 11.708-57.802c.105-.54.975-.943 2.03-.957 1.055-.013 1.952.377 2.083.916l28.374 102.966 28.188-76.679c.185-.512 1.081-.875 2.083-.862 1.029.013 1.873.39 2.005.916l14.107 50.5 27.239-36.81c.29-.391 1.002-.66 1.82-.688.817-.027 1.582.189 1.978.553l11.154 10.67 12.103-9.08c.422-.324 1.16-.499 1.925-.459.765.04 1.424.283 1.714.634l19.302 23.147 13.923-21.005c.29-.431 1.081-.755 1.952-.755.896 0 1.687.324 1.951.742l8.728 12.934 16.613-9.836c.395-.229.975-.35 1.582-.35h20.647c1.134 0 2.083.499 2.083 1.078 0 .58-.923 1.078-2.083 1.078H485.22l-18.353 10.86c-.474.283-1.239.404-1.951.337-.739-.068-1.319-.35-1.582-.701l-7.911-11.736-13.712 20.669c-.264.418-1.028.7-1.899.714-.87.013-1.661-.243-1.977-.647l-19.962-23.915-11.892 8.933c-.422.31-1.108.485-1.82.458-.738-.014-1.371-.23-1.714-.566l-10.627-10.16-28.478 38.481c-.343.458-1.24.728-2.163.674-.949-.054-1.687-.431-1.819-.903l-13.475-48.222-28.188 76.719c-.238.525-1.108.889-2.11.889Z" />
                </svg>

              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
