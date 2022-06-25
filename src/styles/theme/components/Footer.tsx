import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { BodyText, Heading2, Heading3 } from "../styles";

export default function Footer() {
  return (
    <>
      <Flex
        mt={{
          base: "500px",
          sm: "400px",
          md: "370px",
          lg: "350px",
          xl: "317px"
        }}
        w="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        bg="#14142B">

        <Flex
          maxW="90%"
          w="1280px"
          marginTop="192px"
          marginBottom="96px">

          <SimpleGrid
            w="100%"
            columns={{
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4
            }}
            spacing='16px'>

            <Box
              w="100%"
              h='48px'>

              <svg xmlns="http://www.w3.org/2000/svg" width="197" height="48" fill="none" viewBox="0 0 197 48">
                <path fill="#fff" d="M190.417 6.03v11.2h3.886v5.416h-3.886v10.092c0 .985.242 1.724.728 2.216.486.492 1.215.738 2.186.738h2.793v6.4h-4.858c-1.943 0-4.371-.369-6.072-1.969-1.7-1.6-2.428-3.692-2.428-6.646V22.523h-3.522v-5.415h3.522V6.03h7.651Zm-22.709 36.555c-3.522 0-6.559-1.231-8.623-3.447-2.186-2.215-3.157-5.169-3.157-8.615v-.861c0-3.816.971-6.893 2.914-9.354 1.943-2.339 4.737-3.57 8.379-3.57 3.28 0 5.951.985 7.773 2.954 1.943 2.093 2.793 4.8 2.793 8.247v4.06h-13.965v.124c.121 1.354.728 2.216 1.578 3.077.85.862 2.065 1.23 3.4 1.23 1.458 0 2.55-.122 3.401-.368.849-.247 2.064-.616 3.279-1.231l1.821 4.8c-1.093.861-2.429 1.477-4.129 2.092-1.7.616-3.643.862-5.464.862Zm-.608-19.939c-1.092 0-1.943.37-2.429 1.23-.485.862-.849 1.97-.971 3.2l.122.124h6.557v-.615c0-1.354-.243-2.216-.728-2.831-.729-.862-1.458-1.108-2.551-1.108Zm-25.016 19.939c-3.522 0-6.558-1.231-8.622-3.447-2.065-2.215-3.158-5.169-3.158-8.615v-.861c0-3.816.972-6.893 2.915-9.354 1.942-2.339 4.736-3.57 8.379-3.57 3.279 0 5.951.985 7.772 2.954 1.821 1.97 2.793 4.8 2.793 8.247v4.06h-13.965v.124c.121 1.354.728 2.216 1.579 3.077.849.862 2.064 1.23 3.399 1.23 1.458 0 2.551-.122 3.401-.368.85-.247 2.064-.616 3.279-1.231l1.822 4.8c-1.094.861-2.43 1.477-4.129 2.092-1.579.616-3.522.862-5.465.862Zm-.486-19.939c-1.093 0-1.943.37-2.429 1.23-.486.862-.85 1.97-.971 3.2l.121.124h6.558v-.615c0-1.354-.243-2.216-.729-2.831-.728-.862-1.457-1.108-2.55-1.108Zm-22.709 8.862 2.672-14.523h6.921l-5.586 24.984h-6.436l-4.007-13.292h-.122l-4.007 13.292h-6.436L96.18 17.108h7.043l2.672 14.646h.121l3.887-14.646h4.857l4.129 14.4Zm-32.182 3.446c0-.616-.364-1.23-1.092-1.723-.729-.493-1.943-.985-3.765-1.354-2.793-.615-4.98-1.477-6.436-2.585-1.457-1.23-2.186-2.83-2.186-4.923 0-2.215.971-4.061 2.671-5.661 1.822-1.6 4.251-2.216 7.287-2.216 3.157 0 5.828.739 7.65 2.216 1.943 1.477 2.794 3.323 2.672 5.784v.123h-7.286c0-.984-.243-1.723-.73-2.215-.485-.492-1.335-.738-2.306-.738-.85 0-1.457.246-2.065.738-.607.492-.85.985-.85 1.723 0 .738.364 1.23.972 1.723.607.492 1.943.862 3.764 1.23 2.915.616 5.222 1.478 6.558 2.586 1.457 1.23 2.186 2.83 2.186 5.046 0 2.215-.972 4.061-2.915 5.538-1.943 1.477-4.493 2.215-7.65 2.215-3.28 0-5.95-.861-7.894-2.584-1.943-1.723-2.793-3.57-2.671-5.785v-.123h6.922c0 1.231.364 2.093 1.092 2.462.73.369 1.701.861 2.794.861 1.092 0 1.822-.246 2.307-.615.728-.37.971-.985.971-1.723Zm-33.03-17.97.242 3.447c.85-1.231 1.822-2.216 2.915-2.831 1.214-.738 2.428-1.108 3.886-1.108 2.307 0 4.25.862 5.586 2.339 1.336 1.477 2.064 4.061 2.064 7.507V41.97h-7.408V26.461c0-1.476-.242-2.338-.85-2.953-.607-.616-1.457-.862-2.55-.862-.728 0-1.336.123-1.943.37a3.32 3.32 0 0 0-1.457 1.107v17.97h-7.53V17.107h7.044v-.123Zm-11.659-4.676h-7.65V6.03h7.65v6.277Zm0 29.784h-7.65V17.108h7.65v24.984Zm-24.41 0V22.4h-3.521v-5.415h3.522V14.4c0-2.83.85-5.046 2.428-6.646 1.7-1.6 4.25-1.97 6.072-1.97h4.858v6.278h-2.793c-.972 0-1.7.246-2.186.738s-.729 1.23-.729 2.215v1.847h4.736v5.415H25.26v19.57h-7.65v.245ZM3.037 8.123C3.036.615 6.922 0 13.48 0v5.908c-3.036 0-4.25.492-4.25 2.338v9.723c0 2.216.12 4.554-1.7 6.031 1.82 1.477 1.7 3.692 1.7 6.03v9.724c0 1.97 1.214 2.338 4.25 2.338V48c-6.558 0-10.444-.615-10.444-8.123V30.03c0-1.6 0-3.323-3.036-3.323v-5.17c3.036 0 3.036-1.846 3.036-3.323V8.123Z" />
              </svg>

            </Box>

            <Box
              w="100%"
              h='204px'
              display="flex"
              flexDir="column"
              justifyContent="space-between">

              <Box
                w="100%"
                h="30px">

                <Heading2
                  fontSize="20px"
                  textAlign="left"
                  color="#FFFFFF">

                  Pages
                </Heading2>

              </Box>

              <Box
                w="100%"
                h="142px"
                display="flex"
                flexDir="column"
                justifyContent="space-between">

                <BodyText
                  color="#fff"
                  textAlign="left">
                  Home
                </BodyText>

                <BodyText
                  color="#fff"
                  textAlign="left">
                  Podcast
                </BodyText>

                <BodyText
                  color="#fff"
                  textAlign="left">
                  Host
                </BodyText>

                <BodyText
                  color="#fff"
                  textAlign="left">
                  Blog
                </BodyText>
              </Box>
            </Box>

            <Box
              w="100%"
              h='126px'
              display="flex"
              flexDir="column"
              justifyContent="space-between">

              <Box
                w="100%"
                h="30px">

                <Heading2
                  fontSize="20px"
                  textAlign="left"
                  color="#FFFFFF">

                  Reach Us
                </Heading2>
              </Box>

              <Box
                w="100%"
                h="64px"
                display="flex"
                flexDir="column"
                justifyContent="space-between">

                <BodyText
                  color="#fff"
                  textAlign="left">
                  Contact
                </BodyText>

                <BodyText
                  color="#fff"
                  textAlign="left">
                  About
                </BodyText>
              </Box>

            </Box>

            <Box
              w="100%"
              h='286px'
              display="flex"
              flexDir="column"
              justifyContent="space-between">

              <Box
                w="100%"
                h="30px">

                <Heading2
                  fontSize="20px"
                  textAlign="left"
                  color="#FFFFFF">

                  Subscribe
                </Heading2>
              </Box>

              <Box
                w="100%"
                h="224px"
                display="flex"
                flexDir="column"
                justifyContent="space-between">

                <svg xmlns="http://www.w3.org/2000/svg" width="183" height="32" fill="none" viewBox="0 0 183 32">
                  <g clip-path="url(#a)">
                    <path fill="#fff" d="M51.844 17.873h-5.549l-1.39 3.88H42.6l5.295-14.385h2.453l5.265 14.385H53.22l-1.377-3.88Zm-4.98-1.726h4.412l-2.169-6.315-2.243 6.315Zm20.088.37c0 3.26-1.764 5.355-4.487 5.355a3.645 3.645 0 0 1-1.945-.445 3.58 3.58 0 0 1-1.405-1.399v5.209h-2.17V11.263h2.11v1.741a3.775 3.775 0 0 1 1.441-1.381 3.842 3.842 0 0 1 1.954-.463c2.722 0 4.502 2.036 4.502 5.356Zm-2.243 0c0-2.125-1.107-3.526-2.812-3.526-1.705 0-2.782 1.475-2.782 3.526 0 2.05 1.121 3.526 2.782 3.526 1.66 0 2.812-1.387 2.812-3.526Zm13.955 0c0 3.26-1.765 5.356-4.487 5.356a3.645 3.645 0 0 1-1.936-.45 3.58 3.58 0 0 1-1.4-1.394v5.208h-2.198V11.265h2.124v1.74a3.76 3.76 0 0 1 1.44-1.383 3.826 3.826 0 0 1 1.955-.46c2.722 0 4.502 2.035 4.502 5.355Zm-2.243 0c0-2.124-1.107-3.526-2.813-3.526-1.705 0-2.782 1.475-2.782 3.526 0 2.05 1.122 3.526 2.783 3.526 1.66 0 2.812-1.387 2.812-3.526Zm4.008-9.149h2.183v14.385H80.43V7.368ZM93.98 18.67a4.203 4.203 0 0 1-1.675 2.457 4.308 4.308 0 0 1-2.902.76c-3.096 0-5.01-2.052-5.01-5.327s1.93-5.43 4.92-5.43c2.992 0 4.802 2.066 4.802 5.179v.738h-7.479v.133a2.696 2.696 0 0 0 .762 2.113c.271.28.6.498.964.643.364.144.754.21 1.146.194a2.42 2.42 0 0 0 1.476-.334 2.37 2.37 0 0 0 .977-1.141l2.02.015Zm-7.374-3.128h5.31a2.478 2.478 0 0 0-.71-1.892 2.573 2.573 0 0 0-1.893-.764 2.71 2.71 0 0 0-1.917.768 2.637 2.637 0 0 0-.79 1.888Zm19.131-8.173a4.636 4.636 0 0 1 1.871.295 4.58 4.58 0 0 1 1.589 1.017c.452.444.805.977 1.037 1.565.231.587.334 1.215.304 1.844a4.505 4.505 0 0 1-.315 1.865 4.548 4.548 0 0 1-1.055 1.578 4.633 4.633 0 0 1-1.612 1.02 4.684 4.684 0 0 1-1.894.288h-3.126v4.913h-2.288V7.37h5.489Zm-3.201 7.598h2.587c.404.054.813.018 1.2-.104a2.73 2.73 0 0 0 1.713-1.584c.15-.373.212-.774.184-1.174a2.65 2.65 0 0 0-.182-1.168 2.716 2.716 0 0 0-1.706-1.576 2.758 2.758 0 0 0-1.194-.104h-2.602v5.71Zm8.795 1.549c0-3.305 1.974-5.386 5.055-5.386 3.082 0 5.042 2.08 5.042 5.386 0 3.305-1.945 5.37-5.042 5.37-3.096 0-5.055-2.066-5.055-5.37Zm7.868 0c0-2.272-1.047-3.6-2.813-3.6-1.764 0-2.826 1.342-2.826 3.6 0 2.257 1.047 3.6 2.826 3.6 1.78 0 2.813-1.328 2.813-3.6Zm3.769 0c0-3.246 1.811-5.356 4.488-5.356a3.63 3.63 0 0 1 1.937.447 3.57 3.57 0 0 1 1.398 1.397V7.368h2.184v14.385h-2.124v-1.785a3.624 3.624 0 0 1-1.418 1.437 3.69 3.69 0 0 1-1.977.466c-2.677 0-4.488-2.124-4.488-5.355Zm2.229 0c0 2.154 1.107 3.526 2.812 3.526 1.706 0 2.797-1.402 2.797-3.526 0-2.125-1.121-3.527-2.797-3.527-1.675 0-2.812 1.387-2.812 3.527Zm17.082-1.636a2.312 2.312 0 0 0-.874-1.452 2.37 2.37 0 0 0-1.639-.481c-1.675 0-2.797 1.387-2.797 3.57 0 2.184 1.122 3.57 2.811 3.57a2.328 2.328 0 0 0 1.623-.452c.464-.347.776-.855.876-1.42h2.093a4.175 4.175 0 0 1-1.547 2.759 4.286 4.286 0 0 1-3.059.914c-2.992 0-5.011-2.05-5.011-5.37 0-3.32 1.974-5.386 4.996-5.386a4.32 4.32 0 0 1 3.076.95 4.2 4.2 0 0 1 1.53 2.798h-2.078Zm3.44 3.894c0-1.83 1.421-2.95 3.948-3.083l2.917-.163v-.855c0-1.166-.778-1.83-2.109-1.83a2.055 2.055 0 0 0-1.396.324 2.01 2.01 0 0 0-.833 1.152h-2.049c0-1.889 1.855-3.246 4.337-3.246 2.484 0 4.219 1.372 4.219 3.438v7.244h-2.154v-1.726a3.787 3.787 0 0 1-1.419 1.405 3.856 3.856 0 0 1-1.947.498 3.251 3.251 0 0 1-2.463-.813 3.146 3.146 0 0 1-1.051-2.344Zm6.865-.944v-.811l-2.618.162c-1.315.074-2.048.634-2.048 1.475 0 .841.762 1.476 1.944 1.476a2.575 2.575 0 0 0 1.852-.592 2.502 2.502 0 0 0 .885-1.71h-.015Zm8.257-6.685c2.363 0 4.053 1.283 4.097 3.142h-2.048c-.09-.93-.882-1.475-2.11-1.475-1.226 0-1.959.53-1.959 1.342s.524 1.048 1.616 1.328l1.794.399c2.14.516 2.992 1.298 2.992 2.832 0 1.889-1.81 3.187-4.488 3.187-2.677 0-4.188-1.269-4.352-3.187h2.199c.164 1.018.972 1.55 2.304 1.55 1.33 0 2.123-.532 2.123-1.358 0-.826-.404-1.003-1.496-1.283l-1.899-.458c-1.915-.457-2.887-1.475-2.887-2.877-.044-1.874 1.645-3.143 4.114-3.143Zm9.094-2.375v2.479h2.02v1.711h-2.02v5.784c0 .9.404 1.313 1.287 1.313h.718v1.697c-.4.069-.806.098-1.212.088-2.154 0-2.991-.796-2.991-2.833v-6.034h-1.496v-1.711h1.496V8.77h2.198Zm7.882 2.375c2.365 0 4.054 1.283 4.099 3.142h-2.049c-.09-.93-.883-1.475-2.109-1.475-1.227 0-1.96.53-1.96 1.342s.524 1.048 1.616 1.328l1.795.399c2.139.516 2.991 1.298 2.991 2.832 0 1.889-1.81 3.187-4.412 3.187-2.603 0-4.248-1.328-4.397-3.201h2.153c.165 1.018.973 1.549 2.303 1.549 1.332 0 2.125-.531 2.125-1.358 0-.826-.404-1.003-1.496-1.283l-1.945-.457c-1.914-.458-2.887-1.476-2.887-2.878.015-1.859 1.706-3.127 4.173-3.127Z" />
                    <path fill="url(#b)" d="M31.746 27.677a6.955 6.955 0 0 1-2.113 2.749 6.966 6.966 0 0 1-2.275 1.168c-1.282.305-2.6.44-3.917.398H8.917a14.729 14.729 0 0 1-3.904-.398 6.913 6.913 0 0 1-2.302-1.168A6.956 6.956 0 0 1 .64 27.77a12.401 12.401 0 0 1-.62-4.62V8.784c-.071-1.535.143-3.07.633-4.528a6.955 6.955 0 0 1 2.06-2.682A6.913 6.913 0 0 1 5 .406 14.73 14.73 0 0 1 8.903.007h14.578a14.908 14.908 0 0 1 3.917.399 6.964 6.964 0 0 1 4.307 3.824c.489 1.467.699 3.011.62 4.554V23.15a12.402 12.402 0 0 1-.58 4.527Z" />
                    <path fill="#fff" d="M18.636 18.664a3.636 3.636 0 0 0-2.633-.93 3.634 3.634 0 0 0-2.602.93 1.599 1.599 0 0 0-.479 1.018 12.753 12.753 0 0 0 0 2.686c.09 1.091.27 2.537.508 4.013.095.682.234 1.357.42 2.02.165.403.46.741.837.965.378.224.818.32 1.257.275.44.046.883-.05 1.263-.273a2.03 2.03 0 0 0 .845-.966c.185-.664.325-1.34.42-2.021.224-1.476.403-2.951.493-4.014.094-.892.094-1.792 0-2.685a1.594 1.594 0 0 0-.33-1.018Zm-5.534-5.001c0 .583.175 1.154.504 1.639.328.485.796.864 1.342 1.087a3.029 3.029 0 0 0 3.26-.64c.419-.413.704-.938.819-1.51a2.912 2.912 0 0 0-.17-1.706c-.227-.539-.61-1-1.102-1.324a3.021 3.021 0 0 0-3.777.367 2.93 2.93 0 0 0-.877 2.087Zm2.901-11.464a12.758 12.758 0 0 0-8.135 2.969 12.443 12.443 0 0 0-4.285 7.439c-.495 2.9.063 5.88 1.578 8.413a12.617 12.617 0 0 0 6.699 5.434.182.182 0 0 0 .164-.037.178.178 0 0 0 .06-.154c-.074-.428-.134-.856-.194-1.27a.395.395 0 0 0-.254-.339 10.977 10.977 0 0 1-5.36-5.013 10.756 10.756 0 0 1-.955-7.224 10.867 10.867 0 0 1 3.877-6.2 11.135 11.135 0 0 1 6.972-2.403c2.535.013 4.988.886 6.948 2.472a10.864 10.864 0 0 1 3.812 6.24c.507 2.45.144 4.997-1.03 7.213a10.981 10.981 0 0 1-5.41 4.96.403.403 0 0 0-.254.339c0 .413-.12.841-.194 1.269a.175.175 0 0 0 .06.154.18.18 0 0 0 .164.038 12.622 12.622 0 0 0 6.812-5.444 12.34 12.34 0 0 0 1.59-8.504 12.447 12.447 0 0 0-4.395-7.482 12.763 12.763 0 0 0-8.27-2.87Zm-.224 5.724a6.923 6.923 0 0 1 3.953 1.055 6.782 6.782 0 0 1 2.637 3.092 6.67 6.67 0 0 1 .377 4.022 6.734 6.734 0 0 1-2.016 3.517.575.575 0 0 0-.165.413 11 11 0 0 1 0 1.475.175.175 0 0 0 .092.15.181.181 0 0 0 .178-.002 8.381 8.381 0 0 0 3.231-4.148c.6-1.688.636-3.521.102-5.23a8.369 8.369 0 0 0-3.067-4.268 8.56 8.56 0 0 0-5.038-1.636A8.559 8.559 0 0 0 11.026 8a8.369 8.369 0 0 0-3.068 4.267 8.258 8.258 0 0 0 .102 5.23 8.381 8.381 0 0 0 3.232 4.149.166.166 0 0 0 .236-.06.16.16 0 0 0 .018-.088v-1.475a.48.48 0 0 0-.165-.413 6.75 6.75 0 0 1-1.97-3.405 6.685 6.685 0 0 1 .27-3.911 6.785 6.785 0 0 1 2.424-3.108 6.929 6.929 0 0 1 3.764-1.262h-.09Z" />
                  </g>
                  <defs>
                    <linearGradient id="b" x1="16.199" x2="16.199" y1=".007" y2="31.926" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F452FF" />
                      <stop offset="1" stop-color="#832BC1" />
                    </linearGradient>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h182.746v32H0z" />
                    </clipPath>
                  </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="196" height="32" fill="none" viewBox="0 0 196 32">
                  <g clip-path="url(#a)">
                    <path fill="#fff" fill-rule="evenodd" d="M118.251 22.866h-1.919V8.202h5.089c1.265 0 2.36.413 3.284 1.24.925.825 1.387 1.866 1.387 3.122 0 1.256-.462 2.297-1.387 3.123-.924.827-2.019 1.24-3.284 1.24h-3.17v5.939Zm0-7.742h3.211c.807 0 1.454-.266 1.94-.798.487-.533.73-1.12.73-1.762 0-.641-.243-1.228-.73-1.76-.486-.533-1.133-.8-1.94-.8h-3.211v5.12Zm9.433-1.085c.987-1.024 2.245-1.536 3.774-1.536 1.53 0 2.788.508 3.775 1.526.987 1.017 1.481 2.29 1.481 3.82 0 1.528-.494 2.802-1.481 3.819-.987 1.017-2.245 1.525-3.775 1.525-1.529 0-2.787-.508-3.774-1.525-.987-1.017-1.481-2.29-1.481-3.82 0-1.529.494-2.799 1.481-3.809Zm1.418 6.451c.667.655 1.453.983 2.356.983.904 0 1.686-.331 2.347-.993.66-.662.99-1.54.99-2.632s-.33-1.97-.99-2.631c-.661-.663-1.443-.994-2.347-.994-.903 0-1.686.331-2.346.993-.66.663-.99 1.54-.99 2.632 0 1.093.326 1.973.98 2.642Zm13.395 2.703c-1.321 0-2.461-.512-3.42-1.536-.959-1.024-1.44-2.293-1.44-3.809 0-1.515.481-2.785 1.44-3.809s2.099-1.536 3.42-1.536c.778 0 1.477.164 2.096.491.619.328 1.081.738 1.387 1.23h.083l-.083-1.393V8.202h1.919v14.664h-1.836v-1.393h-.083c-.306.492-.768.901-1.387 1.229-.619.328-1.318.491-2.096.491Zm.313-1.72c.903 0 1.672-.328 2.304-.983.633-.655.949-1.536.949-2.642 0-1.106-.316-1.986-.949-2.642-.632-.655-1.401-.983-2.304-.983-.89 0-1.655.331-2.294.993-.64.663-.96 1.54-.96 2.632 0 1.093.32 1.97.96 2.632.639.662 1.404.993 2.294.993Zm11.747 1.72c-1.528 0-2.787-.508-3.774-1.525-.987-1.017-1.481-2.29-1.481-3.82 0-1.529.494-2.802 1.481-3.82.987-1.017 2.246-1.525 3.774-1.525 1.141 0 2.086.273 2.837.82a4.804 4.804 0 0 1 1.647 2.068l-1.751.716c-.529-1.256-1.481-1.884-2.857-1.884-.848 0-1.596.342-2.242 1.024-.647.683-.97 1.55-.97 2.601s.323 1.919.97 2.601c.646.683 1.394 1.024 2.242 1.024 1.432 0 2.419-.628 2.961-1.884l1.71.717c-.348.819-.907 1.505-1.679 2.058-.772.553-1.727.83-2.868.83Zm9.099 0c-1.084 0-1.991-.307-2.721-.921-.73-.615-1.095-1.427-1.095-2.437 0-1.093.431-1.95 1.293-2.57.862-.622 1.926-.932 3.191-.932 1.126 0 2.05.204 2.773.614v-.287c0-.737-.256-1.327-.771-1.771-.515-.444-1.147-.666-1.897-.666-.557 0-1.061.13-1.513.39-.451.259-.761.614-.928 1.064l-1.752-.737c.236-.6.703-1.157 1.398-1.669s1.612-.768 2.752-.768c1.307 0 2.392.375 3.254 1.126.862.751 1.293 1.81 1.293 3.175v6.062h-1.836v-1.393h-.083c-.765 1.147-1.884 1.72-3.358 1.72Zm.313-1.72c.793 0 1.512-.29 2.159-.87.646-.58.969-1.267.969-2.059-.541-.436-1.355-.655-2.44-.655-.931 0-1.633.198-2.106.594-.472.396-.709.86-.709 1.393 0 .491.216.88.647 1.167.431.287.924.43 1.48.43Zm10.58 1.72c-1.14 0-2.082-.273-2.826-.819a4.857 4.857 0 0 1-1.637-2.048l1.71-.696c.543 1.256 1.467 1.884 2.774 1.884.598 0 1.088-.13 1.47-.389.383-.26.574-.6.574-1.024 0-.655-.466-1.1-1.398-1.331l-2.065-.492a4.953 4.953 0 0 1-1.856-.932c-.583-.457-.875-1.075-.875-1.853 0-.888.399-1.608 1.199-2.16.799-.554 1.748-.83 2.847-.83.903 0 1.71.201 2.419.604a3.43 3.43 0 0 1 1.523 1.73l-1.669.677c-.376-.888-1.154-1.332-2.336-1.332-.57 0-1.05.116-1.439.348-.39.232-.584.547-.584.943 0 .573.452.962 1.356 1.167l2.023.47c.959.22 1.668.595 2.127 1.127.459.533.688 1.134.688 1.803 0 .9-.375 1.652-1.126 2.252-.75.601-1.717.901-2.899.901Zm9.767-.163c-1.071 0-1.888-.28-2.451-.84-.564-.56-.845-1.352-.845-2.376v-5.263h-1.793v-1.72h1.793V9.759h1.919v3.072h2.503v1.72h-2.503v5.12c0 1.092.459 1.638 1.377 1.638.347 0 .639-.054.875-.164l.668 1.618c-.417.178-.932.267-1.543.267Zm6.72.163c-1.14 0-2.081-.273-2.825-.819a4.857 4.857 0 0 1-1.637-2.048l1.71-.696c.542 1.256 1.466 1.884 2.774 1.884.598 0 1.087-.13 1.47-.389.383-.26.573-.6.573-1.024 0-.655-.465-1.1-1.397-1.331l-2.065-.492a4.953 4.953 0 0 1-1.856-.932c-.584-.457-.876-1.075-.876-1.853 0-.888.4-1.608 1.2-2.16.799-.554 1.748-.83 2.847-.83.903 0 1.71.201 2.419.604a3.42 3.42 0 0 1 1.522 1.73l-1.668.677c-.376-.888-1.154-1.332-2.337-1.332-.57 0-1.049.116-1.438.348-.39.232-.584.547-.584.943 0 .573.451.962 1.356 1.167l2.022.47c.96.22 1.669.595 2.128 1.127.458.533.688 1.134.688 1.803 0 .9-.376 1.652-1.126 2.252-.751.601-1.717.901-2.9.901Z" clip-rule="evenodd" />
                    <path fill="#fff" d="M43.466 14.787c0-4.64 3.96-8.4 8.684-8.4 2.607 0 4.465 1.008 5.866 2.32l-1.662 1.616c-.994-.928-2.346-1.648-4.204-1.648-3.438 0-6.126 2.72-6.126 6.096s2.688 6.096 6.126 6.096c2.233 0 3.503-.88 4.318-1.68.668-.656 1.108-1.6 1.271-2.88H52.15v-2.288h7.87c.081.416.13.896.13 1.44 0 1.728-.472 3.856-2.02 5.36-1.515 1.536-3.438 2.352-5.98 2.352-4.725 0-8.684-3.76-8.684-8.384Zm22.957-2.32c3.047 0 5.524 2.272 5.524 5.408 0 3.12-2.477 5.408-5.524 5.408-3.046 0-5.523-2.288-5.523-5.408 0-3.136 2.477-5.408 5.523-5.408Zm0 8.672c1.662 0 3.112-1.344 3.112-3.28 0-1.952-1.45-3.28-3.112-3.28-1.678 0-3.112 1.328-3.112 3.28 0 1.936 1.45 3.28 3.112 3.28Zm12.058-8.672c3.047 0 5.523 2.272 5.523 5.408 0 3.12-2.476 5.408-5.523 5.408-3.047 0-5.524-2.288-5.524-5.408 0-3.136 2.477-5.408 5.524-5.408Zm0 8.672c1.662 0 3.112-1.344 3.112-3.28 0-1.952-1.434-3.28-3.112-3.28-1.679 0-3.112 1.328-3.112 3.28 0 1.936 1.45 3.28 3.112 3.28Zm14.794-8.496h2.314v9.712c0 4-2.395 5.632-5.23 5.632-2.672 0-4.286-1.76-4.888-3.2l2.102-.864c.374.88 1.287 1.92 2.77 1.92 1.808 0 2.932-1.104 2.932-3.168v-.784h-.081c-.538.656-1.58 1.232-2.9 1.232-2.754 0-5.28-2.368-5.28-5.392 0-3.056 2.526-5.424 5.28-5.424 1.32 0 2.362.576 2.9 1.216h.081v-.88Zm-2.77 8.352c1.646 0 2.95-1.36 2.933-3.264 0-1.904-1.287-3.296-2.933-3.296-1.662 0-3.063 1.392-3.063 3.296 0 1.888 1.401 3.264 3.063 3.264Zm6.73 1.92V7.027h2.41v15.888h-2.41Zm9.043-1.776c1.238 0 2.085-.592 2.72-1.488l1.874 1.232c-.619.88-2.069 2.4-4.594 2.4-3.129 0-5.459-2.384-5.459-5.408 0-3.216 2.363-5.408 5.198-5.408 2.851 0 4.252 2.224 4.708 3.44l.245.608-7.365 2.992c.571 1.072 1.434 1.632 2.673 1.632Zm-.179-6.592a2.992 2.992 0 0 0-2.885 3.152l4.921-2c-.261-.688-1.076-1.152-2.036-1.152Z" />
                    <path fill="#FF7602" d="M14.62 10v11.637h4.073V10H14.62Z" />
                    <path fill="#0066D9" d="M2.403 16.913c1.125 0 2.037-.896 2.037-2 0-1.105-.912-2-2.037-2-1.124 0-2.036.895-2.036 2 0 1.104.912 2 2.036 2Z" />
                    <path fill="#0066D9" d="M2.403 19.094c1.125 0 2.037-.895 2.037-2 0-1.104-.912-2-2.037-2-1.124 0-2.036.896-2.036 2 0 1.105.912 2 2.036 2Z" />
                    <path fill="#0066D9" d="M4.44 14.913H.367v2.181H4.44v-2.181Z" />
                    <path fill="#4285F4" d="M30.917 19.094c1.125 0 2.037-.895 2.037-2 0-1.104-.912-2-2.037-2s-2.037.896-2.037 2c0 1.105.912 2 2.037 2Z" />
                    <path fill="#4285F4" d="M30.917 16.913c1.125 0 2.037-.896 2.037-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Z" />
                    <path fill="#4285F4" d="M28.88 17.095h4.074v-2.182H28.88v2.182Z" />
                    <path fill="#EA4335" d="M9.439 23.458c1.124 0 2.036-.895 2.036-2s-.912-2-2.036-2c-1.125 0-2.037.895-2.037 2s.912 2 2.037 2Z" />
                    <path fill="#EA4335" d="M9.439 25.64c1.124 0 2.036-.895 2.036-2 0-1.104-.912-2-2.036-2-1.125 0-2.037.896-2.037 2 0 1.105.912 2 2.037 2Z" />
                    <path fill="#EA4335" d="M11.475 21.459H7.402v2.181h4.073v-2.18ZM9.439 10.367c1.124 0 2.036-.895 2.036-2 0-1.104-.912-2-2.036-2-1.125 0-2.037.896-2.037 2 0 1.105.912 2 2.037 2Zm0 7.091c1.124 0 2.036-.895 2.036-2s-.912-2-2.036-2c-1.125 0-2.037.895-2.037 2s.912 2 2.037 2Z" />
                    <path fill="#EA4335" d="M11.475 8.367H7.402v7.136h4.073V8.367Z" />
                    <path fill="#34A853" d="M23.88 12.55c1.126 0 2.038-.896 2.038-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Z" />
                    <path fill="#34A853" d="M23.88 10.367c1.126 0 2.038-.895 2.038-2 0-1.104-.912-2-2.037-2s-2.037.896-2.037 2c0 1.105.912 2 2.037 2Z" />
                    <path fill="#34A853" d="M21.844 10.549h4.074V8.367h-4.074v2.182Z" />
                    <path fill="#FF7602" d="M16.66 6.186c1.125 0 2.037-.896 2.037-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Z" />
                    <path fill="#FF7602" d="M16.66 4.003c1.125 0 2.037-.895 2.037-2 0-1.104-.912-2-2.037-2s-2.037.896-2.037 2c0 1.105.912 2 2.037 2Z" />
                    <path fill="#FF7602" d="M14.623 4.185h4.074V2.003h-4.074v2.182Zm2.037 27.818c1.125 0 2.037-.895 2.037-2 0-1.104-.912-2-2.037-2s-2.037.896-2.037 2c0 1.105.912 2 2.037 2Z" />
                    <path fill="#FF7602" d="M16.66 29.822c1.125 0 2.037-.896 2.037-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Z" />
                    <path fill="#FF7602" d="M14.623 30.004h4.074v-2.182h-4.074v2.182Z" />
                    <path fill="#34A853" d="M23.88 25.64c1.126 0 2.038-.895 2.038-2 0-1.104-.912-2-2.037-2s-2.037.896-2.037 2c0 1.105.912 2 2.037 2Zm0-7.091c1.126 0 2.038-.896 2.038-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Z" />
                    <path fill="#34A853" d="M21.844 23.64h4.074v-7.091h-4.074v7.09Z" />
                    <path fill="#FF7602" d="M16.66 12.186c1.125 0 2.037-.896 2.037-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Zm0 11.636c1.125 0 2.037-.896 2.037-2 0-1.105-.912-2-2.037-2s-2.037.895-2.037 2c0 1.104.912 2 2.037 2Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h195.728v32H0z" />
                    </clipPath>
                  </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="174" height="32" fill="none" viewBox="0 0 174 32">
                  <path fill="#fff" d="M47.243 15.4c-2.15-.516-2.744-.783-2.744-1.643s.499-1.223 1.919-1.223a4.177 4.177 0 0 1 3.088 1.395l1.919-1.911a6.522 6.522 0 0 0-4.892-2.121c-2.686 0-4.873 1.51-4.873 3.974 0 2.466 1.746 3.478 4.259 4.07 2.513.593 3.05.976 3.05 1.912 0 .936-.767 1.471-2.379 1.471a4.464 4.464 0 0 1-3.491-1.567l-1.919 1.758a6.382 6.382 0 0 0 5.353 2.408c3.722 0 5.352-1.739 5.352-4.338-.076-2.943-2.474-3.688-4.642-4.185Zm12.566-5.503c-3.722 0-5.928 2.866-5.928 7.013s2.206 7.013 5.928 7.013 5.909-2.866 5.909-7.013-2.168-7.013-5.91-7.013Zm0 11.332c-2.187 0-3.108-1.911-3.108-4.32 0-2.407.92-4.318 3.108-4.318 2.187 0 3.127 1.911 3.127 4.319s-.92 4.319-3.127 4.319Zm16.96-3.478c0 2.178-1.075 3.516-2.802 3.516-1.726 0-2.8-1.376-2.8-3.555V10.07h-2.725v7.643c0 3.956 2.226 6.173 5.525 6.173 3.3 0 5.526-2.274 5.526-6.21V10.03h-2.725v7.72Zm14.503-1.892v2.981c-.172-.363-.614-1.032-.94-1.548l-4.854-7.185h-2.494v13.606h2.705v-8.962c.173.343.614 1.031.94 1.547l5.027 7.415h2.436V10.107h-2.82v5.752Zm10.475-5.752h-4.259v13.606h4.067a6.508 6.508 0 0 0 5.043-1.821 6.456 6.456 0 0 0 1.941-4.982c0-4.969-2.878-6.803-6.792-6.803Zm-.192 10.969h-1.304v-8.332h1.439c2.897 0 4.086 1.395 4.086 4.166a3.81 3.81 0 0 1-1.118 3.08 3.853 3.853 0 0 1-3.103 1.086Zm15.425-8.485a2.635 2.635 0 0 1 2.514 1.49l2.531-1.165a5.132 5.132 0 0 0-2.032-2.285 5.175 5.175 0 0 0-2.975-.734c-3.549 0-6.062 2.866-6.062 7.013s2.398 7.013 5.967 7.013a5.23 5.23 0 0 0 5.065-3.076l-2.303-1.357a2.904 2.904 0 0 1-2.686 1.739c-2.033 0-3.223-1.911-3.223-4.32 0-2.407 1.17-4.318 3.204-4.318Zm10.129-2.484h-2.723v13.606h8.211v-2.675h-5.488V10.107Zm12.682-.21c-3.722 0-5.928 2.866-5.928 7.013s2.206 7.013 5.928 7.013 5.928-2.866 5.928-7.013-2.206-7.013-5.928-7.013Zm0 11.332c-2.207 0-3.127-1.911-3.127-4.32 0-2.407.92-4.318 3.127-4.318 2.206 0 3.107 1.911 3.107 4.319s-.901 4.319-3.107 4.319Zm16.94-3.478c0 2.178-1.055 3.516-2.8 3.516-1.746 0-2.782-1.376-2.782-3.555V10.07h-2.744v7.643c0 3.956 2.226 6.173 5.526 6.173 3.299 0 5.543-2.274 5.543-6.21V10.03h-2.743v7.72Zm10.418-7.644h-4.259v13.606h4.067A6.506 6.506 0 0 0 172 21.892a6.44 6.44 0 0 0 1.94-4.982c0-4.969-2.878-6.803-6.791-6.803Zm-.192 10.969h-1.343v-8.332h1.438c2.897 0 4.087 1.395 4.087 4.166a3.803 3.803 0 0 1-1.106 3.064 3.844 3.844 0 0 1-3.076 1.102Z" />
                  <path fill="url(#a)" d="M33.305 16c0 8.889-7.424 16-16.412 16C7.906 32 .351 24.889.351 16S7.776 0 16.763 0c8.988 0 16.542 7.111 16.542 16Z" />
                  <path fill="#fff" d="M4.358 17.193c.007-.057.048-.098.101-.098.051 0 .093.04.101.098l.22 1.39-.22 1.368c-.008.058-.05.097-.1.097-.054 0-.095-.04-.102-.097l-.185-1.367.185-1.39Zm1.034-.959c.054 0 .097.042.106.101l.282 2.249-.283 2.2c-.008.059-.052.1-.105.1-.054 0-.098-.042-.105-.101l-.248-2.2.248-2.248c.007-.058.052-.1.105-.1Zm3.825-1.785a.194.194 0 0 1 .191-.188c.101 0 .185.083.191.188l.224 4.137L9.6 21.26v-.001a.195.195 0 0 1-.191.187.194.194 0 0 1-.191-.187l-.198-2.673.198-4.137Zm-1.981 1.395a.151.151 0 0 1 .148-.145c.078 0 .141.062.148.144l.254 2.742-.254 2.652a.152.152 0 0 1-.148.144.151.151 0 0 1-.148-.144l-.223-2.652.223-2.741Zm4.464 5.371a.236.236 0 0 1-.235.23.235.235 0 0 1-.234-.229l-.172-2.63.172-5.506a.235.235 0 0 1 .234-.23c.127 0 .23.1.235.23l.194 5.507-.195 2.628Zm4.296-.073a.323.323 0 0 1-.32.316.322.322 0 0 1-.321-.315l-.121-2.557.12-6.358a.322.322 0 0 1 .322-.317c.174 0 .317.142.32.316l.136 6.361-.136 2.553Zm-2.164.032a.278.278 0 0 1-.555.002l-.147-2.588.146-5.548a.278.278 0 0 1 .555 0l.166 5.548-.165 2.588v-.002Zm-5.27.085a.173.173 0 0 1-.17.165.172.172 0 0 1-.17-.166l-.21-2.674.21-2.542a.171.171 0 0 1 .17-.166c.09 0 .163.07.17.165l.239 2.543-.239 2.675Zm-2.052-.104c-.007.071-.06.122-.126.122-.067 0-.12-.051-.127-.123l-.236-2.57.236-2.668c.007-.07.06-.123.127-.123.066 0 .12.052.127.123l.268 2.668-.268 2.57Zm7.802-7.912a.298.298 0 0 1 .3-.295c.163 0 .294.13.298.295l.15 5.345-.15 2.572v-.002a.298.298 0 0 1-.299.295.298.298 0 0 1-.3-.293l-.133-2.572.133-5.345Zm-3.666 7.999a.216.216 0 0 1-.213.209.214.214 0 0 1-.213-.208l-.185-2.657.184-5.083a.215.215 0 0 1 .214-.209c.113 0 .207.092.213.21l.208 5.082-.208 2.656Zm2.116-.042a.256.256 0 0 1-.512 0l-.16-2.613.16-5.693a.256.256 0 0 1 .512 0l.179 5.693-.18 2.612v.001Zm12.35-5.656c.37-.153.776-.239 1.201-.239 1.715 0 3.105 1.38 3.105 3.08 0 1.701-1.39 3.08-3.105 3.08l-8.607-.005a.374.374 0 0 1-.336-.364v-9.774c.002-.18.065-.272.3-.362a5.593 5.593 0 0 1 1.985-.368c2.863 0 5.21 2.177 5.457 4.952Zm-8.719-3.892a.344.344 0 0 1 .343-.338c.186 0 .34.151.342.337l.153 6.938-.153 2.518v-.002a.343.343 0 0 1-.685.003l-.14-2.519.14-6.937Z" />
                  <defs>
                    <linearGradient id="a" x1="16.828" x2="16.828" y1="0" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF7602" />
                      <stop offset="1" stop-color="#FF3502" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="32" fill="none" viewBox="0 0 128 32">
                  <g clip-path="url(#a)">
                    <path fill="#fff" d="M125.507 15.509a2.137 2.137 0 0 1-1.513-.616 2.098 2.098 0 0 1-.62-1.5c0-.564.226-1.106.629-1.505.402-.4.948-.624 1.518-.624a2.138 2.138 0 0 1 1.512.616 2.099 2.099 0 0 1 .621 1.5 2.12 2.12 0 0 1-.63 1.505c-.401.4-.948.624-1.517.624Zm0-4.035a1.944 1.944 0 0 0-1.08.318 1.911 1.911 0 0 0-.302 2.959 1.95 1.95 0 0 0 2.115.413 1.926 1.926 0 0 0 1.187-1.785 1.892 1.892 0 0 0-.14-.727 1.912 1.912 0 0 0-1.766-1.178h-.014Zm.479 2.13.594.84h-.509l-.536-.77h-.466v.77h-.438v-2.227h1.002c.523 0 .877.266.877.7a.7.7 0 0 1-.509.686h-.015Zm-.367-1.009h-.55v.7h.55c.283 0 .452-.126.452-.35 0-.224-.154-.35-.438-.35h-.014Zm-18.461-1.288v-.42c0-1.233.466-1.78 1.526-1.78a5.082 5.082 0 0 1 1.723.322.243.243 0 0 0 .198 0 .219.219 0 0 0 .063-.08.22.22 0 0 0 .021-.102V6.684a.224.224 0 0 0-.155-.224 8.816 8.816 0 0 0-2.528-.28c-2.825 0-4.237 1.568-4.237 4.524v.645h-1.414a.213.213 0 0 0-.149.061.208.208 0 0 0-.062.149v2.605a.226.226 0 0 0 .211.224h1.414v10.338a.207.207 0 0 0 .211.21h2.981a.228.228 0 0 0 .154-.06.221.221 0 0 0 .071-.15V14.318h2.825l4.351 10.324c-.495 1.093-.989 1.303-1.653 1.303a3.582 3.582 0 0 1-1.667-.462.214.214 0 0 0-.183 0 .189.189 0 0 0-.127.112l-.946 2.227a.222.222 0 0 0 .099.28 6.33 6.33 0 0 0 3.247.827c2.232 0 3.476-1.037 4.578-3.824l5.268-13.504a.226.226 0 0 0 0-.21.225.225 0 0 0-.183-.084h-3.249a.253.253 0 0 0-.125.041.25.25 0 0 0-.088.099l-3.234 9.175-3.489-9.175a.228.228 0 0 0-.211-.14h-5.241Zm-6.751-.014H97.37c-.125 0-.226.1-.226.224v13.14c0 .123.101.223.226.223h3.037c.125 0 .225-.1.225-.224v-13.14c0-.123-.1-.223-.225-.223Zm-1.505-5.358a2.133 2.133 0 0 0-1.182.347c-.35.23-.624.557-.787.941a2.087 2.087 0 0 0 .451 2.297 2.128 2.128 0 0 0 2.313.462 2.113 2.113 0 0 0 1.312-1.944 2.09 2.09 0 0 0-.612-1.487 2.111 2.111 0 0 0-1.495-.616Zm-3.396 5.357h-3.348v-3.39a.223.223 0 0 0-.212-.224H88.91a.227.227 0 0 0-.16.066.223.223 0 0 0-.066.158v3.39h-1.498a.213.213 0 0 0-.211.21v2.592a.223.223 0 0 0 .212.224h1.412v6.696c0 2.704 1.412 4.076 4.04 4.076a5.43 5.43 0 0 0 2.825-.7.198.198 0 0 0 .113-.182v-2.466a.239.239 0 0 0-.1-.196.213.213 0 0 0-.225 0 3.954 3.954 0 0 1-1.78.42c-.975 0-1.412-.434-1.412-1.4v-6.248h3.347a.227.227 0 0 0 .226-.224v-2.592a.222.222 0 0 0-.127-.21Zm-16.018-.28a7.189 7.189 0 0 0-3.944 1.262 7.098 7.098 0 0 0-2.575 3.22 7.033 7.033 0 0 0-.34 4.096 7.073 7.073 0 0 0 2.008 3.595 7.167 7.167 0 0 0 3.682 1.885 7.201 7.201 0 0 0 4.119-.459 7.131 7.131 0 0 0 3.169-2.648 7.046 7.046 0 0 0 1.155-3.947 7.05 7.05 0 0 0-.584-2.713 7.096 7.096 0 0 0-1.588-2.285 7.167 7.167 0 0 0-2.35-1.507 7.218 7.218 0 0 0-2.752-.499Zm0 11.109a3.897 3.897 0 0 1-2.778-1.218 3.832 3.832 0 0 1-1.036-2.83 3.71 3.71 0 0 1 1.011-2.796 3.772 3.772 0 0 1 2.746-1.183 3.912 3.912 0 0 1 2.795 1.202 3.846 3.846 0 0 1 1.061 2.832 3.725 3.725 0 0 1-1.025 2.815 3.81 3.81 0 0 1-2.775 1.177ZM64.84 11.012a5.377 5.377 0 0 0-2.356.528 5.33 5.33 0 0 0-1.88 1.504v-1.541a.224.224 0 0 0-.227-.21h-3.065a.228.228 0 0 0-.155.06.223.223 0 0 0-.07.15v17.09a.224.224 0 0 0 .225.224h3.037a.227.227 0 0 0 .226-.224v-5.366a5.45 5.45 0 0 0 1.902 1.431 5.48 5.48 0 0 0 2.336.488c3.178 0 6.398-2.423 6.398-7.074 0-4.65-3.192-7.06-6.37-7.06Zm2.826 7.004a3.615 3.615 0 0 1-.898 2.788 3.671 3.671 0 0 1-2.676 1.233 3.796 3.796 0 0 1-2.688-1.238 3.731 3.731 0 0 1-.956-2.783 3.71 3.71 0 0 1 .962-2.773 3.77 3.77 0 0 1 2.682-1.233 3.725 3.725 0 0 1 2.711 1.24 3.662 3.662 0 0 1 .905 2.822l-.042-.056Zm-17.571-3.684c-3.39-.812-3.998-1.4-3.998-2.55 0-1.148 1.06-1.876 2.642-1.876a7.763 7.763 0 0 1 4.633 1.75.186.186 0 0 0 .17 0 .24.24 0 0 0 .14-.083l1.667-2.326a.237.237 0 0 0 0-.294 10.053 10.053 0 0 0-6.525-2.241c-3.659 0-6.215 2.185-6.215 5.295 0 3.348 2.203 4.539 6.017 5.449 3.248.742 3.8 1.4 3.8 2.48 0 1.078-1.117 1.989-2.826 1.989a7.802 7.802 0 0 1-5.395-2.214.27.27 0 0 0-.17 0 .34.34 0 0 0-.155.084l-1.893 2.172a.223.223 0 0 0 0 .308 11.127 11.127 0 0 0 7.486 2.802c3.941 0 6.498-2.144 6.498-5.45-.057-2.76-1.752-4.3-5.876-5.295Z" />
                    <path fill="#1DD75F" d="M16.133 0c-3.19 0-6.31.938-8.963 2.696a16.03 16.03 0 0 0-5.942 7.181 15.877 15.877 0 0 0-.918 9.244 15.96 15.96 0 0 0 4.415 8.193 16.175 16.175 0 0 0 8.26 4.379c3.13.617 6.374.3 9.322-.91a16.105 16.105 0 0 0 7.24-5.894A15.905 15.905 0 0 0 32.267 16c0-4.243-1.7-8.313-4.726-11.314A16.208 16.208 0 0 0 16.133 0Zm7.404 23.074a1.002 1.002 0 0 1-1.02.47 1.007 1.007 0 0 1-.371-.138c-3.785-2.298-8.55-2.81-14.163-1.545a1 1 0 0 1-1.039-.387.979.979 0 0 1-.159-.354.988.988 0 0 1 .39-1.038c.107-.077.229-.132.357-.162 6.142-1.392 11.42-.792 15.67 1.788a.989.989 0 0 1 .335 1.366Zm1.97-4.354a1.297 1.297 0 0 1-1.725.409 21.31 21.31 0 0 0-16.07-1.865 1.295 1.295 0 0 1-1.858-.743 1.267 1.267 0 0 1 .166-1.089 1.283 1.283 0 0 1 .959-.556 23.699 23.699 0 0 1 18.115 2.133 1.268 1.268 0 0 1 .412 1.711Zm.167-4.533c-5.15-3.065-13.764-3.346-18.734-1.852a1.518 1.518 0 0 1-1.148-.112 1.498 1.498 0 0 1-.732-.884 1.484 1.484 0 0 1 .113-1.138c.188-.35.509-.611.891-.726 5.704-1.711 15.168-1.38 21.155 2.132a1.484 1.484 0 0 1 .415 1.984 1.518 1.518 0 0 1-1.96.57v.026Z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h127.822v32H0z" />
                    </clipPath>
                  </defs>
                </svg>

              </Box>
            </Box>
          </SimpleGrid>
        </Flex>

        <Flex
          w="100%"
          paddingY="20px"
          alignItems="center"
          justifyContent="center"
          bg="#503AE7">

          <Flex
            w="215px"
            h="24px"
            alignItems="center"
            justifyContent="center">

            <Heading3
              fontFamily='Inter'
              fontStyle="normal"
              fontWeight="700"
              fontSize="16px"
              lineHeight="150%"
              color="#FFFFFF"
            >
              © Copyright Finsweet 2021
            </Heading3>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}