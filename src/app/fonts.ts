import { Lato, Roboto_Slab } from 'next/font/google';
 
export const bodyFont = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "300", "400", "700", "900"],
  variable: '--body-font'
});

export const HeadingFont = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "300", "400", "700", "900"],
  variable: '--heading-font'
});
 