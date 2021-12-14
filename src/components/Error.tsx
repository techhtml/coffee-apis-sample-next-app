import styled from '@emotion/styled'
import Link from 'next/link'

interface ErrorProps {
  error: object,
}

export const Error = ({ error }: ErrorProps):JSX.Element => {
  return (
    <ErrorContainer>
      <ErrorParagraph>
        <div>{ error.toString() }</div>
        <Link href="/"><ErrorButton>홈으로 가기</ErrorButton></Link>
      </ErrorParagraph>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
`

const ErrorParagraph = styled.p`
  padding: 2em 5em;
  box-shadow: 1px 1px 1px rgb(0 0 0 / 20%);
  text-align: center;
  max-width: 70vw;
  background: white;
`

const ErrorButton = styled.a`
  display: inline-block;
  padding: 0.3em 1em;
  margin: 1em 0 0;
  background: #2ac1bc;
  color: white;
  border: 0;
  opacity: 0.7;
  cursor: pointer;
  transition: .3s opacity;

  &:hover {
    opacity: 1;
  }
`