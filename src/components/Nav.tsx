import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"

export const Nav = () => {
  const router = useRouter();
  
  return (
    <Container>
      <Wrapper>
        <Link href="/coffee/hot">
          <Menu active={router.asPath === '/coffee/hot' ? true : false}>Hot</Menu>
        </Link>
        <Link href="/coffee/iced">
          <Menu active={router.asPath === '/coffee/iced' ? true : false}>Iced</Menu>
        </Link>
      </Wrapper>
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid #eee;
  z-index:100;
`

const Wrapper = styled.div`
  max-width: 1080px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
`

interface MenuProps {
  active?: boolean
}
const Menu = styled.a<MenuProps>`
  padding: 1em;
  cursor: pointer;
  ${props => props.active && `
    color: #2ac1bc;
  `}
`