
const API_KEY="51jFyr3MZgTlupwzaTdmNXGbrPujT1mGDRwgbGuL"
const END_POINT_BASE="https://opendata.resas-portal.go.jp"


export const fetchPrefectures = async ()=> {
  const response = await fetch(END_POINT_BASE + "/api/v1/prefectures", {
    headers: {
      'x-api-key': API_KEY
    }
  });
  return response.json();
}
