//import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { fetchPopulations } from '../api/index';
import { FC, useEffect, useState } from 'react';

type Population = {
  year: number,
  value: number
}

type Prefecture = {
  prefCode: number,
  prefName: string,
  isCheck: boolean
}

const Chart: FC<{checkedPrefectures: Prefecture[]}> = ({checkedPrefectures}) => {

  const [populations, setPopulations] = useState<Population[]>([]);

  useEffect(()=>{

    async function fetchData() {
      const promisses =  checkedPrefectures.map(
        async (checkedPrefecture: Prefecture)=>{
          const param = {
            prefCode: checkedPrefecture.prefCode
          }
          const response = await fetchPopulations(param);
          const result = response.result.data[0].data;
          return result;
      });
      const results: Population[] = await Promise.all(promisses);
      setPopulations(results);
    }
    fetchData();
  }, []);

  console.log(populations);


  return(
    <>
      <LineChart
        width={700}
        height={300}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="value"/>
        <Tooltip />
        <Legend />
        {populations.map((population, index) => (
          <Line type="monotone" key={`population-${index}`} dataKey="value" data={population} name={`population-${index}`} stroke="#82ca9d" activeDot={{ r: 8 }} />
        ))}
      </LineChart>
    </>
  );
};

export default Chart;
