import {UserProfile} from '@kinde-oss/react-native-sdk-0-7x';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type AvatarProps = {
  userProfile: UserProfile;
  handleLogout: () => void;
};

const Avatar: React.FC<AvatarProps> = ({handleLogout, userProfile}) => {
  if (!userProfile?.given_name && !userProfile.family_name) {
    return null;
  }
  const getShortName = () => {
    return `${userProfile?.given_name?.charAt(0) ?? ''}${
      userProfile?.family_name?.charAt(0) ?? ''
    }`;
  };
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.rootAvatar}>
        <Text
          style={{
            ...styles.text,
            textAlign: 'center',
          }}>
          {getShortName()}
        </Text>
      </View>
      <View style={{marginRight: 10}}>
        <Text style={{...styles.text, color: '#000'}}>
          {userProfile.given_name ?? ''} {userProfile.family_name ?? ''}
        </Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.btn}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  rootAvatar: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 25,
    marginRight: 10,
    padding: 5,
  },
  text: {
    fontWeight: '600',
    color: '#FFF',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
