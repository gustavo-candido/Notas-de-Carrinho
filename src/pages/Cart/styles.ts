import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Product } from './index';

export const Component = styled.View`
  background: #d7d6e5;
  flex: 1;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  padding: 15px;
`;

export const TittleWrapper = styled.View`
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  right: 30px;
  flex-direction: row;
  align-items: center;
`;

export const CartCost = styled.Text`
  font-family: 'NunitoSans_400Regular';
  margin-left: 20px;
  font-size: 24px;
  color: #f7f7fe;
`;

export const Content = styled(FlatList as new () => FlatList<Product>)`
  background: #f7f7fe;
  margin-top: 40px;
  width: 80%;
  margin-bottom: 40px;
  border-radius: 8px;
`;

export const FinishShopButtom = styled(RectButton)`
  background: #857edc;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const FinishShopButtomText = styled.Text`
  font-family: 'NunitoSans_400Regular';
  font-size: 16px;
  color: #f7f7fe;
`;
