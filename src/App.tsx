import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';


import Checkbox from './components/Checkbox';
import Chart from './components/Chart';


const queryClient = new QueryClient();


type Prefecture = {
  prefCode: number,
  prefName: string,
  isCheck: boolean
}


function App() {

  // const checkedPrefectures: Prefecture[] = [
  //   {prefCode: 11,
  //     prefName: '滋賀県',
  //     isCheck: true},
  //   {prefCode: 12,
  //     prefName: '東京都',
  //     isCheck: true}
  // ];
  const [checkedPrefectures, setCheckedPrefectures] =  useState<Prefecture[]>([]);
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Checkbox checkedPrefectures={checkedPrefectures} setCheckedPrefectures={setCheckedPrefectures} />
      </QueryClientProvider>

      <Chart checkedPrefectures={checkedPrefectures} />
    </>
  );
}

export default App;
