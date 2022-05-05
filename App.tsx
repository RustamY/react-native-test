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
import { ImageBackground, SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';

import Navigation from 'src/navigation';
import Reactotron, { overlay } from 'reactotron-react-native';

Reactotron.configure().use(overlay()).connect();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* @ts-ignore */}
      <ImageBackground
        style={styles.imageBackground}
        source={require('src/assets/background.png')}
      >
        <Navigation />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    flex: 1,
    position: 'absolute',
  },
});

// @ts-ignore
const AppWithBenefits = __DEV__ ? Reactotron.overlay(App) : App;

export default AppWithBenefits;
