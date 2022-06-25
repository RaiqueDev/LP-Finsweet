import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Heading2 } from "../styles";

export default function Sponsors() {
  return (
    <>
      <Flex
        pos="absolute"
        mt="128px"
        w="100%"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1280px"
          flexDir="column"
          alignItems="center"
          justifyContent="space-around"
          paddingY="72px"
          bg="#503AE7">

          <Heading2
            maxW="90%"
            w="215px"
            h="38px"
            color="#fff">

            Our Sponsors
          </Heading2>

          <SimpleGrid
            maxW="90%"
            w="1135px"
            mt="64px"
            columns={{
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5
            }}
            spacing='16px'
            placeItems="center">

            <Box
              w="100%"
              h='39px'>

              <svg xmlns="http://www.w3.org/2000/svg" width="172" height="34" fill="none" viewBox="0 0 172 34">
                <path fill="#fff" d="M26.28 14.963a4.634 4.634 0 0 0-1.32 3.71l-.023-.022a5.521 5.521 0 0 1-1.587 4.353 5.48 5.48 0 0 1-4.338 1.593l.023.022a4.629 4.629 0 0 0-2.736.595 4.653 4.653 0 0 0-1.897 2.065 4.674 4.674 0 0 0 .921 5.275 4.628 4.628 0 0 0 5.258.92 4.65 4.65 0 0 0 2.055-1.906c.474-.833.68-1.791.59-2.746l.024.023a5.521 5.521 0 0 1 1.587-4.354 5.48 5.48 0 0 1 4.338-1.592l-.024-.023a4.618 4.618 0 0 0 4.087-1.795 4.659 4.659 0 0 0-2.673-7.377 4.617 4.617 0 0 0-4.282 1.26h-.003Zm-9.312 6.67-.024-.023a4.568 4.568 0 0 0 3.7-1.323 4.6 4.6 0 0 0 1.32-3.711l.024.023a5.52 5.52 0 0 1 1.586-4.354 5.48 5.48 0 0 1 4.339-1.592l-.024-.023a4.63 4.63 0 0 0 2.736-.593 4.653 4.653 0 0 0 1.899-2.064 4.675 4.675 0 0 0-.919-5.276 4.627 4.627 0 0 0-5.258-.922 4.648 4.648 0 0 0-2.056 1.906 4.673 4.673 0 0 0-.59 2.746l-.023-.024a5.52 5.52 0 0 1-1.586 4.354 5.477 5.477 0 0 1-4.339 1.592l.023.024a4.568 4.568 0 0 0-3.7 1.322 4.602 4.602 0 0 0-1.32 3.712l-.023-.023a5.522 5.522 0 0 1-1.587 4.353A5.48 5.48 0 0 1 6.81 23.33l.022.023a4.63 4.63 0 0 0-2.736.592 4.653 4.653 0 0 0-1.899 2.064 4.674 4.674 0 0 0 .919 5.277 4.637 4.637 0 0 0 5.258.922 4.648 4.648 0 0 0 2.056-1.906c.473-.833.68-1.792.59-2.746l.024.022a5.52 5.52 0 0 1 1.587-4.353 5.48 5.48 0 0 1 4.338-1.593ZM8.509 19.09a4.628 4.628 0 0 0 1.319-3.71l.024.023a5.521 5.521 0 0 1 1.587-4.355 5.48 5.48 0 0 1 4.34-1.591l-.024-.023c.95.09 1.906-.118 2.735-.593a4.651 4.651 0 0 0 1.898-2.063 4.673 4.673 0 0 0-.918-5.275A4.635 4.635 0 0 0 14.214.58a4.648 4.648 0 0 0-2.056 1.905 4.672 4.672 0 0 0-.591 2.745l-.023-.023a5.521 5.521 0 0 1-1.586 4.354 5.48 5.48 0 0 1-4.339 1.592l.023.023a4.618 4.618 0 0 0-4.087 1.796A4.658 4.658 0 0 0 4.23 20.35a4.618 4.618 0 0 0 4.28-1.26ZM47.607 6.456h3.75v18.308h-3.75V6.456Zm5.873 12.039a6.663 6.663 0 0 1 1.103-3.7 6.628 6.628 0 0 1 2.967-2.46 6.6 6.6 0 0 1 7.226 1.425 6.668 6.668 0 0 1 1.448 7.246 6.641 6.641 0 0 1-2.44 2.987 6.606 6.606 0 0 1-3.681 1.122 6.525 6.525 0 0 1-4.696-1.915 6.573 6.573 0 0 1-1.927-4.705Zm9.497 0a2.892 2.892 0 0 0-1.83-2.608 2.866 2.866 0 0 0-3.106.676 2.89 2.89 0 0 0 .472 4.417c.471.314 1.024.48 1.59.48a2.793 2.793 0 0 0 2.084-.85 2.815 2.815 0 0 0 .79-2.115Zm18.689-6.27v11.907c0 4.213-3.274 5.994-6.598 5.994a6.37 6.37 0 0 1-3.386-.685 6.399 6.399 0 0 1-2.536-2.355l3.198-1.856a2.863 2.863 0 0 0 2.849 1.58 2.482 2.482 0 0 0 2.054-.66 2.5 2.5 0 0 0 .77-2.023V22.98a4.44 4.44 0 0 1-3.65 1.63 6.34 6.34 0 0 1-4.36-1.935 6.385 6.385 0 0 1 0-8.87 6.34 6.34 0 0 1 4.36-1.935 4.425 4.425 0 0 1 3.65 1.63v-1.279l3.649.003Zm-3.648 6.018a3.048 3.048 0 0 0-1.781-2.898 3.02 3.02 0 0 0-3.344.579 3.044 3.044 0 0 0-.711 3.329 3.022 3.022 0 0 0 2.813 1.904 2.82 2.82 0 0 0 2.155-.785 2.839 2.839 0 0 0 .868-2.129Zm5.772.252a6.663 6.663 0 0 1 1.102-3.7 6.628 6.628 0 0 1 2.967-2.46 6.6 6.6 0 0 1 7.227 1.425 6.668 6.668 0 0 1 1.448 7.246 6.641 6.641 0 0 1-2.44 2.987 6.606 6.606 0 0 1-3.682 1.122 6.525 6.525 0 0 1-4.696-1.915 6.573 6.573 0 0 1-1.927-4.705Zm9.496 0a2.893 2.893 0 0 0-.523-1.58 2.877 2.877 0 0 0-2.96-1.16 2.873 2.873 0 0 0-2.217 2.287 2.896 2.896 0 0 0 1.237 2.938c.471.314 1.024.48 1.589.48a2.793 2.793 0 0 0 2.084-.85 2.814 2.814 0 0 0 .79-2.115Zm5.497-9.631a2.263 2.263 0 0 1 1.389-2.086 2.24 2.24 0 0 1 2.451.49 2.257 2.257 0 0 1 .487 2.46 2.252 2.252 0 0 1-2.078 1.393 2.269 2.269 0 0 1-1.584-.668 2.284 2.284 0 0 1-.665-1.59Zm.379 3.36h3.75v12.541h-3.755l.005-12.54Zm19.936 6.271a6.301 6.301 0 0 1-3.588 6.025 6.26 6.26 0 0 1-2.385.595 4.677 4.677 0 0 1-3.722-1.53v6.196h-3.749V12.225h3.749v1.178a4.694 4.694 0 0 1 3.722-1.529 6.258 6.258 0 0 1 4.359 2.064 6.305 6.305 0 0 1 1.614 4.557Zm-3.749 0a2.983 2.983 0 0 0-1.886-2.703 2.965 2.965 0 0 0-3.216.694 2.993 2.993 0 0 0 .485 4.57c.488.325 1.06.499 1.645.498a2.844 2.844 0 0 0 2.169-.86 2.867 2.867 0 0 0 .803-2.199Zm15.316 2.507c0 2.884-2.498 4.113-5.196 4.113a5.455 5.455 0 0 1-3.143-.664 5.48 5.48 0 0 1-2.23-2.32l3.247-1.856c.132.453.414.847.8 1.116.386.27.852.398 1.321.363.899 0 1.349-.276 1.349-.776 0-1.38-6.148-.652-6.148-4.991 0-2.735 2.3-4.113 4.899-4.113a5.448 5.448 0 0 1 2.801.673 5.475 5.475 0 0 1 2.071 2.01l-3.199 1.73a1.82 1.82 0 0 0-1.673-1.103c-.65 0-1.051.253-1.051.702.005 1.43 6.152.476 6.152 5.116Zm13.695-8.777v12.54h-3.749v-1.18a4.264 4.264 0 0 1-3.572 1.531c-2.524 0-4.67-1.805-4.67-5.194v-7.697h3.749v7.147a2.075 2.075 0 0 0 .56 1.645 2.057 2.057 0 0 0 1.613.635c1.375 0 2.324-.802 2.324-2.583v-6.84l3.745-.004Zm21.495 4.84v7.7h-3.749V17.39c0-1.254-.6-2.056-1.799-2.056-1.249 0-1.95.878-1.95 2.357v7.072h-3.747V17.39c0-1.254-.6-2.056-1.8-2.056-1.25 0-1.949.878-1.949 2.357v7.072h-3.749v-12.54h3.749v1.152a3.825 3.825 0 0 1 3.349-1.504 3.723 3.723 0 0 1 3.273 1.654 4.114 4.114 0 0 1 3.623-1.653c2.869.001 4.749 2.057 4.749 5.192Zm3.171-4.918a2.787 2.787 0 0 0 2.782-2.792 2.787 2.787 0 0 0-2.782-2.792 2.787 2.787 0 0 0-2.782 2.792 2.787 2.787 0 0 0 2.782 2.792Z" />
              </svg>

            </Box>

            <Box
              w="100%"
              h='39px'>

              <svg xmlns="http://www.w3.org/2000/svg" width="166" height="39" fill="none" viewBox="0 0 166 39">
                <path fill="#fff" d="M40.197 9.514h3.807v18.478h-3.807V9.514Zm5.938 12.148a6.75 6.75 0 0 1 1.126-3.734 6.674 6.674 0 0 1 2.996-2.472 6.614 6.614 0 0 1 3.854-.376 6.647 6.647 0 0 1 3.41 1.848 6.73 6.73 0 0 1 1.815 3.448 6.761 6.761 0 0 1-.395 3.882 6.702 6.702 0 0 1-2.47 3.005 6.625 6.625 0 0 1-3.712 1.112 6.53 6.53 0 0 1-2.551-.497 6.57 6.57 0 0 1-2.161-1.456 6.63 6.63 0 0 1-1.432-2.186 6.669 6.669 0 0 1-.48-2.574Zm9.543 0a2.931 2.931 0 0 0-.524-1.599 2.897 2.897 0 0 0-1.314-1.04 2.873 2.873 0 0 0-3.126.68 2.937 2.937 0 0 0-.594 3.168c.22.529.592.98 1.066 1.297.474.317 1.03.486 1.599.486a2.799 2.799 0 0 0 2.081-.866 2.842 2.842 0 0 0 .787-2.126h.025Zm18.768-6.33v12.034c0 4.245-3.3 6.048-6.637 6.048a6.303 6.303 0 0 1-3.409-.68 6.366 6.366 0 0 1-2.542-2.389l3.21-1.867c.26.529.674.965 1.187 1.25a2.862 2.862 0 0 0 1.681.349 2.52 2.52 0 0 0 2.055-.681 2.559 2.559 0 0 0 .788-2.03v-1.164a4.483 4.483 0 0 1-1.642 1.255 4.45 4.45 0 0 1-2.025.382 6.32 6.32 0 0 1-4.487-1.873 6.42 6.42 0 0 1-1.858-4.521 6.42 6.42 0 0 1 1.858-4.521 6.32 6.32 0 0 1 4.487-1.873 4.45 4.45 0 0 1 2.025.382 4.483 4.483 0 0 1 1.642 1.255v-1.279l3.667-.077Zm-3.667 6.075a3.087 3.087 0 0 0-.45-1.739 3.054 3.054 0 0 0-1.34-1.186 3.025 3.025 0 0 0-3.36.58 3.091 3.091 0 0 0-.72 3.359 3.064 3.064 0 0 0 1.12 1.4 3.03 3.03 0 0 0 1.704.527 2.824 2.824 0 0 0 2.171-.79 2.866 2.866 0 0 0 .875-2.151Zm5.812.255a6.75 6.75 0 0 1 1.124-3.731 6.673 6.673 0 0 1 2.992-2.473 6.614 6.614 0 0 1 3.85-.38c1.293.26 2.48.901 3.412 1.841a6.73 6.73 0 0 1 1.82 3.441 6.761 6.761 0 0 1-.384 3.88 6.702 6.702 0 0 1-2.46 3.01 6.625 6.625 0 0 1-3.704 1.126 6.543 6.543 0 0 1-2.558-.494 6.582 6.582 0 0 1-2.168-1.455 6.64 6.64 0 0 1-1.439-2.187 6.681 6.681 0 0 1-.485-2.578Zm9.543 0a2.931 2.931 0 0 0-.525-1.6 2.897 2.897 0 0 0-1.316-1.04 2.873 2.873 0 0 0-3.128.687 2.937 2.937 0 0 0-.586 3.172 2.91 2.91 0 0 0 1.072 1.293 2.878 2.878 0 0 0 1.602.48 2.799 2.799 0 0 0 2.082-.866 2.84 2.84 0 0 0 .786-2.126h.013Zm5.519-9.719c0-.45.133-.89.381-1.264a2.263 2.263 0 0 1 1.014-.839 2.243 2.243 0 0 1 2.461.494 2.282 2.282 0 0 1 .49 2.48 2.27 2.27 0 0 1-.832 1.022c-.371.25-.808.383-1.255.383a2.275 2.275 0 0 1-1.59-.674 2.31 2.31 0 0 1-.669-1.602Zm.368 3.39h3.807v12.66h-3.807v-12.66Zm20.102 6.329a6.424 6.424 0 0 1-1.641 4.625 6.343 6.343 0 0 1-1.999 1.488 6.301 6.301 0 0 1-2.413.6 4.687 4.687 0 0 1-2.079-.335 4.723 4.723 0 0 1-1.728-1.212v6.253h-3.807v-17.75h3.807v1.19a4.677 4.677 0 0 1 3.807-1.535 6.308 6.308 0 0 1 4.398 2.075 6.408 6.408 0 0 1 1.655 4.6Zm-3.807 0a3.038 3.038 0 0 0-.542-1.657 3 3 0 0 0-1.361-1.078 2.976 2.976 0 0 0-3.239.709 3.038 3.038 0 0 0-.608 3.283 3.012 3.012 0 0 0 1.109 1.34c.492.326 1.069.5 1.659.497a2.845 2.845 0 0 0 2.179-.874 2.917 2.917 0 0 0 .803-2.22Zm15.392 2.532c0 2.916-2.538 4.156-5.228 4.156a5.475 5.475 0 0 1-3.163-.673 5.533 5.533 0 0 1-2.243-2.345l3.274-1.867c.13.457.411.854.797 1.127.386.272.852.403 1.322.37.901 0 1.358-.282 1.358-.793 0-1.394-6.18-.652-6.18-5.039 0-2.762 2.31-4.143 4.924-4.143a5.474 5.474 0 0 1 2.857.657 5.53 5.53 0 0 1 2.117 2.041l-3.274 1.74a1.845 1.845 0 0 0-1.687-1.112c-.66-.001-1.054.255-1.054.702 0 1.458 6.18.499 6.18 5.18Zm13.794-8.862v12.66h-3.807v-1.19a4.334 4.334 0 0 1-1.604 1.217 4.295 4.295 0 0 1-1.975.357c-2.538 0-4.708-1.829-4.708-5.243v-7.801h3.807v7.225a2.119 2.119 0 0 0 .57 1.662 2.067 2.067 0 0 0 1.625.64c1.371 0 2.335-.818 2.335-2.558v-6.969h3.757Zm21.572 4.885v7.775h-3.807v-7.443c0-1.278-.597-2.071-1.802-2.071-1.206 0-1.967.882-1.967 2.378v7.136h-3.807v-7.443c0-1.278-.596-2.071-1.802-2.071-1.205 0-1.967.882-1.967 2.378v7.136h-3.807v-12.66h3.807v1.164a3.884 3.884 0 0 1 1.499-1.185 3.856 3.856 0 0 1 1.877-.324 3.694 3.694 0 0 1 1.861.393 3.723 3.723 0 0 1 1.425 1.27 4.143 4.143 0 0 1 1.609-1.305 4.108 4.108 0 0 1 2.033-.358c2.97 0 4.848 2.071 4.848 5.23ZM17.52 6.189V.754H.516v37.34H17.52V32.66a13.083 13.083 0 0 1-9.287-3.877 13.287 13.287 0 0 1-3.847-9.359c0-3.51 1.384-6.877 3.847-9.359A13.083 13.083 0 0 1 17.52 6.19Zm0-.001V32.66c3.484 0 6.825-1.395 9.288-3.877a13.287 13.287 0 0 0 3.846-9.359c0-3.51-1.383-6.877-3.846-9.359a13.083 13.083 0 0 0-9.288-3.877Zm144.752 9.068a2.803 2.803 0 0 0 2.792-2.814 2.803 2.803 0 0 0-2.792-2.813 2.803 2.803 0 0 0-2.792 2.813 2.803 2.803 0 0 0 2.792 2.814Z" />
              </svg>

            </Box>

            <Box
              w="100%"
              h='39px'>

              <svg xmlns="http://www.w3.org/2000/svg" width="152" height="36" fill="none" viewBox="0 0 152 36">
                <path fill="#fff" d="M44.251 10.515h3.807V25.88H44.25V10.515Zm5.317 9.564c0-3.8 2.335-6.068 5.939-6.068s5.939 2.268 5.939 6.068-2.285 6.08-5.94 6.08c-3.654 0-5.938-2.217-5.938-6.08Zm8.058 0c0-2.09-.825-3.32-2.12-3.32-1.294 0-2.106 1.268-2.106 3.32 0 2.052.8 3.293 2.107 3.293 1.307 0 2.119-1.165 2.119-3.28v-.013Zm5.254 6.549h3.654a1.965 1.965 0 0 0 2.056 1.14c1.447 0 2.208-.786 2.208-1.926v-2.128h-.076a3.6 3.6 0 0 1-3.465 2.078c-2.779 0-4.619-2.116-4.619-5.751 0-3.636 1.752-5.929 4.67-5.929a3.648 3.648 0 0 1 3.503 2.23v-2.116h3.807v11.528c0 2.774-2.45 4.496-6.066 4.496-3.363 0-5.457-1.507-5.673-3.61v-.012Zm7.93-6.562c0-1.85-.85-3.015-2.195-3.015-1.345 0-2.17 1.153-2.17 3.015s.813 2.914 2.17 2.914c1.358 0 2.196-1.027 2.196-2.901v-.013Zm5.242 0c0-3.8 2.334-6.068 5.938-6.068 3.604 0 5.952 2.268 5.952 6.068s-2.284 6.08-5.952 6.08c-3.667 0-5.938-2.204-5.938-6.067v-.013Zm8.057 0c0-2.09-.824-3.319-2.119-3.319-1.294 0-2.043 1.28-2.043 3.344 0 2.065.8 3.294 2.094 3.294 1.294 0 2.069-1.178 2.069-3.294v-.025Zm5.28-8.601a1.936 1.936 0 0 1 1.154-1.822 1.945 1.945 0 0 1 2.682 1.351 1.935 1.935 0 0 1-.784 2.01c-.315.22-.689.34-1.073.348a1.857 1.857 0 0 1-1.831-1.12 1.87 1.87 0 0 1-.149-.742v-.025Zm0 2.787h3.806V25.88h-3.807V14.252Zm17.626 5.814c0 3.8-1.688 5.966-4.581 5.966a3.633 3.633 0 0 1-3.554-2.153h-.076v5.726h-3.807V14.226h3.807v2.078h.076a3.647 3.647 0 0 1 3.528-2.242c2.919.05 4.657 2.23 4.657 6.03l-.05-.026Zm-3.807 0c0-1.85-.851-3.027-2.183-3.027-1.333 0-2.183 1.19-2.195 3.027-.013 1.837.862 3.015 2.195 3.015 1.332 0 2.183-1.153 2.183-2.99v-.025Zm10.342-6.08c3.159 0 5.076 1.494 5.164 3.889h-3.464c0-.824-.685-1.343-1.738-1.343-1.054 0-1.523.405-1.523 1 0 .596.419.786 1.269.963l2.436.494c2.323.494 3.312 1.432 3.312 3.192 0 2.407-2.195 3.953-5.431 3.953s-5.355-1.546-5.52-3.915h3.667c.115.862.8 1.368 1.917 1.368 1.116 0 1.624-.367 1.624-.975s-.355-.734-1.269-.925l-2.195-.468c-2.272-.469-3.465-1.672-3.465-3.446.026-2.28 2.069-3.762 5.216-3.762v-.025Zm18.159 11.869h-3.668v-2.166h-.076a3.315 3.315 0 0 1-3.375 2.42 4.052 4.052 0 0 1-4.04-2.67 4.031 4.031 0 0 1-.224-1.7v-7.513h3.807v6.638c0 1.38.711 2.116 1.891 2.116a1.938 1.938 0 0 0 1.861-1.375c.081-.265.104-.543.068-.817v-6.562h3.807l-.051 11.629Zm1.84-11.629h3.68v2.242h.076a3.371 3.371 0 0 1 3.312-2.457 3.03 3.03 0 0 1 3.236 2.533h.076a3.583 3.583 0 0 1 3.579-2.533 3.7 3.7 0 0 1 2.785 1.13 3.69 3.69 0 0 1 1.021 2.822v7.917h-3.806v-6.903c0-1.267-.572-1.85-1.637-1.85a1.667 1.667 0 0 0-1.259.56 1.659 1.659 0 0 0-.404 1.315v6.878h-3.616v-6.954c0-1.165-.571-1.799-1.612-1.799a1.704 1.704 0 0 0-1.623 1.191c-.071.23-.093.471-.065.71v6.852h-3.807l.064-11.654Zm-99.945-3.014a16.779 16.779 0 0 0-2.538-4.079 17.194 17.194 0 0 0-25.64-1.071A17.134 17.134 0 0 0 .649 19.268c.182 2.413.875 4.76 2.032 6.887a17.147 17.147 0 0 0 4.68 5.451 16.64 16.64 0 0 0 4.062 2.318 17.017 17.017 0 0 0 6.433 1.267 17.222 17.222 0 0 0 12.139-5.04 17.161 17.161 0 0 0 5.03-12.124 16.936 16.936 0 0 0-1.42-6.815Zm-15.76-6.878c1.981 0 3.939.432 5.735 1.266-.438.19-.898.321-1.37.393a7.276 7.276 0 0 0-4.1 2.051 7.254 7.254 0 0 0-2.055 4.093 3.797 3.797 0 0 1-1.12 2.289 3.81 3.81 0 0 1-2.319 1.067 7.276 7.276 0 0 0-4.1 2.051 7.254 7.254 0 0 0-2.054 4.093 3.683 3.683 0 0 1-1.003 2.204 13.66 13.66 0 0 1 .811-13.174A13.695 13.695 0 0 1 11.244 6a13.724 13.724 0 0 1 6.612-1.692l-.012.026ZM7.349 26.894c.152-.14.305-.266.457-.418a6.937 6.937 0 0 0 2.056-4.091 3.696 3.696 0 0 1 1.104-2.306 3.593 3.593 0 0 1 2.297-1.09 7.277 7.277 0 0 0 4.1-2.05 7.253 7.253 0 0 0 2.054-4.093 3.696 3.696 0 0 1 1.104-2.42 3.645 3.645 0 0 1 2.322-1.05 6.959 6.959 0 0 0 3.807-1.812 13.32 13.32 0 0 1 2.995 3.521 1.091 1.091 0 0 1-.165.178 3.644 3.644 0 0 1-2.297 1.114 7.251 7.251 0 0 0-4.104 2.047 7.229 7.229 0 0 0-2.05 4.097 3.797 3.797 0 0 1-1.1 2.305 3.81 3.81 0 0 1-2.314 1.09 7.31 7.31 0 0 0-4.116 2.047 7.292 7.292 0 0 0-2.076 4.096 3.974 3.974 0 0 1-.622 1.736 13.815 13.815 0 0 1-3.452-2.9Zm10.495 4.89a13.78 13.78 0 0 1-3.807-.532 7.313 7.313 0 0 0 .812-2.534 3.798 3.798 0 0 1 1.095-2.301 3.81 3.81 0 0 1 2.306-1.094 7.276 7.276 0 0 0 4.107-2.047 7.254 7.254 0 0 0 2.06-4.096 3.797 3.797 0 0 1 1.095-2.302 3.81 3.81 0 0 1 2.306-1.093 7.253 7.253 0 0 0 3.248-1.267 13.683 13.683 0 0 1-2.383 11.84 13.75 13.75 0 0 1-10.84 5.362v.064Z" />
              </svg>

            </Box>

            <Box
              w="100%"
              h='39px'>

              <svg xmlns="http://www.w3.org/2000/svg" width="149" height="31" fill="none" viewBox="0 0 149 31">
                <path fill="#fff" d="M48.081 24.696a3.36 3.36 0 0 1-2.108-.602 1.959 1.959 0 0 1-.795-1.644V10.82a.324.324 0 0 1 .22-.35.33.33 0 0 1 .146-.014h2.12c.24 0 .354.125.354.364v10.727c0 .477.215.715.657.715.187.008.374-.014.555-.063.252 0 .391.075.404.301l.19 1.569a.324.324 0 0 1-.17.352.33.33 0 0 1-.134.037c-.464.152-.95.233-1.439.238Zm11.929-1.342a5.967 5.967 0 0 1-3.787 1.353 5.967 5.967 0 0 1-3.786-1.354 5.003 5.003 0 0 1-1.462-3.531c0-1.323.525-2.592 1.462-3.532a5.993 5.993 0 0 1 7.573 0 5.078 5.078 0 0 1 1.425 3.525c0 1.314-.51 2.577-1.425 3.526v.012Zm-5.58-1.657a2.697 2.697 0 0 0 3.61 0 2.8 2.8 0 0 0 0-3.688 2.698 2.698 0 0 0-3.61 0 2.8 2.8 0 0 0 0 3.688Zm18.681-6.437c.24 0 .353.126.353.364v8.996a4.07 4.07 0 0 1-1.4 3.225 5.321 5.321 0 0 1-3.673 1.254 5.933 5.933 0 0 1-3.421-.94 3.774 3.774 0 0 1-1.654-2.51c0-.25 0-.364.341-.364h2.12a.47.47 0 0 1 .417.289c.138.38.412.698.77.89.437.225.923.337 1.414.327a2.245 2.245 0 0 0 1.628-.577 2.13 2.13 0 0 0 .593-1.569v-.79a4.246 4.246 0 0 1-2.625.815 4.923 4.923 0 0 1-3.585-1.367 5.003 5.003 0 0 1-1.418-3.488c0-1.302.508-2.552 1.418-3.488a4.94 4.94 0 0 1 3.585-1.355 4.25 4.25 0 0 1 2.688.866v-.201a.325.325 0 0 1 .21-.344.33.33 0 0 1 .144-.02l2.095-.013Zm-4.897 7.177a2.233 2.233 0 0 0 1.729-.74 3.062 3.062 0 0 0 0-3.764 2.208 2.208 0 0 0-1.717-.728 2.284 2.284 0 0 0-1.754.74 2.65 2.65 0 0 0-.682 1.882 2.7 2.7 0 0 0 .67 1.87 2.286 2.286 0 0 0 1.754.74Zm16.142.916a5.993 5.993 0 0 1-7.573 0 5.09 5.09 0 0 1-1.427-3.532 5.09 5.09 0 0 1 1.427-3.532 6.005 6.005 0 0 1 7.573 0 5.078 5.078 0 0 1 1.426 3.526c0 1.314-.51 2.577-1.425 3.525v.013Zm-5.591-1.656a2.528 2.528 0 0 0 1.817.69 2.539 2.539 0 0 0 1.806-.69 2.838 2.838 0 0 0 0-3.69 2.529 2.529 0 0 0-1.806-.69 2.539 2.539 0 0 0-1.817.69 2.838 2.838 0 0 0 0 3.69Zm11.575-8.569a1.836 1.836 0 0 1-2.41 0 1.517 1.517 0 0 1-.355-1.705c.082-.19.203-.361.354-.503a1.874 1.874 0 0 1 2.411 0 1.518 1.518 0 0 1 .479 1.104 1.512 1.512 0 0 1-.479 1.104Zm.265 11.568a3.41 3.41 0 0 1-2.108-.602 1.984 1.984 0 0 1-.782-1.644v-6.825a.325.325 0 0 1 .366-.364h2.12c.24 0 .354.125.354.364v5.922c0 .476.214.715.643.715a1.94 1.94 0 0 0 .568-.063c.253 0 .392.075.404.301l.19 1.569a.325.325 0 0 1-.303.389 4.81 4.81 0 0 1-1.452.238Zm9.555-9.736a4.973 4.973 0 0 1 3.61 1.354 5.125 5.125 0 0 1 0 7.014 4.934 4.934 0 0 1-3.61 1.367 4.36 4.36 0 0 1-2.638-.815v4.53c0 .238-.126.35-.366.35h-2.12a.306.306 0 0 1-.345-.206.298.298 0 0 1-.009-.145V18.121a.65.65 0 0 0-.443-.714.66.66 0 0 0-.301-.026h-.417c-.278 0-.416-.1-.416-.301V15.6a.4.4 0 0 1 .29-.415 3.808 3.808 0 0 1 1.363-.226 2.331 2.331 0 0 1 2.285 1.255 4.255 4.255 0 0 1 3.117-1.255Zm-1.969 6.737a2.41 2.41 0 0 0 1.742.74 2.42 2.42 0 0 0 1.742-.74 2.7 2.7 0 0 0 .694-1.92 2.666 2.666 0 0 0-.694-1.92 2.415 2.415 0 0 0-1.742-.74 2.424 2.424 0 0 0-1.742.74 2.762 2.762 0 0 0-.669 1.92 2.8 2.8 0 0 0 .67 1.92Zm12.924 2.998a6.115 6.115 0 0 1-3.244-.778 3.06 3.06 0 0 1-1.464-2.22c0-.251.089-.377.366-.377h1.856a.48.48 0 0 1 .416.276c.265.678.959 1.017 2.07 1.017.388.017.773-.06 1.124-.226a.732.732 0 0 0 .429-.615c0-.326-.202-.552-.606-.703a6.867 6.867 0 0 0-1.477-.313 14.137 14.137 0 0 1-1.767-.314 2.908 2.908 0 0 1-1.477-.84 2.661 2.661 0 0 1-.209-3.092c.193-.315.449-.586.752-.798a5.224 5.224 0 0 1 3.054-.803 5.602 5.602 0 0 1 2.979.74 2.809 2.809 0 0 1 1.389 1.97c0 .25-.114.376-.341.376h-1.868a.395.395 0 0 1-.379-.226 1.26 1.26 0 0 0-.656-.664 2.234 2.234 0 0 0-1.086-.251c-.37-.02-.739.053-1.073.213a.63.63 0 0 0-.403.577.8.8 0 0 0 .605.74c.485.182.989.308 1.502.377a16.6 16.6 0 0 1 1.755.326c.566.127 1.08.42 1.477.84a2.37 2.37 0 0 1 .618 1.72c.011.433-.091.862-.297 1.245a2.517 2.517 0 0 1-.877.938 5.54 5.54 0 0 1-3.168.865Zm17.684-.626a.355.355 0 0 1-.005.133.344.344 0 0 1-.285.255 4.9 4.9 0 0 1-1.426.239 2.818 2.818 0 0 1-2.525-1.092 4.584 4.584 0 0 1-3.218 1.092 3.936 3.936 0 0 1-2.954-1.142 4.095 4.095 0 0 1-1.123-3.024v-4.905c0-.239.113-.364.353-.364h2.121c.239 0 .353.125.353.364v4.529a2.212 2.212 0 0 0 .543 1.543 1.89 1.89 0 0 0 1.451.59 2.108 2.108 0 0 0 1.515-.552 2.01 2.01 0 0 0 .568-1.493v-4.617c0-.239.113-.364.353-.364h2.146c.24 0 .353.125.353.364v5.91c0 .488.215.727.632.727a2 2 0 0 0 .58-.063.332.332 0 0 1 .378.16.317.317 0 0 1 .039.141l.151 1.569Zm20.056 0a.318.318 0 0 1-.053.262.315.315 0 0 1-.237.127 4.928 4.928 0 0 1-1.452.238 3.387 3.387 0 0 1-2.108-.602 1.952 1.952 0 0 1-.845-1.644v-2.948a2.212 2.212 0 0 0-.531-1.544 1.786 1.786 0 0 0-1.413-.59 1.583 1.583 0 0 0-1.262.553c-.334.42-.504.946-.48 1.48v4.63c0 .238-.114.364-.353.364h-2.134a.332.332 0 0 1-.272-.093.327.327 0 0 1-.094-.271v-4.53a2.31 2.31 0 0 0-.492-1.543 1.642 1.642 0 0 0-1.262-.59 1.844 1.844 0 0 0-1.388.553 2.065 2.065 0 0 0-.518 1.48v4.63a.33.33 0 0 1-.094.27.327.327 0 0 1-.272.094h-2.057c-.24 0-.354-.126-.354-.364v-5.91a.65.65 0 0 0-.443-.714.657.657 0 0 0-.301-.026h-.417c-.278 0-.417-.1-.417-.3V15.6a.402.402 0 0 1 .291-.414 3.803 3.803 0 0 1 1.363-.226 2.386 2.386 0 0 1 2.247 1.154 4.288 4.288 0 0 1 3.206-1.154 3.64 3.64 0 0 1 2.991 1.33 4.167 4.167 0 0 1 3.307-1.33 4.01 4.01 0 0 1 2.991 1.142 4.078 4.078 0 0 1 1.124 3.023v2.422c0 .476.214.715.618.715.196.009.392-.012.581-.063.261 0 .399.1.416.301l.114 1.569ZM.85 13.63a17.168 17.168 0 0 1 6.127-9.386A17.346 17.346 0 0 1 17.62.601c3.857 0 7.603 1.282 10.641 3.643a17.168 17.168 0 0 1 6.127 9.386h-1.515a12.283 12.283 0 0 0-7.156 2.17 3.615 3.615 0 0 1-.379.239h-.177a3.606 3.606 0 0 1-.378-.239 12.89 12.89 0 0 0-7.163-2.17 12.89 12.89 0 0 0-7.163 2.17 3.616 3.616 0 0 1-.379.239H9.9a3.612 3.612 0 0 1-.378-.239 12.283 12.283 0 0 0-7.157-2.17H.851Zm29.296 7.867a4.27 4.27 0 0 1 2.726-.891h2.032v-4.028h-2.032a8.085 8.085 0 0 0-4.834 1.531 4.613 4.613 0 0 1-5.453 0 8.619 8.619 0 0 0-9.807 0 4.613 4.613 0 0 1-5.452 0 8.086 8.086 0 0 0-4.898-1.53H.333v4.027h2.032a4.27 4.27 0 0 1 2.726.89 8.593 8.593 0 0 0 9.795 0 4.295 4.295 0 0 1 2.726-.89 4.245 4.245 0 0 1 2.727.89 8.619 8.619 0 0 0 9.807 0Zm0 7.201a4.27 4.27 0 0 1 2.726-.89h2.032V23.78h-2.032a8.085 8.085 0 0 0-4.834 1.53 4.613 4.613 0 0 1-5.453 0 8.618 8.618 0 0 0-9.807 0 4.613 4.613 0 0 1-5.452 0 8.086 8.086 0 0 0-4.898-1.53H.333v4.028h2.032a4.27 4.27 0 0 1 2.726.89 8.593 8.593 0 0 0 9.795 0 4.295 4.295 0 0 1 2.726-.89 4.245 4.245 0 0 1 2.727.89 8.619 8.619 0 0 0 9.807 0Z" />
              </svg>

            </Box>

            <Box
              w="100%"
              h='39px'>

              <svg xmlns="http://www.w3.org/2000/svg" width="162" height="38" fill="none" viewBox="0 0 162 38">
                <path fill="#fff" d="M46.456 11.756h4.073v16.468h-4.073V11.756Zm5.698 10.273c0-4.078 2.538-6.523 6.345-6.523s6.345 2.445 6.345 6.523c0 4.08-2.45 6.55-6.345 6.55-3.896 0-6.345-2.382-6.345-6.55Zm8.654 0c0-2.242-.875-3.559-2.271-3.559s-2.26 1.267-2.26 3.56c0 2.292.864 3.546 2.26 3.546s2.297-1.254 2.297-3.534l-.026-.013Zm5.66 7.044h3.934a2.104 2.104 0 0 0 2.208 1.266c1.56 0 2.373-.836 2.373-2.077v-2.28h.012a3.891 3.891 0 0 1-3.807 2.216c-2.982 0-4.961-2.267-4.961-6.169 0-3.901 1.89-6.333 5.076-6.333a3.9 3.9 0 0 1 3.806 2.394h-.114v-2.293h4.036v12.338c0 2.977-2.64 4.839-6.523 4.839-3.528-.013-5.786-1.621-6.015-3.889l-.025-.012Zm8.527-7.044c0-1.988-.913-3.242-2.36-3.242-1.447 0-2.335 1.266-2.335 3.242 0 1.977.876 3.142 2.335 3.142 1.46 0 2.36-1.077 2.36-3.142Zm5.647 0c0-4.078 2.538-6.523 6.345-6.523s6.345 2.445 6.345 6.523c0 4.08-2.462 6.55-6.345 6.55-3.883 0-6.32-2.382-6.32-6.55h-.025Zm8.655 0c0-2.242-.889-3.559-2.272-3.559-1.383 0-2.259 1.267-2.259 3.56 0 2.292.863 3.546 2.26 3.546 1.395 0 2.296-1.254 2.296-3.534l-.025-.013Zm5.685-9.234a2.075 2.075 0 0 1 1.22-1.981 2.085 2.085 0 0 1 2.298.392 2.076 2.076 0 0 1-1.437 3.578 2.008 2.008 0 0 1-1.891-1.206 1.998 1.998 0 0 1-.165-.77l-.025-.013Zm0 2.99h4.124v12.49h-4.06l-.064-12.49Zm18.958 6.244c0 4.067-1.827 6.423-4.936 6.423a3.902 3.902 0 0 1-3.807-2.318h-.076v6.156h-4.074V15.822h4.048v2.23h.077a3.925 3.925 0 0 1 3.806-2.407c3.198-.025 5.038 2.318 5.038 6.397l-.076-.013Zm-4.149 0c0-1.976-.927-3.255-2.361-3.255-1.434 0-2.335 1.267-2.347 3.255-.013 1.99.913 3.243 2.347 3.243s2.437-1.178 2.437-3.23l-.076-.013Zm11.103-6.536c3.414 0 5.533 1.609 5.558 4.193h-3.718c0-.9-.748-1.457-1.865-1.457s-1.65.431-1.65 1.077c0 .646.47.849 1.409 1.039l2.614.532c2.538.532 3.553 1.545 3.553 3.433 0 2.533-2.348 4.256-5.837 4.256-3.49 0-5.762-1.672-5.926-4.218h3.946c.114.924.85 1.469 2.043 1.469s1.751-.38 1.751-1.051c0-.672-.38-.786-1.358-.988l-2.36-.494c-2.449-.52-3.731-1.8-3.731-3.712.077-2.483 2.208-4.066 5.647-4.066l-.076-.013Zm19.542 12.769h-3.946v-2.344h-.076a3.572 3.572 0 0 1-3.642 2.597 4.358 4.358 0 0 1-3.295-1.348 4.34 4.34 0 0 1-1.185-3.351v-8.019h4.074v7.145c0 1.469.774 2.267 2.043 2.267a2.081 2.081 0 0 0 2.043-2.381v-7.03h4.061l-.077 12.464Zm1.967-12.478h3.96v2.407h.088a3.626 3.626 0 0 1 3.566-2.634 3.253 3.253 0 0 1 2.252.652 3.24 3.24 0 0 1 1.225 1.995h.178a3.81 3.81 0 0 1 3.807-2.647 3.962 3.962 0 0 1 3.874 2.607c.19.524.266 1.081.225 1.636v8.474h-4.099V20.84c0-1.267-.597-1.976-1.751-1.976a1.777 1.777 0 0 0-1.79 2.014v7.397h-3.883v-7.473c0-1.267-.622-1.938-1.738-1.938a1.82 1.82 0 0 0-1.371.608 1.803 1.803 0 0 0-.444 1.431v7.372h-4.073l-.026-12.49ZM38.399 12.832a12.5 12.5 0 0 0-2.189-7.064 12.534 12.534 0 0 0-5.8-4.6 12.558 12.558 0 0 0-13.787 3.203H.786v33.365h33.438V22.143a12.504 12.504 0 0 0 4.175-9.31Zm-6.434 0a6.098 6.098 0 0 1-1.025 3.396 6.114 6.114 0 0 1-6.277 2.607 6.12 6.12 0 0 1-3.135-1.668 6.102 6.102 0 0 1-1.332-6.656 6.124 6.124 0 0 1 9.973-1.988 6.1 6.1 0 0 1 1.796 4.31ZM27.79 31.314H7.22V10.793h6.269a12.077 12.077 0 0 0-.19 2.04 12.53 12.53 0 0 0 3.679 8.854 12.574 12.574 0 0 0 8.87 3.673c.65-.003 1.3-.058 1.942-.164v6.118Z" />
              </svg>

            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}