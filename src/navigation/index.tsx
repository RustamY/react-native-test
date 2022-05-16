/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import FormScreen from 'src/screens/FormScreen';
import {
  FORM_SCREEN,
  ISSUE_TYPES_SCREEN,
  SUCCESS_SCREEN,
} from 'src/constants/screenNames';
import IssueTypesScreen from 'src/screens/IssueTypesScreen';
import SuccessScreen from 'src/screens/SuccessScreen';
import ArrowBackIcon from 'src/assets/svg/arrow-back.svg';
import CloseIcon from 'src/assets/svg/close.svg';
import { RootStackParamList, ThemeType } from 'src/types/CommonTypes';

const CustomTitle = (props: any) => (
  <Text style={styles.customTitle}>{props.children}</Text>
);

const Navigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: props => <CustomTitle {...props} />,
          headerBackVisible: false,
          headerTitleAlign: 'center',
        }}
        initialRouteName={FORM_SCREEN}
      >
        <Stack.Screen
          name={FORM_SCREEN}
          component={FormScreen}
          options={{
            title: 'У меня проблема',
          }}
        />
        <Stack.Screen
          name={ISSUE_TYPES_SCREEN}
          component={IssueTypesScreen}
          options={({ navigation }) => ({
            title: 'Тип проблемы',
            headerLeft: () => <ArrowBackIcon onPress={navigation.goBack} />,
          })}
        />
        <Stack.Screen
          name={SUCCESS_SCREEN}
          component={SuccessScreen}
          options={({ navigation }) => ({
            headerLeft: () => <CloseIcon onPress={navigation.goBack} />,
            title: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const navTheme: ThemeType = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
    white: '#FFFFFF',
    midnight: '#2A333D',
    cyanBlue: '#8F9DAD',
  },
};

const styles = StyleSheet.create({
  customTitle: {
    color: navTheme.colors.white,
    letterSpacing: 0.2,
    fontFamily: 'SF-Display',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 22,
  },
});

export default Navigation;
