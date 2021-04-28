import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface PropTypes {
  text: string;
  color?: string;
  extraWidth?: boolean;
  action: (number: string) => void;
}

export const CalcButton = ({
  text,
  color = '#2D2D2D',
  extraWidth = false,
  action,
}: PropTypes) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: extraWidth ? 150 : 70,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 200,
    justifyContent: 'center',
    backgroundColor: '#9B9B9B',
    marginHorizontal: 5,
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
  },
});
