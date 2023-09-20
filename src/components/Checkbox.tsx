import { FC, Dispatch, useEffect, useState } from 'react';
import {fetchPrefectures} from '../api/index';
//import { useQuery} from "react-query";

type Prefecture = {
  prefCode: number,
  prefName: string,
  isCheck: boolean
}

const Checkbox: FC<{checkedPrefectures: Prefecture[], setCheckedPrefectures: Dispatch<React.SetStateAction<Prefecture[]>>}> = (checkedPrefectures, setCheckedPrefectures) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  // let allPrefectures = [];
  useEffect(() => {
    async function fetchData() {
      const resp = await fetchPrefectures();
      setPrefectures(resp.result);
      //const allPrefectures = [...resp.result];
      return resp;
    }
    fetchData();
  }, []);
  
  const handleChange = (e) => {
    const targetPrefKey: number = e.target.key;
    if(e.target.cheked) {
      setCheckedPrefectures([...checkedPrefectures, {prefCode: e.target.key}]);
      
    }
    
  }
  /*const {isLoading, isError, data } = useQuery(['prefectures'], fetchPrefectures);
  const prefectures: Prefecture[] = data.result;
  console.debug(data);*/

  return (
    <>
      {prefectures.map((prefecture) => (
        <label key={prefecture.prefCode}>
          <input value={prefecture.prefName} 
            type="checkbox"
            checked={prefecture.isCheck} />
          {prefecture.prefName}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
