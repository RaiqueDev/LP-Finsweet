import {
  Box,
  Flex,
  SimpleGrid
} from "@chakra-ui/react";

import {
  Body,
  Heading4
} from "../../../styles/theme/styles";

export default function Items() {
  return (
    <>
      <Flex
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3
          }}
          spacing='32px'
          placeItems={"center"}
          maxW="90%"
          w="1280px">

          <Box
            w="100%">

            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
              <path fill="#503AE7" d="M9.54 55.945a1.566 1.566 0 0 0 1.105-2.667 1.575 1.575 0 0 0-1.106-.458c-.41 0-.812.167-1.105.458-.29.29-.457.694-.457 1.105 0 .412.167.815.457 1.104a1.57 1.57 0 0 0 1.105.458Zm28.443-21.397a1.563 1.563 0 0 0-2.21-2.21 1.552 1.552 0 0 1-1.105.458c-.417 0-.81-.163-1.105-.458a1.563 1.563 0 0 0-2.21 2.21 4.673 4.673 0 0 0 3.315 1.37c1.2 0 2.401-.456 3.315-1.37Z" />
              <path fill="#503AE7" d="M72.044 70.015v-4.746c4.046-1.802 6.875-5.858 6.875-10.566v-11.26c0-6.375-5.187-11.562-11.562-11.562-6.376 0-11.563 5.187-11.563 11.562v5.73a28.66 28.66 0 0 0-13.959-4.445v-2.556c4.217-2.47 7.055-7.05 7.055-12.28v-4.194c-.039.064.047-.056 0 0 1.598-2.622 2.571-5.82 2.571-8.905V1.563C51.461.7 50.761 0 49.9 0H31.75C24.1 0 17.875 6.224 17.875 13.875v2.918c0 3.086.974 6.283 2.571 8.905-.046-.056.04.064 0 0v4.194c0 5.23 2.838 9.81 7.055 12.28v2.557c-1.703.092-3.39.334-5.04.718l-.034.007a28.925 28.925 0 0 0-8.136 3.263 1.562 1.562 0 1 0 1.59 2.69 25.754 25.754 0 0 1 5.64-2.476c1.248 6.153 6.698 10.739 13.148 10.739 6.448 0 11.905-4.595 13.15-10.752a25.686 25.686 0 0 1 7.976 4.05v1.735c0 4.708 2.83 8.764 6.875 10.566v4.746a8.448 8.448 0 0 0-6.927 4.39v-7.843a1.563 1.563 0 0 0-3.125 0v10.313H16.719V66.562a1.563 1.563 0 0 0-3.125 0v10.313H3.125V73.75c0-4.585 1.212-9.09 3.504-13.028a1.563 1.563 0 0 0-2.7-1.572A29.05 29.05 0 0 0 0 73.75v4.687C0 79.3.7 80 1.563 80h76.874c.864 0 1.563-.7 1.563-1.563 0-4.49-3.527-8.172-7.956-8.422ZM21 13.875c0-5.927 4.823-10.75 10.75-10.75h16.587v13.668c0 1.548-.26 3.074-.764 4.516a38.533 38.533 0 0 1-1.71-3.853c-.235-.618-1.013-.985-1.649-.985.126-.032-.125 0 0 0a40.42 40.42 0 0 1-9.545 1.162 38.78 38.78 0 0 1-9.357-1.14 1.563 1.563 0 0 0-1.838.963 38.636 38.636 0 0 1-1.71 3.853A13.687 13.687 0 0 1 21 16.793v-2.918Zm2.571 16.017v-5.364a41.804 41.804 0 0 0 2.32-4.694c2.87.614 5.817.924 8.778.924 2.96 0 5.907-.31 8.778-.924a41.817 41.817 0 0 0 2.319 4.694v5.364c0 6.12-4.978 11.097-11.097 11.097-6.12 0-11.098-4.978-11.098-11.097Zm11.098 14.222c1.404 0 2.76-.205 4.042-.586v2.724a4.048 4.048 0 0 1-4.042 4.043 4.047 4.047 0 0 1-4.043-4.043v-2.724a14.18 14.18 0 0 0 4.043.586Zm0 12.43c-4.984 0-9.187-3.567-10.105-8.338 1.029-.18 2.07-.298 3.12-.354.729 3.184 3.583 5.568 6.985 5.568 3.403 0 6.258-2.385 6.986-5.57a26.15 26.15 0 0 1 3.12.348c-.916 4.773-5.125 8.347-10.106 8.347Zm24.251-7.99h16.875v3.124H58.92v-3.125Zm8.438-13.548c4.652 0 8.437 3.785 8.437 8.437v1.985H58.92v-1.985c0-4.652 3.785-8.437 8.438-8.437Zm-8.435 19.797h16.87c-.054 4.607-3.816 8.338-8.435 8.338-4.62 0-8.381-3.731-8.435-8.338Zm9.997 11.463V70h-3.125v-3.734h3.125ZM58.073 76.875a5.322 5.322 0 0 1 5.078-3.75h8.411c2.386 0 4.41 1.58 5.079 3.75H58.073Z" />
              <path fill="#503AE7" d="M61.106 24.157a1.563 1.563 0 0 0 2.21 2.21 5.8 5.8 0 0 1 4.128-1.71 5.8 5.8 0 0 1 4.128 1.71 1.558 1.558 0 0 0 2.21 0c.61-.61.61-1.6 0-2.21a8.905 8.905 0 0 0-6.338-2.625 8.905 8.905 0 0 0-6.338 2.625Z" />
              <path fill="#503AE7" d="M58.71 21.914a12.15 12.15 0 0 1 8.647-3.582 12.15 12.15 0 0 1 8.648 3.582 1.558 1.558 0 0 0 2.21 0c.61-.61.61-1.6 0-2.21a15.254 15.254 0 0 0-10.858-4.497 15.254 15.254 0 0 0-10.858 4.497 1.563 1.563 0 0 0 2.21 2.21Z" />
            </svg>

            <Heading4
              textAlign="left"
              mt="32px">
              500+ Podcast
            </Heading4>

            <Body
              textAlign="left"
              mt="16px">
              Apparently we had reached a great height in the
              atmosphere, for the sky was a dead black, and the
              stars had ceased to twinkle.
            </Body>
          </Box>

          <Box
            w="100%">

            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="80" fill="none" viewBox="0 0 86 80">
              <path fill="#503AE7" stroke="#F4F2FF" d="M36.76 34.618a2.015 2.015 0 0 1-1.007-1.746V17.03a2.016 2.016 0 0 1 3.023-1.746l13.72 7.922a2.016 2.016 0 0 1 0 3.49l-13.72 7.922a2.015 2.015 0 0 1-2.015 0Zm3.774-13.664-.75-.433v8.86l.75-.433 6.173-3.564.75-.433-.75-.433-6.173-3.564Z" />
              <path fill="#503AE7" stroke="#F4F2FF" d="m80.215 59.6-.434.424.5.345c3.073 2.121 5.09 5.664 5.09 9.669v7.446a2.016 2.016 0 0 1-4.032 0v-7.446c0-4.253-3.46-7.712-7.712-7.712s-7.712 3.46-7.712 7.712v7.446a2.016 2.016 0 0 1-4.031 0v-7.446c0-4.005 2.017-7.548 5.09-9.67l.5-.344-.435-.424a9.4 9.4 0 0 1-2.83-6.29l-.021-.476H52.367l-.023.476a9.398 9.398 0 0 1-2.829 6.29l-.434.424.5.345c3.073 2.121 5.09 5.664 5.09 9.669v7.446a2.016 2.016 0 0 1-4.032 0v-7.446c0-4.253-3.459-7.712-7.712-7.712-4.252 0-7.711 3.46-7.711 7.712v7.446a2.016 2.016 0 0 1-4.032 0v-7.446c0-4.005 2.017-7.548 5.09-9.67l.5-.344-.434-.424a9.399 9.399 0 0 1-2.83-6.29l-.022-.476H21.683l-.023.476a9.4 9.4 0 0 1-2.829 6.29l-.434.424.5.345c3.073 2.121 5.09 5.664 5.09 9.669v7.446a2.016 2.016 0 0 1-4.032 0v-7.446c0-4.253-3.46-7.712-7.712-7.712s-7.712 3.46-7.712 7.712v7.446a2.016 2.016 0 0 1-4.031 0v-7.446c0-4.005 2.017-7.548 5.09-9.67l.5-.344-.434-.424a9.397 9.397 0 0 1-2.841-6.736c0-4.017 2.527-7.456 6.077-8.81l.321-.124V2.516C9.213 1.403 10.116.5 11.23.5h63.397c1.113 0 2.015.903 2.015 2.016v41.409l.323.122c3.558 1.351 6.092 4.794 6.092 8.817a9.397 9.397 0 0 1-2.841 6.736ZM72.61 5.03v-.5H13.245v38.95l.425.064a9.454 9.454 0 0 1 6.944 4.99l.14.27h13.663l.14-.27c1.573-3.027 4.735-5.098 8.37-5.098 3.636 0 6.798 2.071 8.37 5.098l.14.27h13.68l.14-.27a9.454 9.454 0 0 1 6.93-4.988l.423-.065V5.031Zm-4.38 47.833a5.403 5.403 0 0 0 5.397 5.397 5.402 5.402 0 0 0 5.397-5.397 5.403 5.403 0 0 0-5.397-5.397 5.403 5.403 0 0 0-5.397 5.397ZM42.927 58.26a5.403 5.403 0 0 0 5.398-5.397 5.403 5.403 0 0 0-5.398-5.397 5.403 5.403 0 0 0-5.397 5.397 5.403 5.403 0 0 0 5.398 5.397ZM17.64 52.864a5.403 5.403 0 0 0-5.397-5.397 5.403 5.403 0 0 0-5.397 5.397 5.402 5.402 0 0 0 5.397 5.397 5.403 5.403 0 0 0 5.397-5.397Z" />
            </svg>

            <Heading4
              textAlign="left"
              mt="32px">
              24M Views
            </Heading4>

            <Body
              textAlign="left"
              mt="16px">
              Apparently we had reached a great height in the
              atmosphere, for the sky was a dead black, and the
              stars had ceased to twinkle.
            </Body>
          </Box>

          <Box
            w="100%">

            <svg xmlns="http://www.w3.org/2000/svg" width="69" height="80" fill="none" viewBox="0 0 69 80">
              <path fill="#503AE7" d="M34.84 50.666H32.8a.066.066 0 0 1-.066-.065v-3.102a1.171 1.171 0 1 0-2.342 0v3.102a2.41 2.41 0 0 0 2.408 2.408h2.04a2.83 2.83 0 0 1 2.828 2.827v10.642c0 .31-.098.607-.283.857l-4.55 6.162a1.17 1.17 0 0 0-.229.696v4.636a1.171 1.171 0 0 0 2.342 0v-4.25l4.322-5.852c.484-.656.74-1.434.74-2.249V55.836c0-2.85-2.32-5.17-5.17-5.17Zm-4.449-8.158a1.171 1.171 0 1 0 2.342 0V31.21a4.867 4.867 0 0 0-4.861-4.862 4.867 4.867 0 0 0-4.862 4.862v10.572a4.247 4.247 0 0 0-1.932-.463h-1.176c-1.383 0-2.614.66-3.395 1.682a4.256 4.256 0 0 0-2.81-1.057H12.52c-1.513 0-2.844.79-3.604 1.98a4.251 4.251 0 0 0-2.602-.888H5.14A4.279 4.279 0 0 0 .865 47.31V57.4a1.171 1.171 0 0 0 2.342 0V47.31c0-1.066.867-1.932 1.932-1.932h1.176c1.065 0 1.932.866 1.932 1.931v.306a1.171 1.171 0 0 0 2.342 0v-1.399c0-1.065.867-1.931 1.932-1.931h1.176c1.065 0 1.932.866 1.932 1.931v1.399a1.171 1.171 0 0 0 2.342 0v-1.399c0-.139-.008-.276-.02-.412.012-.069.02-.14.02-.212 0-1.065.866-1.932 1.931-1.932h1.176c1.065 0 1.932.867 1.932 1.932v2.023a1.171 1.171 0 0 0 2.342 0V31.209c0-1.39 1.13-2.52 2.52-2.52 1.389 0 2.52 1.13 2.52 2.52v11.3ZM3.904 68.97a3.279 3.279 0 0 1-.697-2.015v-4.564a1.171 1.171 0 0 0-2.342 0v4.564c0 1.249.425 2.478 1.196 3.46l1.73 2.208v6.206a1.171 1.171 0 0 0 2.343 0v-6.61c0-.263-.088-.517-.25-.723l-1.98-2.526Zm52.249-55.274-6.098-2.065-3.68-3.68a1.17 1.17 0 1 0-1.657 1.655l3.046 3.046-6.398 6.398a1.17 1.17 0 1 0 1.657 1.656l6.71-6.711 5.669 1.919c.379.128.49.444.52.574.03.13.07.462-.212.745L36.888 36.056a.772.772 0 0 1-.591.23 1.171 1.171 0 1 0-.099 2.34l.137.003c.835 0 1.615-.323 2.21-.917l5.449-5.45a5.46 5.46 0 0 0 3.644 1.382c1.469 0 2.85-.572 3.889-1.61l.16-.161a5.507 5.507 0 0 0 .23-7.533l5.449-5.45a3.121 3.121 0 0 0 .837-2.934 3.12 3.12 0 0 0-2.05-2.26Zm-6.121 16.52-.161.16a3.136 3.136 0 0 1-2.233.926 3.134 3.134 0 0 1-1.948-.672l4.594-4.595a3.162 3.162 0 0 1-.252 4.181ZM22.306 8.64c-2.457 4.963-1.626 11.154 2.5 15.282l.036.035a1.168 1.168 0 0 0 1.656.002 1.171 1.171 0 0 0 .002-1.656l-.036-.037c-4.262-4.261-4.262-11.195 0-15.457a10.89 10.89 0 0 1 7.286-3.19c2.735-.11 5.39.798 7.475 2.556a1.17 1.17 0 1 0 1.51-1.791 13.235 13.235 0 0 0-9.078-3.106 13.23 13.23 0 0 0-5.367 1.37l-1.41-1.41a4.24 4.24 0 0 0-5.988 0c-.8.8-1.24 1.863-1.24 2.994 0 1.131.44 2.195 1.24 2.994l1.414 1.414Zm.243-5.746a1.894 1.894 0 0 1 2.676 0l1.016 1.017a13.337 13.337 0 0 0-2.674 2.677L22.549 5.57a1.88 1.88 0 0 1-.554-1.338c0-.505.197-.98.554-1.338Z" />
              <path fill="#503AE7" d="m37.895 22.521-.689.69a1.17 1.17 0 1 0 1.657 1.656l.689-.69a1.171 1.171 0 1 0-1.657-1.655ZM12.598 24.82a1.17 1.17 0 0 0 .815-2.012 6.72 6.72 0 0 1-2.062-4.859 6.72 6.72 0 0 1 2.063-4.86 1.171 1.171 0 1 0-1.631-1.681 9.043 9.043 0 0 0-2.774 6.541c0 2.483.985 4.806 2.774 6.541.227.22.521.33.815.33Z" />
              <path fill="#503AE7" d="M15.287 21.353a1.17 1.17 0 1 0 1.502-1.798 2.088 2.088 0 0 1 0-3.212 1.171 1.171 0 0 0-1.502-1.798 4.424 4.424 0 0 0-1.594 3.404c0 1.317.581 2.558 1.594 3.404Zm50.703-9.945a1.171 1.171 0 1 0-1.63 1.68 6.721 6.721 0 0 1 2.062 4.86 6.72 6.72 0 0 1-2.062 4.861 1.17 1.17 0 1 0 1.63 1.68 9.044 9.044 0 0 0 2.775-6.54 9.043 9.043 0 0 0-2.775-6.541Z" />
              <path fill="#503AE7" d="M62.486 14.545a1.171 1.171 0 1 0-1.501 1.798 2.089 2.089 0 0 1 0 3.212 1.171 1.171 0 1 0 1.501 1.798 4.424 4.424 0 0 0 1.594-3.404 4.425 4.425 0 0 0-1.594-3.404Z" />
            </svg>

            <Heading4
              textAlign="left"
              mt="32px">
              600k Subs
            </Heading4>

            <Body
              textAlign="left"
              mt="16px">
              Apparently we had reached a great height in the
              atmosphere, for the sky was a dead black, and the
              stars had ceased to twinkle.
            </Body>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  )
}
