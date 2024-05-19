import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

import {
  useFonts,
  OpenSans_800ExtraBold,
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_600SemiBold,
} from '@expo-google-fonts/open-sans'

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
    OpenSans_600SemiBold,
  })
  
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
