import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import Routes from './src/routes';

const TemaEscuroApp = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#0B0B14', 
  },
};

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#0B0B14' }}> 
      <NavigationContainer theme={TemaEscuroApp}> 
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="#0B0B14" 
          translucent={false} 
        />
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}