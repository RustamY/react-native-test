import React, { useLayoutEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Animated,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

import { useTheme, useIsFocused } from '@react-navigation/native';
import { ColorsType } from 'src/types/CommonTypes';

type Props = TextInputProps & {
  label: string;
};

const CustomTextInput: React.FC<Props> = props => {
  const isFocusedScreen = useIsFocused();
  useLayoutEffect(() => {
    startAnimation(false);
  }, [isFocusedScreen]);

  const _animatedIsFocused = useRef(
    new Animated.Value(!props.value ? 0 : 1),
  ).current;

  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onBlur } = props;
    startAnimation(true);
    onBlur?.(e);
  };

  const onBlurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const { onBlur } = props;
    startAnimation(false);
    onBlur?.(e);
  };

  const startAnimation = (isFocused: boolean) => {
    Animated.timing(_animatedIsFocused, {
      toValue: isFocused || props.value !== '' ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const labelStyle = {
    position: 'absolute',
    left: 12,
    top: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 9],
    }),
    fontSize: _animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    fontFamily: 'SF-Text',
    letterSpacing: 0.5,
    lineHeight: 16,
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={
          // @ts-ignore
          [styles.label, labelStyle]
        }
      >
        {props.label}
      </Animated.Text>
      <TextInput
        {...props}
        style={styles.input}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      paddingTop: 5,
      paddingHorizontal: 10,
      width: '100%',
      height: 52,
      borderRadius: 8,
      backgroundColor: 'rgba(143, 157, 173, 0.1)',
    },
    input: {
      fontSize: 16,
      lineHeight: 16,
      height: '100%',
      color: colors.midnight,
      fontFamily: 'SF-Display',
      paddingTop: 20,
      paddingBottom: 0,
      letterSpacing: 0.5,
    },
    label: {
      lineHeight: 19,
      fontSize: 16,
      fontWeight: '400',
      color: colors.cyanBlue,
      paddingBottom: 6,
      fontFamily: 'SF-Display',
    },
    animatedLabel: {
      top: 5,
      left: 15,
      position: 'absolute',
      zIndex: 10000,
    },
    animatedText: {
      fontSize: 12,
      lineHeight: 16,
    },
  });

export default CustomTextInput;
