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
          width: extraWidth ? 180 : 80,
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
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#9B9B9B',
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
  },
});
