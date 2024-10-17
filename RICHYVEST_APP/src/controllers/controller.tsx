import { useGuessModel } from "../models/model";
import Main from "../view/Main";

function Guess() {
  const { amount, date, result, handleAmountChange, handleDateChange } =
    useGuessModel();

  return (
    <Main
      amount={amount}
      date={date}
      result={result}
      handleAmountChange={handleAmountChange}
      handleDateChange={handleDateChange}
    />
  );
}

export default Guess;
