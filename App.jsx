import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  const lightTheme = {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  };

  // Define the greenish-blue (teal) color
  const appBarColor = ''; // Greenish-blue (teal) color

  return (
    <>
      {/* Set the status bar background color */}
      <StatusBar backgroundColor={appBarColor} barStyle="light-content" />

      <SafeAreaView style={[styles.safeArea, { backgroundColor: appBarColor }]}>
        {/* Custom AppBar */}
        <View style={[styles.appBar, { backgroundColor: appBarColor }]}>
          <Text style={styles.appBarText}>My App</Text>
        </View>

        {/* Main content */}
        <View style={[styles.container, { backgroundColor: lightTheme.backgroundColor }]}>
          <Text style={[styles.text, { color: lightTheme.textColor }]}>
            Hello from the main content!
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appBar: {
    height: 60, // Standard app bar height
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  appBarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
