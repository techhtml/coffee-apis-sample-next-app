import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from '@emotion/styled'
import { Nav } from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Nav />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp

const Container = styled.div`
  max-width: 1080px;
  margin: auto;
  padding-top: 50px;
`