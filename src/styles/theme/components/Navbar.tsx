import { Link } from "react-router-dom";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure
} from "@chakra-ui/react";

import {
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  X
} from "phosphor-react";

import { LinkNavbar } from "../styles";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex
        w="100%"
        h="72px"
        alignItems="center"
        justifyContent="center">

        <Flex
          maxW="90%"
          w="1280px"
          h="100%"
          alignItems="center"
          justifyContent="space-between">

          <Link to="/">
            <Box
              w="141px"
              h="40px"
              cursor="pointer"
              display={{
                base: "none",
                sm: "flex"
              }}>

              <svg xmlns="http://www.w3.org/2000/svg" width="142" height="40" fill="none" viewBox="0 0 142 40">
                <path fill="#14142B" d="M134.673 7.389v7.728h2.683v3.737h-2.683v6.964c0 .68.167 1.19.503 1.529.335.34.838.51 1.509.51h1.929v4.416h-3.355c-1.341 0-3.018-.255-4.192-1.359-1.174-1.104-1.677-2.548-1.677-4.586v-7.559h-2.432v-3.737h2.432V7.39h5.283Zm-15.681 25.224c-2.432 0-4.529-.85-5.954-2.378-1.509-1.53-2.18-3.567-2.18-5.945v-.595c0-2.633.671-4.756 2.012-6.454 1.342-1.614 3.271-2.463 5.786-2.463 2.265 0 4.109.679 5.367 2.038 1.342 1.444 1.929 3.312 1.929 5.69v2.803h-9.643v.085c.083.934.503 1.529 1.09 2.123.586.595 1.425.85 2.347.85 1.007 0 1.761-.086 2.349-.256.586-.17 1.425-.424 2.263-.849l1.258 3.312c-.755.595-1.677 1.02-2.851 1.444-1.173.425-2.515.595-3.773.595Zm-.419-13.759c-.755 0-1.342.255-1.678.85-.335.594-.586 1.358-.671 2.208l.085.085h4.528v-.425c0-.934-.168-1.529-.503-1.953-.503-.595-1.007-.765-1.761-.765Zm-17.274 13.759c-2.432 0-4.529-.85-5.954-2.378-1.425-1.53-2.18-3.567-2.18-5.945v-.595c0-2.633.67-4.756 2.012-6.454 1.342-1.614 3.27-2.463 5.786-2.463 2.264 0 4.109.679 5.367 2.038 1.257 1.359 1.928 3.312 1.928 5.69v2.803h-9.643v.085c.084.934.503 1.529 1.09 2.123.587.595 1.426.85 2.348.85 1.007 0 1.761-.086 2.348-.256s1.425-.424 2.264-.849l1.258 3.312c-.755.595-1.677 1.02-2.851 1.444-1.09.425-2.432.595-3.773.595Zm-.336-13.759c-.755 0-1.342.255-1.677.85-.336.594-.587 1.358-.67 2.208l.083.085h4.528v-.425c0-.934-.167-1.529-.503-1.953-.503-.595-1.006-.765-1.761-.765Zm-15.68 6.115 1.844-10.022h4.78l-3.858 17.241h-4.444l-2.767-9.172h-.084l-2.767 9.172h-4.444l-3.941-17.156h4.863L76.31 25.14h.083l2.684-10.107h3.354l2.852 9.937ZM63.06 27.347c0-.425-.252-.85-.755-1.189-.503-.34-1.341-.68-2.6-.934-1.928-.425-3.438-1.02-4.444-1.784-1.006-.849-1.51-1.953-1.51-3.397 0-1.528.672-2.802 1.846-3.906 1.258-1.105 2.935-1.53 5.03-1.53 2.181 0 4.026.51 5.284 1.53 1.341 1.019 1.929 2.293 1.844 3.991v.085h-5.03c0-.68-.168-1.189-.504-1.529-.335-.34-.922-.51-1.593-.51-.587 0-1.006.17-1.425.51-.42.34-.588.68-.588 1.19 0 .509.252.849.671 1.188.42.34 1.342.595 2.6.85 2.012.424 3.605 1.019 4.528 1.783 1.006.85 1.51 1.953 1.51 3.482 0 1.529-.672 2.803-2.013 3.822-1.342 1.02-3.103 1.529-5.283 1.529-2.264 0-4.109-.595-5.45-1.784-1.342-1.189-1.93-2.463-1.845-3.991v-.085h4.78c0 .849.25 1.444.754 1.698.503.255 1.174.595 1.929.595.754 0 1.258-.17 1.593-.425.503-.255.67-.68.67-1.189Zm-22.809-12.4.168 2.379c.587-.85 1.258-1.53 2.013-1.954.838-.51 1.677-.764 2.683-.764 1.593 0 2.935.594 3.857 1.613.923 1.02 1.426 2.803 1.426 5.181v10.786h-5.115V21.487c0-1.02-.168-1.614-.587-2.038-.42-.425-1.007-.595-1.761-.595-.503 0-.923.085-1.342.255a2.29 2.29 0 0 0-1.006.764v12.4h-5.2v-17.24h4.864v-.085Zm-8.05-3.227H26.92V7.39h5.283v4.331Zm0 20.553H26.92v-17.24h5.283v17.24Zm-16.854 0V18.684h-2.432v-3.737h2.431v-1.783c0-1.953.588-3.482 1.678-4.586 1.174-1.104 2.934-1.359 4.192-1.359h3.355v4.331h-1.93c-.67 0-1.173.17-1.508.51-.336.34-.504.85-.504 1.529v1.274h3.27v3.736h-3.27v13.504h-5.282v.17ZM5.284 8.833c0-5.181 2.683-5.606 7.211-5.606v4.077c-2.096 0-2.934.34-2.934 1.614v6.709c0 1.529.083 3.142-1.174 4.161 1.257 1.02 1.174 2.548 1.174 4.162v6.71c0 1.358.838 1.613 2.934 1.613v4.076c-4.528 0-7.211-.424-7.211-5.605V23.95c0-1.104 0-2.293-2.096-2.293V18.09c2.096 0 2.096-1.274 2.096-2.293V8.833Z" />
              </svg>

            </Box>
          </Link>

          <Flex
            maxW="90%"
            w="578px"
            h="100%"
            alignItems="center"
            justifyContent={{
              base: "flex-end",
              md: "flex-end",
              lg: "space-between"
            }}>

            <Box
              maxW="90%"
              w="439px"
              h="100%"
              display={{
                base: "none",
                md: "none",
                lg: "flex"
              }}
              alignItems="center"
              justifyContent="space-between">

              <Link to="/podcasts">
                <LinkNavbar
                  w="70px"
                  h="28px">

                  Podcasts
                </LinkNavbar>
              </Link>

              <Link to="/host">
                <LinkNavbar
                  w="36px"
                  h="28px">

                  Host
                </LinkNavbar>
              </Link>

              <Link to="/about">
                <LinkNavbar
                  w="46px"
                  h="28px">

                  About
                </LinkNavbar>
              </Link>

              <Link to="/blog">
                <LinkNavbar
                  w="34px"
                  h="28px">

                  Blog
                </LinkNavbar>
              </Link>

              <Link to="/contact">
                <LinkNavbar
                  w="61px"
                  h="28px">

                  Contact
                </LinkNavbar>
              </Link>
            </Box>

            <Box
              maxW="90%"
              w="107px"
              h="26px"
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex"
              }}
              alignItems="center"
              justifyContent="space-between">

              <FacebookLogo size={25} />
              <LinkedinLogo size={25} />
              <InstagramLogo size={25} />
            </Box>

            <Box
              w="36px"
              h="36px"
              display={{
                base: "flex",
                sm: "flex",
                md: "flex",
                lg: "none",
                xl: "none"
              }}
              alignItems="center"
              justifyContent="center"
              cursor="pointer">

              <List
                size={25}
                onClick={onOpen} />

              <Drawer
                onClose={onClose}
                isOpen={isOpen}>

                <DrawerOverlay
                  display={{
                    base: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "none",
                    xl: "none"
                  }}
                />
                <DrawerContent
                  bg="#FFF"
                  display={{
                    base: "flex",
                    sm: "flex",
                    md: "flex",
                    lg: "none",
                    xl: "none"
                  }}>

                  <DrawerHeader borderColor="#F4F2FF" borderBottomWidth='1px'>
                    <X
                      color="#14142B"
                      cursor="pointer"
                      size={25}
                      onClick={onClose} />
                  </DrawerHeader>

                  <DrawerBody>

                    <Flex
                      cursor="pointer"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                      maxW="99%">

                      <Link to="/">
                        <LinkNavbar>
                          Home
                        </LinkNavbar>
                      </Link>

                      <Link to="/">
                        <CaretRight
                          color="#14142B"
                          size={20} />
                      </Link>
                    </Flex>

                    <Flex
                      cursor="pointer"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                      maxW="99%">

                      <Link to="/podcasts">
                        <LinkNavbar>
                          Podcast
                        </LinkNavbar>
                      </Link>

                      <Link to="/podcasts">
                        <CaretRight
                          color="#14142B"
                          size={20} />
                      </Link>
                    </Flex>

                    <Flex
                      cursor="pointer"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                      maxW="99%">

                      <Link to="/host">
                        <LinkNavbar>
                          Host
                        </LinkNavbar>
                      </Link>

                      <Link to="/host">
                        <CaretRight
                          color="#14142B"
                          size={20} />
                      </Link>
                    </Flex>

                    <Flex
                      cursor="pointer"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                      maxW="99%">

                      <Link to="/about">
                        <LinkNavbar>
                          About
                        </LinkNavbar>
                      </Link>

                      <Link to="/about">
                        <CaretRight
                          color="#14142B"
                          size={20} />
                      </Link>
                    </Flex>

                    <Flex
                      cursor="pointer"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                      maxW="99%">

                      <Link to="/blog">
                        <LinkNavbar>
                          Blog
                        </LinkNavbar>
                      </Link>

                      <Link to="/blog">
                        <CaretRight
                          color="#14142B"
                          size={20} />
                      </Link>
                    </Flex>

                    <Flex
                      cursor="pointer"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                      maxW="99%">

                      <Link to="/contact">
                        <LinkNavbar>
                          Contact
                        </LinkNavbar>
                      </Link>

                      <Link to="/contact">
                        <CaretRight
                          color="#14142B"
                          size={20} />
                      </Link>
                    </Flex>

                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
