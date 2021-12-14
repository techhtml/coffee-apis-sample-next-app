import type { NextPage } from 'next';
import type { CoffeeData } from '../../types/Coffee';
import { useCoffeeData } from '../../hooks/useCoffeeData';
import { Loading, Error } from '../../components';
import { Coffee } from '../../components/Coffee';

const HotCoffeePage: NextPage = () => {
  const { data, error } = useCoffeeData('hot');

  if(error) return <Error error={error} />
  if(!data) return <Loading />

  return (
    <div>
      <h1>Hot</h1>
      {data.map((coffeeData: CoffeeData) => {
        return (
          <Coffee key={`coffee-${coffeeData.id}`} coffeeData={coffeeData} />
        )
      })}
    </div>
  )
}

export default HotCoffeePage;