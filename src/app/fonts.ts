import { Lato } from 'next/font/google';
 
export const bodyFont = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "300", "400", "700", "900"],
  variable: '--body-font'
});
 