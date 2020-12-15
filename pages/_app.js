import useDarkMode from 'components/util/useDarkMode'
import 'styles/index.css'

function MyApp({ Component, pageProps }) {
  useDarkMode()

  return <Component {...pageProps} />
}

export default MyApp
