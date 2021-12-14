import styled from '@emotion/styled';
import type { NextPage } from 'next';
import type { CoffeeData } from '../../types/Coffee';
import { useCoffeeData } from '../../hooks/useCoffeeData';
import { Loading, Error, Coffee } from '../../components';

const HotCoffeePage: NextPage = () => {
  const { data, error } = useCoffeeData('hot');

  if(error) return <Error error={error} />
  if(!data) return <Loading />

  return (
    <div>
      <h1>Hot</h1>
      <CoffeeContainer>
        {data.map((coffeeData: CoffeeData) => {
          return (
            <Coffee key={`coffee-${coffeeData.id}`} coffeeData={coffeeData} />
          )
        })}
      </CoffeeContainer>
    </div>
  )
}

export default HotCoffeePage;

const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
`