import styled from '@emotion/styled';
import type { CoffeeData } from '../types/Coffee';

interface CoffeeProps {
  coffeeData: CoffeeData
}

export const Coffee = ({ coffeeData }: CoffeeProps): JSX.Element => {
  const { id, title, description, ingredients } = coffeeData;

  return (
    <Container key={`coffee-${id}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {ingredients.map((ingrendent: string, index: number) => {
          return (
            <Badge key={`coffee-${id}-ingredients-${index}`}>{ingrendent}</Badge>
          )
        })}
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 1em;
`

const Badge = styled.div`
  display: inline-block;
  padding: 0.4em 0.75em 0.5em;
  color: white;
  background: #333;
  text-align: center;
  border-radius: 0.5em;

  & + & {
    margin-left: 0.5em;
  }
`