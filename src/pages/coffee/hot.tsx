import type { NextPage } from 'next';
import type { CoffeeData } from '../../types/Coffee';
import { useCoffeeData } from '../../hooks/useCoffeeData';
import { Loading, Error } from '../../components';

const HotCoffeePage: NextPage = () => {
  const { data, error } = useCoffeeData('hotasdasd');

  if(error) return <Error error={error} />
  if(!data) return <Loading />

  return (
    <div>
      <h1>Hot</h1>
      {data.map((coffeeData: CoffeeData) => {
        const { id, description, ingredients, title } = coffeeData;
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
      })}
    </div>
  )
}

export default HotCoffeePage;