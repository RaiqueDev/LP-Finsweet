import {
  chakra,
  Text,
  Button,
  extendTheme
} from "@chakra-ui/react";

/* TEXT STYLES */

export const LinkNavbar = chakra(Text, {
  baseStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#14142B",
    cursor: "pointer",
  },
});

/* Heading 1 */

export const Heading1 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    lineHeight: "110%",
    color: "#000000"
  },
});

/* Heading 2 */

export const Heading2 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "120%",
    color: "#000000"
  },
});

/* Heading 3 */

export const Heading3 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "125%",
    color: "#000000"
  },
});

/* Heading 4 */

export const Heading4 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "140%",
    color: "#000000"
  },
});

/* Heading 5 */

export const Heading5 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#000000"
  },
});

/* Heading 6 */

export const Heading6 = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "150%",
    color: "#000000"
  },
});

/* Body */

export const Body = chakra(Text, {
  baseStyle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#000000"
  },
});

/* SeeMore */

export const SeeMore = chakra(Text, {
  baseStyle: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#000000"
  }
})

/* Caption */

export const Caption = chakra(Text, {
  baseStyle: {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#000000"
  }
})

/* COLOR STYLES */

export const theme = extendTheme({
  colors: {
    green: "#1AD993",
    aquamarine: "#ABFFE0",
    blue: "#503AE7",
    purple: "#832BC1",
    black: "#14142B",
    gray: "#AFB0B9",
    offWhite: "#F4F2FF",
  },
})

/* PRIMARY BUTTON */

export const PrimaryButton = chakra(Button, {
  baseStyle: {
    background: "#503AE7",
    _hover: {
      bg: '#3E2DB2'
    },
    rounded: "none",
    padding: "12px 32px",

    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",

    color: "#FFFFFF"
  }
})

export const SecondaryButton = chakra(Button, {
  baseStyle: {
    _hover: {
      border: "2px solid #1AD993",
      color: "#1AD993"
    },
    rounded: "none",
    padding: "12px 32px",
    border: "2px solid #F4F2FF",

    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",

    color: "#FFFFFF"
  }
})

export const ListenNow = chakra(Button, {
  baseStyle: {
    _hover: {
      color: '#3E2DB2'
    },
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "150%",
    color: "#503AE7",
    cursor: "pointer"
  }
})
