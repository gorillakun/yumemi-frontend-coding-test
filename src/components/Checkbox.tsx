import {fetchPrefectures} from '../api/index';
import { useQuery} from "react-query";

type Prefecture = {
  prefCode: number,
  prefName: string
}

const Checkbox = () => {

  const {isLoading, isError, data } = useQuery(['prefectures'], fetchPrefectures);
  const prefectures: Prefecture[] = data.result;
  console.debug(data);

  return (
    <>
      {prefectures.map((prefecture) => (
        <label key={prefecture.prefCode}>
          <input value={prefecture.prefName} type="checkbox" />
          {prefecture.prefName}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
