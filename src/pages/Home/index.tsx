import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

import {
  Component,
  Title,
  Content,
  EmptyListText,
  HomeIllustration,
  CreateFirstList,
  CreateFirstListText,
} from './styles';

import Header from '../../components/Header';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleCreateList(): void {
    navigation.navigate('CreateNewList');
  }

  return (
    <Component>
      <Header>
        <Title>Notas de carrinho</Title>
      </Header>

      <Content>
        <EmptyListText>Nenhuma lista criada</EmptyListText>
        <HomeIllustration
          source={require('../../../assets/home-illustration.png')}
        />

        <CreateFirstList onPress={handleCreateList}>
          <CreateFirstListText>Crie sua primeira lista</CreateFirstListText>
          <Icon name="chevron-right" size={20} color="#000000" />
        </CreateFirstList>
      </Content>
    </Component>
  );
};

export default Home;
