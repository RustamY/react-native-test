import React from 'react';
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useTheme } from '@react-navigation/native';

import { ColorsType } from 'src/types/CommonTypes';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  const headerHeight = useHeaderHeight() - 8;

  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  return (
    <View style={styles.wrapper}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <View style={{ marginTop: headerHeight }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.content}>{children}</View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      flex: 1,
      position: 'absolute',
    },
    titleScreen: {
      color: colors.white,
      fontWeight: '400',
      fontSize: 17,
      backgroundColor: 'red',
      lineHeight: 22,
      alignSelf: 'flex-end',
    },
    content: {
      height: '100%',
      margin: 5,
      marginBottom: 0,
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 16,
      paddingLeft: 16,
      backgroundColor: colors.white,
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      boxShadow:
        '0px 1px 2px rgba(42, 51, 61, 0.2), 0px 0px 1px rgba(42, 51, 61, 0.2)',
    },
  });

export default Container;
