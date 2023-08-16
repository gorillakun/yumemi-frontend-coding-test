import { useEffect, useState } from 'react';
import {fetchPrefectures} from '../api/index';
//import { useQuery} from "react-query";

type Prefecture = {
  prefCode: number,
  prefName: string,
  isCheck: boolean
}

const Checkbox = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetchPrefectures();
      setPrefectures(resp.result);
      return resp;
    }
    fetchData();
  }, []);

  /*const {isLoading, isError, data } = useQuery(['prefectures'], fetchPrefectures);
  const prefectures: Prefecture[] = data.result;
  console.debug(data);*/

  return (
    <>
      {prefectures.map((prefecture) => (
        <label key={prefecture.prefCode}>
          <input value={prefecture.prefName} type="checkbox" checked={prefecture.isCheck} />
          {prefecture.prefName}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
