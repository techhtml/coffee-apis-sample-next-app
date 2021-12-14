import type { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import type { CoffeeData } from '../../types/Coffee';

const HotCoffeePage: NextPage = () => {
  const { data, error } = useSWR('https://api.sampleapis.com/coffee/hot', fetcher);

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading...</div>

  return (
    <div>
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