const Checkbox = () => {
  const prefectures = [
    { id: 1, name: '北海道' },
    { id: 2, name: '東京都' },
  ];
  return (
    <>
      <p>ハロー</p>
      {prefectures.map((prefectur) => (
        <label key={prefectur.id}>
          <input value={prefectur.name} type="checkbox" />
          {prefectur.name}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
