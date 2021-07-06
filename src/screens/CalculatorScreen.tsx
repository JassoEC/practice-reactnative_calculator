import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {CalcButton} from '../components/CalcButton/CalcButton';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clear,
    deleteDigit,
    builNumber,
    setNegative,
    divideButton,
    subsButton,
    sumButton,
    multButton,
    calulate,
  } = useCalculator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <CalcButton text="C" color="#9B9B9B" action={clear} />
        <CalcButton text="+/-" color="#9B9B9B" action={setNegative} />
        <CalcButton text="del" color="#9B9B9B" action={deleteDigit} />
        <CalcButton text="/" color="#FF9427" action={divideButton} />
      </View>
      <View style={styles.row}>
        <CalcButton text="7" action={builNumber} />
        <CalcButton text="8" action={builNumber} />
        <CalcButton text="9" action={builNumber} />
        <CalcButton text="X" color="#FF9427" action={multButton} />
      </View>
      <View style={styles.row}>
        <CalcButton text="4" action={builNumber} />
        <CalcButton text="5" action={builNumber} />
        <CalcButton text="6" action={builNumber} />
        <CalcButton text="-" color="#FF9427" action={subsButton} />
      </View>
      <View style={styles.row}>
        <CalcButton text="1" action={builNumber} />
        <CalcButton text="2" action={builNumber} />
        <CalcButton text="3" action={builNumber} />
        <CalcButton text="+" color="#FF9427" action={sumButton} />
      </View>
      <View style={styles.row}>
        <CalcButton text="0" extraWidth action={builNumber} />
        <CalcButton text="." action={builNumber} />
        <CalcButton text="=" color="#FF9427" action={calulate} />
      </View>
    </View>
  );
};
