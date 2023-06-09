import React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Let's start authenticating with KindeAuth
      </Text>
      <Text style={styles.welcome}>Configure your app</Text>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://kinde.com/docs/developer-tools')
        }
        style={{
          ...styles.btn,
          alignItems: 'center',
          backgroundColor: '#FFF',
          marginTop: 5,
        }}>
        <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
          Go to docs
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#000',
    borderRadius: 15,
    marginBottom: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 5,
  },
  text: {
    fontWeight: '600',
    color: '#000',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
