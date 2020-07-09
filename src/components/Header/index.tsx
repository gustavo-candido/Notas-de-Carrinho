import React from 'react';
import { StatusBar } from 'react-native';
import { Component, TitleWrapper, HeaderBg } from './styles';

const Header: React.FC = ({ children }) => (
  <Component>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <HeaderBg />
    <TitleWrapper>{children}</TitleWrapper>
  </Component>
);

export default Header;
