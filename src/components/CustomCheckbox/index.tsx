import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Check from 'src/assets/svg/check.svg';

type Props = {
  text: string;
  checked?: boolean;
  onValueChange: (value: boolean) => void;
};

const CustomCheckbox: React.FC<Props> = ({ text, checked, onValueChange }) => {
  return (
    <Pressable onPress={() => onValueChange(!checked)} style={styles.wrapper}>
      <View style={styles.container}>
        {checked && <Check width={18} height={18} />}
      </View>
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
    borderColor: '#DFE6ED',
    width: 18,
    height: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.2,
    color: '#2A333D',
    marginLeft: 8,
    fontFamily: 'SF-Display',
  },
});

export default CustomCheckbox;
