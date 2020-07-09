import styled from 'styled-components/native';

export const Component = styled.View`
  flex: 1;
  background: #d7d6e5;
  position: relative;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  background: #554fa0;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const Content = styled.View`
  flex: 1;
`;

export const GoBackButton = styled.TouchableOpacity`
  padding: 15px;
`;

export const ListName = styled.TextInput`
  font-family: 'NunitoSans_400Regular';
  font-size: 20px;
  color: #f7f7fe;
  flex: 1;
`;

export const MenuButtom = styled.TouchableOpacity`
  padding: 15px;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background: #f7f7fe;
  padding-left: 20px;
  margin: 20px 20px 0 20px;
`;

export const ProductName = styled.Text`
  font-family: 'NunitoSans_400Regular';
  font-size: 18px;
`;

export const RemoveProductButtom = styled.TouchableOpacity`
  padding: 10px 20px;
  margin-left: auto;
`;

export const InputWrapper = styled.View`
  background: #f7f7fe;
  margin: 15px auto;
  width: 80%;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
`;

export const Input = styled.TextInput`
  padding: 8px 16px;
  flex: 1px;
`;

export const InputButtom = styled.TouchableOpacity`
  background: #554fa0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 12px;
`;
