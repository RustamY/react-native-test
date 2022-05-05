import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ChevronRight from 'src/assets/svg/chevron-right.svg';
import { ColorsType } from 'src/types/CommonTypes';

type Props = {
  label: string;
  value?: string;
  onPress: () => void;
};

const ListItem: React.FC<Props> = ({ label, value, onPress }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View style={[styles.content, !value && styles.contentEmptyValue]}>
        <Text style={[styles.label, !value && styles.labelEmptyValue]}>
          {label}
        </Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <ChevronRight width={16} height={16} />
    </Pressable>
  );
};

const makeStyles = (colors: ColorsType) => {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(143, 157, 173, 0.1)',
      height: 52,
      borderRadius: 8,
      paddingLeft: 12,
      paddingRight: 16,
    },
    content: {
      paddingTop: 6,
      height: '100%',
    },
    contentEmptyValue: {
      alignItems: 'center',
      flexDirection: 'row',
      fontFamily: 'SF-Display',
    },
    label: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
      letterSpacing: 0.1,
      color: colors.cyanBlue,
      fontFamily: 'SF-Text',
    },
    labelEmptyValue: {
      fontSize: 16,
    },
    value: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 19,
      letterSpacing: 0.5,
      color: colors.midnight,
      marginRight: 24,
      fontFamily: 'SF-Display',
    },
  });
};

export default ListItem;
