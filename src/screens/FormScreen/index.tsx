import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  ISSUE_TYPES_SCREEN,
  SUCCESS_SCREEN,
  FORM_SCREEN,
} from 'src/constants/screenNames';
import Container from 'src/components/Container';
import CustomTextInput from 'src/components/CustomTextInput';
import CustomCheckbox from 'src/components/CustomCheckbox';
import ListItem from 'src/components/ListItem';
import Button from 'src/components/Button';
import CustomTextArea from 'src/components/CustomTextArea';
import { ProblemType } from 'src/types/FeedbackTypes';
import { ColorsType, RootStackParamList } from 'src/types/CommonTypes';

type Props = NativeStackScreenProps<RootStackParamList, typeof FORM_SCREEN>;

const FormScreen: React.FC<Props> = ({ navigation }) => {
  const [problem, setProblem] = useState<ProblemType | null>(null);
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [includeThank, setIncludeThank] = useState<boolean>(false);
  const [isKeyboadVisible, setIsKeyboadVisible] = useState<boolean>(false);
  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  const handleIssueType = () => {
    navigation.navigate(ISSUE_TYPES_SCREEN, {
      problem,
      setProblem,
    });
  };

  const formReset = () => {
    setProblem(null);
    setEmail('');
    setDescription('');
    setIncludeThank(false);
  };

  const onContinue = () => {
    navigation.navigate(SUCCESS_SCREEN);
    formReset();
  };

  const onKeyboardDidShow = () => {
    setIsKeyboadVisible(true);
  };

  const onKeyboardDidHide = () => {
    setIsKeyboadVisible(false);
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        style={styles.wrapper}
        onKeyboardDidShow={onKeyboardDidShow}
        onKeyboardDidHide={onKeyboardDidHide}
      >
        <View style={styles.children}>
          <ListItem
            label="Тип проблемы"
            value={problem?.title}
            onPress={handleIssueType}
          />
        </View>
        <View style={styles.children}>
          <CustomTextInput
            label="Электронная почта"
            onChangeText={text => setEmail(text)}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.children}>
          <CustomTextArea
            placeholder="Опишите свою проблему"
            onChangeText={text => setDescription(text)}
            value={description}
            multiline
            numberOfLines={11}
          />
          <View style={styles.checkbox}>
            <CustomCheckbox
              text="Передать «спасибо» :)"
              checked={includeThank}
              onValueChange={setIncludeThank}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {!isKeyboadVisible && (
        <View style={styles.footer}>
          <Button onPress={onContinue} title="Отправить" />
        </View>
      )}
    </Container>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    children: {
      paddingBottom: 12,
    },
    checkbox: {
      paddingTop: 16,
    },
    footer: {
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      flex: 1,
      paddingTop: 15,
      paddingHorizontal: 15,
      paddingBottom: 20,
      borderTopColor: 'rgba(0, 0, 0, 0.153682)',
      borderTopWidth: 1,
      backgroundColor: colors.white,
    },
  });

export default FormScreen;
