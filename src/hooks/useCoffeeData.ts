import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

const API_PATH = 'https://api.sampleapis.com/coffee/';

export const useCoffeeData = (path: string = 'hot') => {
  return useSWR(`${API_PATH}${path}`, fetcher);
};