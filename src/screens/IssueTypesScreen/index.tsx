import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

import Container from 'src/components/Container';
import Button from 'src/components/Button';
import ItemProblem from 'src/screens/IssueTypesScreen/components/ItemProblem';
import { FORM_SCREEN, ISSUE_TYPES_SCREEN } from 'src/constants/screenNames';
import { ProblemType } from 'src/types/FeedbackTypes';
import { ColorsType, RootStackParamList } from 'src/types/CommonTypes';

const LIST_PROBLEMS: ProblemType[] = [
  {
    title: 'Комфортный офис',
    description:
      'Хозяйственные вопросы: про новую мебель, комфорт рабочего места, парковку, предложения по улучшению офиса и т.д.',
  },
  {
    title: 'Софт и оборудование',
    description:
      'Технические вопросы, связанные с покупкой, установкой и настройкой софта, предоставлении доступа, работой сети и др.',
  },
  {
    title: 'Карьера и рабочие процессы',
    description:
      'Любой фидбек для эйчаров, связанный с карьерным ростом и отношениями внутри команды. Если вам неудобно говорить о чем-то с руководителем — вам также сюда.',
  },
  {
    title: 'О деньгах и отпусках',
    description:
      'Для вопросов связанных с начислением зарплаты, оформления отпуска и возмещения расходов.',
  },
  {
    title: 'Пиар и ивенты',
    description:
      'Для предложений по внешнему или внутреннему пиару компании, проведению мероприятий, соревнований и т.д.',
  },
  {
    title: 'Рекрутинговый бонус',
    description:
      'Место для контактов потенциальных кандидатов на работу в Меркури — если ваш кандидат пройдет испытательный срок, мы скажем вам «спасибо» в денежном эквиваленте.',
  },
  {
    title: 'Другое',
    description:
      'Не нашли нужное в списке? Опишите свою просьбу здесь, и мы направим ее по нужному адресу.',
  },
];

type Props = NativeStackScreenProps<
  RootStackParamList,
  typeof ISSUE_TYPES_SCREEN
>;

const IssueTypesScreen: React.FC<Props> = ({ route, navigation }) => {
  const { problem, setProblem } = route.params;
  const [value, setValue] = useState<ProblemType | null>(problem);
  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  const onContinue = () => {
    setProblem(value);
    navigation.navigate(FORM_SCREEN);
  };

  return (
    <Container>
      <View style={styles.wrapper}>
        <FlatList
          data={LIST_PROBLEMS}
          renderItem={({ item, index }) => (
            <ItemProblem
              item={item}
              index={index}
              selectedProblem={value}
              onSelectProblem={setValue}
            />
          )}
        />
      </View>
      <View style={styles.footer}>
        <Button disabled={!value} onPress={onContinue} title="Выбрать" />
      </View>
    </Container>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      paddingBottom: 70,
      height: '100%',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      flex: 1,
      paddingTop: 15,
      paddingBottom: 20,
      paddingHorizontal: 15,
      borderTopColor: 'rgba(0, 0, 0, 0.153682)',
      borderTopWidth: 1,
      backgroundColor: colors.white,
    },
  });

export default IssueTypesScreen;
