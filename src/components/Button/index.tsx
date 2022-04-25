import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ColorsType } from 'src/types/CommonTypes';

type Props = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ onPress, title, disabled }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  return (
    <Pressable disabled={disabled} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    button: {
      backgroundColor: '#356AFF',
      borderRadius: 8,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    text: {
      color: colors.white,
      fontSize: 19,
      fontWeight: '400',
    },
  });

export default Button;
