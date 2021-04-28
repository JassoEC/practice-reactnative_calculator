import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    marginRight: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
});
