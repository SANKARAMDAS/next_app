import Link from "next/link";
import NavBar from './nav-bar'
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <NavBar />
      <div>{children}</div>
      </body>
    </html>
  )
}
