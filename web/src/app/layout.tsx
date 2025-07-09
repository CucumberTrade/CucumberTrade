import './globals.css';
import { Rubik } from 'next/font/google';

// —— ① Load the font and expose it as a CSS variable
const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata = {
  title: 'Cucumber Trade',
  description: 'Automate your trading with our cucumber-powered strategy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // —— ② Attach variable to <html> so every page inherits it
  return (
    <html lang="en" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}