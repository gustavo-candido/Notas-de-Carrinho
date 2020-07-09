import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { Component, MenuWrapper, MenuOption, MenuOptionText } from './styles';
import { Product } from '..';

interface MenuProps {
  Toggle: () => void;
  ClearProducts: () => void;
  SaveList: (isShopping: boolean) => void;
  GoShopping: () => void;
}

const Menu: React.FC<MenuProps> = ({
  Toggle,
  ClearProducts,
  SaveList,
  GoShopping,
}) => {
  const options = ['Salvar', 'Limpar', 'Começar as compras'];

  function handleSave(): void {
    SaveList(false);
  }

  function handleClear(): void {
    ClearProducts();
  }

  function handleShop(): void {
    GoShopping();
  }

  const menuAction = {
    Limpar: handleClear,
    'Começar as compras': handleShop,
    Salvar: handleSave,
  };

  function menuCLick(action: string): void {
    const validAction = action in menuAction;

    if (validAction) menuAction[action]();
    else console.log('Action not valid');
    Toggle();
  }

  return (
    <TouchableWithoutFeedback onPress={Toggle}>
      <Component>
        <MenuWrapper>
          {options.map((option) => (
            <MenuOption key={option} onPress={() => menuCLick(option)}>
              <MenuOptionText>{option}</MenuOptionText>
            </MenuOption>
          ))}
        </MenuWrapper>
      </Component>
    </TouchableWithoutFeedback>
  );
};

export default Menu;
