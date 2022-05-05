import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Check from 'src/assets/svg/check.svg';

import { ProblemType } from 'src/types/FeedbackTypes';
import { ColorsType } from 'src/types/CommonTypes';
import { useTheme } from '@react-navigation/native';

type Props = {
  item: ProblemType;
  index: number;
  selectedProblem: ProblemType | null;
  onSelectProblem: (value: ProblemType) => void;
};

const ItemProblem: React.FC<Props> = ({
  item,
  index,
  onSelectProblem,
  selectedProblem,
}) => {
  const { title, description } = item;
  const isSelected = selectedProblem?.title === title;

  const { colors } = useTheme();

  const styles = makeStyles(colors as ColorsType);

  const onPress = () => {
    onSelectProblem({ title, description });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, index !== 0 && styles.separator]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>{isSelected && <Check width={24} height={24} />}</View>
    </TouchableOpacity>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      paddingTop: 10,
      paddingBottom: 12,
      borderColor: 'rgba(223, 230, 237, 0.5)',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      borderColor: 'rgba(223, 230, 237, 0.5)',
      borderTopWidth: 1,
    },
    content: {
      maxWidth: '90%',
    },
    title: {
      color: colors.midnight,
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 21,
      fontFamily: 'SF-Display-Medium',
    },
    description: {
      color: colors.cyanBlue,
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 17,
      fontFamily: 'SF-Text',
    },
  });

export default ItemProblem;
