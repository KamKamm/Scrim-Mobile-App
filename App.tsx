import React from 'react'; 
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import WebViewScreen from './webViewScreen';
import { PaperProvider } from 'react-native-paper';
import StrimBottomNavigation from './strim_bottom_navigation';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
      <>
        <PaperProvider>
          <WebViewScreen />
        </PaperProvider>
        
      </>

  );
}


export default App;

