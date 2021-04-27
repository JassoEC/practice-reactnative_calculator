import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CalcButton} from '../components/CalcButton/CalcButton';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

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

  const setNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <CalcButton text="C" color="#9B9B9B" action={clear} />
        <CalcButton text="+/-" color="#9B9B9B" action={setNegative} />
        <CalcButton text="del" color="#9B9B9B" action={deleteDigit} />
        <CalcButton text="/" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" action={builNumber} />
        <CalcButton text="8" action={builNumber} />
        <CalcButton text="9" action={builNumber} />
        <CalcButton text="X" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" action={builNumber} />
        <CalcButton text="5" action={builNumber} />
        <CalcButton text="6" action={builNumber} />
        <CalcButton text="-" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" action={builNumber} />
        <CalcButton text="2" action={builNumber} />
        <CalcButton text="3" action={builNumber} />
        <CalcButton text="+" color="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" extraWidth action={builNumber} />
        <CalcButton text="." action={builNumber} />
        <CalcButton text="=" color="#FF9427" action={clear} />
      </View>
    </View>
  );
};
