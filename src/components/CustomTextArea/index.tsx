import React from 'react';
import { TextInput, TextInputProps, StyleSheet, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ColorsType } from 'src/types/CommonTypes';

const CustomTextArea: React.FC<TextInputProps> = ({
  numberOfLines,
  ...props
}) => {
  const theme = useTheme();
  const colors = theme.colors as ColorsType;
  const styles = makeStyles(colors);

  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor={colors.cyanBlue}
      numberOfLines={Platform.OS === 'ios' ? undefined : numberOfLines}
    />
  );
};

const makeStyles = (colors: ColorsType) => {
  return StyleSheet.create({
    input: {
      borderRadius: 8,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: 'rgba(233, 235, 239, 0.8)',
      padding: 12,
      textAlignVertical: 'top',
      fontSize: 16,
      color: colors.midnight,
      fontWeight: '400',
      height: 234,
      fontFamily: 'SF-Display',
    },
  });
};

export default CustomTextArea;
