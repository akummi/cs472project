import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Home({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home</Text>
          <Button
        title="Go to Rank"
        onPress={() => navigation.navigate('Rank')}
      />
        <Button
        title="Go to Education"
        onPress={() => navigation.navigate('Education')}
      />
        <Button
        title="Go to Budget"
        onPress={() => navigation.navigate('Budget')}
      />
        </View>
      );
}