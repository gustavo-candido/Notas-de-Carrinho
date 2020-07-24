import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Feather as Icon } from '@expo/vector-icons';

import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Component,
  GoBackButton,
  TittleWrapper,
  CartCost,
  Content,
  FinishShopButtom,
  FinishShopButtomText,
} from './styles';

import { loadList, saveList } from '../../utils/storage';
import formatValue from '../../utils/formatValue';
import Header from '../../components/Header';

interface RouteParams {
  id: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  catch: boolean;
  quantity: number;
  unit: string;
}

interface ProductFormatted extends Product {
  formattedPrice: string;
}

const Cart: React.FC = () => {
  const route = useRoute();
  const { id: listId } = route.params as RouteParams;
  const navigation = useNavigation();
  const [products, Setproducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const listData = await loadList(listId);

      Setproducts(listData.products);
      Setproducts([
        {
          catch: true,
          id: '0',
          name: 'Arroz',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: true,
          id: '1',
          name: 'Feijão',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '2',
          name: 'Farofa pronta yoki ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '3',
          name: 'Detergente ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '4',
          name: 'Batata palha ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '5',
          name: 'Guardanapo ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '6',
          name: 'Toddy',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '7',
          name: 'Leite ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '8',
          name: 'Molho de extrato ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '9',
          name: 'Pão de forma',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
        {
          catch: false,
          id: '10',
          name: 'Bolacha Mabel ',
          price: 0,
          quantity: 0,
          unit: 'unid.',
        },
      ]);
    };

    loadData();
  }, [listId]);

  const cartTotalFormatted = useMemo(() => {
    const cartTotal = products.reduce(
      (total, product) => total + product.price,
      0
    );
    return formatValue(cartTotal);
  }, [products]);

  const productsFormatted = useMemo<ProductFormatted[]>(() => {
    return products.map((product) => ({
      ...product,
      formattedPrice: formatValue(product.price),
    }));
  }, [products]);

  const handleNavigatorBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleNavigatorItem = useCallback(
    (productId: string) => {
      navigation.navigate('ItemCart', { listId, productId });
    },
    [navigation]
  );

  return (
    <Component>
      <Header>
        <GoBackButton onPress={handleNavigatorBack}>
          <Icon name="chevron-left" size={20} color="#ECEFF1" />
        </GoBackButton>

        <TittleWrapper>
          <Icon name="shopping-cart" size={48} color="#FCD034" />
          <CartCost>{cartTotalFormatted}</CartCost>
        </TittleWrapper>
      </Header>

      <Content
        data={productsFormatted}
        keyExtractor={(productFormatted) => productFormatted.id}
        ListFooterComponent={<View style={{ height: 0, marginBottom: 60 }} />}
        renderItem={({ item: productFormatted }) => {
          return productFormatted.catch ? (
            <TouchableOpacity
              style={{ paddingHorizontal: 20 }}
              onLongPress={() => {
                handleNavigatorItem(productFormatted.id);
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: '#A09EBC',
                  padding: 4,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: 'NunitoSans_400Regular',
                        color: '#BEBEBE',
                      }}
                    >
                      {productFormatted.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'NunitoSans_400Regular',
                        color: '#BEBEBE',
                      }}
                    >
                      {`${productFormatted.quantity}x ${productFormatted.unit}`}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontFamily: 'NunitoSans_400Regular',
                      color: '#BEBEBE',
                    }}
                  >
                    {productFormatted.formattedPrice}
                  </Text>
                </View>
                <Icon
                  name="check"
                  size={16}
                  color="#f7f7fe"
                  style={{
                    backgroundColor: '#82B659',
                    borderRadius: 16,
                    padding: 2,
                    marginLeft: 6,
                  }}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ paddingHorizontal: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: '#A09EBC',
                  padding: 4,
                }}
              >
                <Text style={{ fontFamily: 'NunitoSans_400Regular' }}>
                  {productFormatted.name}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    handleNavigatorItem(productFormatted.id);
                  }}
                >
                  <Icon
                    name="circle"
                    size={16}
                    color="#A09EBC"
                    style={{
                      padding: 8,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      <FinishShopButtom onPress={() => {}}>
        <FinishShopButtomText>Finalizar compra</FinishShopButtomText>
      </FinishShopButtom>
    </Component>
  );
};

export default Cart;
