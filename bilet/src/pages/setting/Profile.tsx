import {View, Text, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}: any) => {
  return (
    <View>
      <Text style={{color: 'black'}}>Profile</Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </View>
  );
};

export default Profile;
