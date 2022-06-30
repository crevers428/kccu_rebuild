import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'

import { useRouter } from 'next/router'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

function MyApp({ Component, 
  pageProps : {session, ...pageProps} 
}) {
  const router = useRouter();

  // show header or not
  const showHeader = router.pathname === "/aboutus" ? false : true

  return (
    <SessionProvider session={session}>
    {showHeader &&
      <Navbar />
    }
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
