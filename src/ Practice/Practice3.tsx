const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(100);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題:引数の指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};

export default Practice3;
