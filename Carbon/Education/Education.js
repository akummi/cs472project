import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Education({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Education</Text>
          <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
        </View>
      );
}