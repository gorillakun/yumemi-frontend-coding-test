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

  const updateCheckedPrefectures = (targetPrefecture: Prefecture) => {
    const newCheckedPrefectures = Object.values(checkedPrefectures).map((pref: Prefecture) => {
      if(pref.prefCode === targetPrefecture.prefCode) {
        return pref;
      } else {
        return targetPrefecture;
      }
    });

    setCheckedPrefectures(newCheckedPrefectures);
  }


  const handleChange = (e) => {
    const targetPrefecture: Prefecture = {
      prefCode: e.target.key,
      prefName: e.target.value,
      isCheck: true
    }
    //setCheckedPrefectures((prevState: Prefecture) => ({...prevState, prefCode: e.target.key}));
    updateCheckedPrefectures(targetPrefecture);
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
            checked={prefecture.isCheck}
            onChange={handleChange} />
          {prefecture.prefName}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
