import type { CoffeeData } from '../types/Coffee';

interface CoffeeProps {
  coffeeData: CoffeeData
}

export const Coffee = ({ coffeeData }: CoffeeProps): JSX.Element => {
  const { id, title, description, ingredients } = coffeeData;
  
  return (
    <div key={`coffee-${id}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        {ingredients.map((ingrendent: string, index: number) => {
          return (
            <div key={`coffee-${id}-ingredients-${index}`}>{ingrendent}</div>
          )
        })}
      </div>
    </div>
  )
}