import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function WelcomeQuiz({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>WelcomeQuiz</Text>
          <Button
        title="Go to Rank"
        onPress={() => navigation.navigate('Rank')}
      />
        </View>
      );
}