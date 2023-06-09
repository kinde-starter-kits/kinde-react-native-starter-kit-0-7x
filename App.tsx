/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Footer from './src/components/Footer';
import Welcome from './src/components/Welcome';
import Header from './src/components/Header';
import LoadingContext from './src/components/context/LoadingContext';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <View style={styles.root}>
        <Header />
        <Welcome />
        <Footer />
      </View>
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
});

export default App;
