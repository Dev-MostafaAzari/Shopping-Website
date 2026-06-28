import localFont from "next/font/local";

export const iranSansX = localFont({
  src: [
    {
      path: "../app/font/IRANSansX-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/font/IRANSansX-Regular.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});