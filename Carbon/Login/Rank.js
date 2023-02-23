import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Rank({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Rank</Text>
          <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
        </View>
      );
}