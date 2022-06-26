import {
  chakra,
  Text
} from "@chakra-ui/react";

export const LinkNavbar = chakra(Text, {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#14142B",
    cursor: "pointer",
  },
});

export const Caption = chakra(Text, {
  baseStyle: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#503AE7"
  }
})

export const SeeMore = chakra(Text, {
  baseStyle: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#503AE7"
  }
})

export const BodyText = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "12px", sm: "14px", md: "15px", lg: "14px", xl: "15px" },
    fontWeight: "400",
    lineHeight: { base: "24px", sm: "24px", md: "24px", lg: "24px", xl: "24px" },
    letterSpacing: "0px",
    textAlign: { base: "center", sm: "center", md: "center", lg: "left", xl: "left" }
  },
});

export const Heading1 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "26px", sm: "38px", md: "40px", lg: "44px", xl: "48px" },
    fontWeight: "700",
    lineHeight: { base: "43px", sm: "46px", md: "48px", lg: "50px", xl: "53px" },
    letterSpacing: "0px",
    textAlign: { base: "center", sm: "center", md: "center", lg: "left", xl: "left" }
  },
});

export const Heading2 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "20px", sm: "26px", md: "30px", lg: "32px", xl: "32px" },
    fontWeight: "700",
    lineHeight: { base: "32px", sm: "32px", md: "32px", lg: "32px", xl: "32px" },
    letterSpacing: "0px",
    textAlign: { base: "center", sm: "center", md: "center", lg: "left", xl: "left" }
  },
});

export const Heading3 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "19px", sm: "20px", md: "20px", lg: "21px", xl: "21px" },
    fontWeight: "600",
    lineHeight: { base: "30px", sm: "30px", md: "30px", lg: "30px", xl: "30px" },
    letterSpacing: "0px"
  },
});

export const Heading4 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "20px" },
    fontWeight: "600",
    lineHeight: { base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "20px" },
    letterSpacing: "0px",
    textAlign: { base: "center", sm: "center", md: "center", lg: "left", xl: "left" }
  },
});

export const Heading5 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "16px", sm: "16px", md: "16px", lg: "16px", xl: "16px" },
    fontWeight: "600",
    lineHeight: { base: "24px", sm: "24px", md: "24px", lg: "24px", xl: "24px" },
    letterSpacing: "0px",
    textAlign: { base: "center", sm: "center", md: "center", lg: "left", xl: "left" }
  },
});

export const Heading6 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontSize: { base: "12px", sm: "12px", md: "12px", lg: "12px", xl: "12px" },
    fontWeight: "600",
    lineHeight: { base: "18px", sm: "18px", md: "18px", lg: "18px", xl: "18px" },
    letterSpacing: "0px",
    textAlign: { base: "center", sm: "center", md: "center", lg: "left", xl: "left" }
  },
});
