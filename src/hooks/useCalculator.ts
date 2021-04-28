import {useRef, useState} from 'react';

enum Operators {
  sum,
  subs,
  divide,
  mult,
}
export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const deleteDigit = () => {
    let negative = '';
    let temp = number;

    if (number.includes('-')) {
      negative = '-';
      temp = number.substr(1);
    }

    if (temp.length > 1) {
      setNumber(negative + temp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const builNumber = (textnumber: string) => {
    if (number.includes('.') && textnumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textnumber === '0') return;
      if (textnumber === '.') {
        setNumber(number + textnumber);
      } else if (textnumber === '0' && number.includes('.')) {
        setNumber(number + textnumber);
      } else if (textnumber !== '0' && !number.includes('.')) {
        setNumber(textnumber);
      } else if (textnumber === '0' && number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textnumber);
      }
    } else {
      setNumber(number + textnumber);
    }
  };

  const changePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const setNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const divideButton = () => {
    changePreviousNumber();
    lastOperation.current = Operators.divide;
  };

  const sumButton = () => {
    changePreviousNumber();
    lastOperation.current = Operators.sum;
  };

  const subsButton = () => {
    changePreviousNumber();
    lastOperation.current = Operators.subs;
  };

  const multButton = () => {
    changePreviousNumber();
    lastOperation.current = Operators.mult;
  };

  const calulate = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${number1 + number2}`);
        break;
      case Operators.subs:
        setNumber(`${number2 - number1}`);
        break;
      case Operators.mult:
        setNumber(`${number1 * number2}`);
        break;
      case Operators.divide:
        setNumber(`${number2 / number1}`);
    }
    setPreviousNumber('0');
  };
  return {
    number,
    previousNumber,
    lastOperation,
    clear,
    deleteDigit,
    builNumber,
    changePreviousNumber,
    setNegative,
    divideButton,
    subsButton,
    sumButton,
    multButton,
    calulate,
  };
};
