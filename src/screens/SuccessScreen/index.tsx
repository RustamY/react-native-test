import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

import { SUCCESS_SCREEN } from 'src/constants/screenNames';
import Container from 'src/components/Container';
import Button from 'src/components/Button';
import { ColorsType, RootStackParamList } from 'src/types/CommonTypes';
import SuccessIcon from 'src/assets/svg/success.svg';

type Props = NativeStackScreenProps<RootStackParamList, typeof SUCCESS_SCREEN>;

const SuccessScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme();
  const styles = makeStyles(colors as ColorsType);

  const onContinue = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <View style={styles.wrapper}>
        <SuccessIcon width={100} height={100} />
        <Text style={styles.title}>Заявка создана</Text>
        <Text style={styles.description}>Скоро ответ придет вам на почту</Text>
      </View>
      <View style={styles.footer}>
        <Button onPress={onContinue} title="Понятненько" />
      </View>
    </Container>
  );
};

const makeStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 100,
    },
    footer: {
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 15,
      paddingBottom: 20,
      backgroundColor: colors.white,
    },
    title: {
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 26,
      marginTop: 36,
      color: colors.midnight,
      textAlign: 'center',
      letterSpacing: 0.2,
      fontFamily: 'SF-Display-Bold',
    },
    description: {
      letterSpacing: 0.2,
      color: colors.cyanBlue,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 21,
      marginTop: 8,
      fontFamily: 'SF-Display-Medium',
    },
  });

export default SuccessScreen;
