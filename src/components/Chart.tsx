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

const Chart: FC<{checkedPrefectures: Prefecture[], hoge:boolean, name:string}> = ({checkedPrefectures, hoge, name}) => {
  console.log(typeof checkedPrefectures);
  console.log(typeof hoge);
  console.log(typeof name);
  const [populations, setPopulations] = useState<Population[]>([]);

  useEffect(()=>{
    console.log(checkedPrefectures[0].prefCode);
    const param = {
      prefCode: checkedPrefectures[0].prefCode
    }
    async function fetchData() {
      const response = await fetchPopulations(param);
      const result = response.result.data[0].data;
      setPopulations(result);
    }
    fetchData();
  }, []);
  console.log(populations);


  return(
    <>
      <LineChart
        width={700}
        height={300}
        data={populations}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>
    </>
  );
};

export default Chart;
