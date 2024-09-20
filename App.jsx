import React from 'react';
import { Text, View, StyleSheet,useColorScheme } from 'react-native';

function App() {
    const _darkmode=useColorScheme()==='dark'
  return (
    <View >
      <Text>
        Hello world!!!
      </Text>
    </View>
  );
}

export default App;