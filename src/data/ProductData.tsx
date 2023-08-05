import axios from 'axios';
import { useEffect, useState } from 'react';

interface apiobject {
  id: number;
  image: string;
  description: string;
  price: number;
  title: string;
  category: string[];
}

export const useApiData = ()=> {
  const [apidata, setApiData] = useState<apiobject[]>([]);
  const [fullapidata, setFullApiData] = useState<apiobject[]>([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) =>  setApiData(res.data as apiobject[]))
      .catch((err) => console.log(err))
  }, []);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=8')
      .then((res) =>  setFullApiData(res.data as apiobject[]))
      .catch((err) => console.log(err))
  }, []);

  return {apidata,fullapidata};
};
