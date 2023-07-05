import React from 'react';
import {Linking, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View>
      <Text>KindeAuth</Text>
      <Text>
        Visit our{' '}
        <Text
          style={{textDecorationLine: 'underline'}}
          onPress={() => Linking.openURL('https://kinde.com/docs')}>
          help center
        </Text>
      </Text>
      <Text style={{color: '#636363', fontSize: 12}}>
        © 2022 KindeAuth, Inc. All rights reserved
      </Text>
    </View>
  );
};

export default Footer;
