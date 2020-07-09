import React from 'react';

import { NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Text } from 'react-native';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    NunitoSans_400Regular,
  });

  if (!fontLoaded) {
    return <Text>Loading</Text>;
  }

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
