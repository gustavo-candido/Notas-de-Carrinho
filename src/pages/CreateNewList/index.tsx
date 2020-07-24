import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, FlatList } from 'react-native';

import {
  Component,
  Header,
  GoBackButton,
  ListName,
  MenuButtom,
  ProductContainer,
  ProductName,
  RemoveProductButtom,
  InputButtom,
  InputWrapper,
  Input,
} from './styles';

import Menu from './Menu';
import { saveList } from '../../utils/storage';

export interface Product {
  id: string;
  name: string;
  catch: boolean;
  price: number;
  quantity: number;
  unit: string;
}

interface ProductName {
  id: string;
  name: string;
}

const CreateNewList: React.FC = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductName[]>([]);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [listName, setListName] = useState('Nova Lista');
  const [listSize, setListSize] = useState(0);
  const [nextId, setNextId] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const ListRef = useRef(null);
  const { navigate } = useNavigation();

  const clearProducts = useCallback(() => setProducts([]), []);

  const menuToggle = useCallback(() => {
    setDisplayMenu(!displayMenu);
  }, [displayMenu]);

  const handleNavigatorBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const storeList = useCallback(
    (isShopping: boolean) => {
      (async () => {
        const shoppProduct = products.map((product) => ({
          id: product.id,
          name: product.name,
          catch: false,
          price: 0,
          quantity: 0,
          unit: 'unid.',
        }));

        await saveList('@NotasDeCarrinho', {
          name: listName,
          products: shoppProduct,
          isShopping,
        });
      })();
    },
    [listName, products]
  );

  const goShopping = useCallback(() => {
    storeList(true);
    navigate('Cart', { id: '@NotasDeCarrinho' });
  }, [navigate, storeList]);

  const handleAddButton = useCallback(() => {
    if (!inputValue) return;
    setProducts([...products, { id: String(nextId), name: inputValue }]);
    setNextId(nextId + 1);
    setInputValue('');
  }, [inputValue, nextId, products]);

  const handleDeleteProduct = useCallback(
    (id: string) => {
      const filteredProducts = products.filter((product) => product.id !== id);

      setProducts(filteredProducts);
    },
    [products]
  );

  return (
    <Component>
      {displayMenu && (
        <Menu
          Toggle={menuToggle}
          ClearProducts={clearProducts}
          GoShopping={goShopping}
          SaveList={storeList}
        />
      )}
      <Header>
        <GoBackButton onPress={handleNavigatorBack}>
          <Icon name="chevron-left" size={20} color="#ECEFF1" />
        </GoBackButton>

        <ListName value={listName} onChangeText={setListName} />

        <MenuButtom onPress={menuToggle}>
          <Icon name="menu" size={20} color="#ECEFF1" />
        </MenuButtom>
      </Header>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <FlatList
          ref={ListRef}
          onContentSizeChange={() => {
            listSize <= products.length &&
              ListRef.current?.scrollToEnd({ animated: true });

            setListSize(products.length);
          }}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 10 }}
          data={products}
          keyExtractor={(product) => product.id}
          renderItem={({ item: product }) => (
            <ProductContainer>
              <ProductName>{product.name}</ProductName>

              <RemoveProductButtom
                onPress={() => {
                  handleDeleteProduct(product.id);
                }}
              >
                <Icon name="minus-circle" size={20} color="#0A0808" />
              </RemoveProductButtom>
            </ProductContainer>
          )}
        />
      </KeyboardAvoidingView>

      <InputWrapper>
        <Input
          value={inputValue}
          placeholder="Adicionar produto"
          onChangeText={setInputValue}
          onSubmitEditing={handleAddButton}
        />

        <InputButtom onPress={handleAddButton}>
          <Icon name="plus" size={20} color="#ECEFF1" />
        </InputButtom>
      </InputWrapper>
    </Component>
  );
};

export default CreateNewList;
