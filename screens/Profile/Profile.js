import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

export default Profile;
