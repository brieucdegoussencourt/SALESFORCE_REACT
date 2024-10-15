import { useGuessModel } from '../models/model';
import Main from '../view/Main';

function Guess() {
  const { amount, date, result, handleAmountChange, handleDateChange } = useGuessModel();

  return (
      <div>
        <Main 
        amount={amount} date={date} result={result} handleAmountChange={handleAmountChange} handleDateChange={handleDateChange} />
      </div>
  );
}

export default Guess;