
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps}/>
      <Footer />
      <style jsx> {"@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&display=swap');"} 
      </style>
    </>
  );
}

export default MyApp
