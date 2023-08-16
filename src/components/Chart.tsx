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
import { useEffect, useState } from 'react';

type Population = {
  year: number,
  value: number
}


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {

  const [populations, setPopulations] = useState<Population[]>([]);

  useEffect(()=>{
    const param = {
      prefCode: 11
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
